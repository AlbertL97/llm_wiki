import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const wikiDir = path.resolve(__dirname, '../../wiki');
const srcDir = path.resolve(__dirname, '../src');

// Ensure source folder exists
if (!fs.existsSync(srcDir)) {
  fs.mkdirSync(srcDir, { recursive: true });
}

const allFiles = fs.readdirSync(wikiDir).filter(f => f.endsWith('.md'));

const wikiDb = {};
const graphData = {
  nodes: [],
  links: []
};

// Set of page IDs to verify links
const pageIds = new Set(allFiles.map(f => f.slice(0, -3)));

for (const file of allFiles) {
  const filePath = path.join(wikiDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  const id = file.slice(0, -3); // remove .md
  const isSource = id.startsWith('source-');

  // Simple parsing regexes
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : id;

  const summaryMatch = content.match(/\*\*Summary\*\*:\s*([^\n\r]+)/);
  const summary = summaryMatch ? summaryMatch[1].trim() : '';

  const lastUpdatedMatch = content.match(/\*\*Last updated\*\*:\s*([^\n\r]+)/);
  const lastUpdated = lastUpdatedMatch ? lastUpdatedMatch[1].trim() : '';

  // Extract Sources (from bullet list)
  const sources = [];
  const sourcesSectionMatch = content.match(/\*\*Sources\*\*:\s*([\s\S]*?)(?=\r?\n\r?\n|\r?\n---)/);
  if (sourcesSectionMatch) {
    const bulletRe = /-\s*(.+)/g;
    let match;
    while ((match = bulletRe.exec(sourcesSectionMatch[1])) !== null) {
      sources.push(match[1].trim());
    }
  }

  // Extract related links
  const related = [];
  const relatedSectionMatch = content.match(/## Related pages\s*([\s\S]*)$/);
  if (relatedSectionMatch) {
    // Look for [[link]] style wikilinks
    const wikiLinkRe = /\[\[([^\]#|]+)/g;
    let match;
    while ((match = wikiLinkRe.exec(relatedSectionMatch[1])) !== null) {
      const targetId = match[1].trim().toLowerCase();
      if (pageIds.has(targetId)) {
        related.push(targetId);
      }
    }
  }

  // Extract main body content
  // Remove orienting header info and Related pages section
  let bodyContent = content;
  const dividerIndex = content.indexOf('---');
  if (dividerIndex !== -1) {
    bodyContent = content.slice(dividerIndex + 3);
  }
  const relatedIndex = bodyContent.indexOf('## Related pages');
  if (relatedIndex !== -1) {
    bodyContent = bodyContent.slice(0, relatedIndex);
  }
  bodyContent = bodyContent.trim();

  // Add to database
  wikiDb[id] = {
    id,
    title,
    summary,
    sources,
    lastUpdated,
    content: bodyContent,
    related,
    type: isSource ? 'source' : 'concept'
  };

  // Add node to graph
  graphData.nodes.push({
    id,
    name: title,
    val: isSource ? 1.5 : 3, // concepts are larger
    group: isSource ? 2 : 1, // 1 = concept (cyan), 2 = source (purple)
    summary
  });
}

// Construct links (directed edges)
const linkSet = new Set();
for (const [id, page] of Object.entries(wikiDb)) {
  for (const relId of page.related) {
    if (pageIds.has(relId)) {
      // Ensure unique links (undirected representation for display simplicity)
      const linkKey = [id, relId].sort().join('->');
      if (!linkSet.has(linkKey)) {
        linkSet.add(linkKey);
        graphData.links.push({
          source: id,
          target: relId
        });
      }
    }
  }
}

// Write outputs
fs.writeFileSync(path.join(srcDir, 'wiki_db.json'), JSON.stringify(wikiDb, null, 2));
fs.writeFileSync(path.join(srcDir, 'graph.json'), JSON.stringify(graphData, null, 2));

console.log(`Pre-build parse complete: processed ${allFiles.length} pages.`);
