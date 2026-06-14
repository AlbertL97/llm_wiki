import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Calendar, ArrowLeft, Link2, FileCode } from 'lucide-react';

interface WikiPage {
  id: string;
  title: string;
  summary: string;
  sources: string[];
  lastUpdated: string;
  content: string;
  related: string[];
  type: 'concept' | 'source';
}

interface WikiPageProps {
  page: WikiPage;
  wikiDb: Record<string, WikiPage>;
  onSelectPage: (id: string) => void;
}

export const WikiPage: React.FC<WikiPageProps> = ({ page, wikiDb, onSelectPage }) => {
  // Pre-process wikilinks: [[target_id|label]] or [[target_id]] to markdown links
  const processMarkdown = (text: string) => {
    let processed = text;

    // 1. Process [[page-id|display]] or [[page-id]]
    processed = processed.replace(/\[\[([^\]#|]+)(?:#[^\]|]*)?(?:\|([^\]]*))?\]\]/g, (_match, targetId, displayLabel) => {
      const cleanId = targetId.trim().toLowerCase();
      const targetPage = wikiDb[cleanId];
      const label = displayLabel ? displayLabel.trim() : (targetPage ? targetPage.title : targetId.trim());
      return `[${label}](#/page/${cleanId})`;
    });

    // 2. Process absolute file links to wiki pages: [label](file:///.../wiki/some-page.md)
    processed = processed.replace(/\[([^\]]+)\]\(file:\/\/\/[^)]*\/wiki\/([^)]+\.md)\)/g, (_match, label, filename) => {
      const cleanId = filename.replace('.md', '').toLowerCase();
      return `[${label}](#/page/${cleanId})`;
    });

    // 3. Process absolute file links to raw papers: [label](file:///.../raw/some-paper.md)
    processed = processed.replace(/\[([^\]]+)\]\(file:\/\/\/[^)]*\/raw\/([^)]+\.md)\)/g, (_match, label, _filename) => {
      // Just keep as a static source label since local raw files are not hosted in the SPA
      return `<span class="source-file-badge">📄 ${label}</span>`;
    });

    return processed;
  };

  // Find backlinks (which other pages link to this page)
  const backlinks = Object.values(wikiDb).filter(otherPage => {
    if (otherPage.id === page.id) return false;
    return otherPage.related.includes(page.id) || otherPage.content.toLowerCase().includes(`[[${page.id}`);
  });

  const processedContent = processMarkdown(page.content);

  // Parse source summaries mapping
  const sourcePages = page.sources.map(srcName => {
    // Try to find the source summary page that matches this raw filename
    const matchedSource = Object.values(wikiDb).find(p => {
      if (p.type !== 'source') return false;
      // Compare normalized name or match raw source metadata
      const cleanSrc = srcName.replace('.md', '').toLowerCase().replace(/[^a-z0-9]/g, '');
      const cleanId = p.id.replace('source-', '').replace(/[^a-z0-9]/g, '');
      return cleanSrc.includes(cleanId) || cleanId.includes(cleanSrc);
    });
    return {
      rawName: srcName,
      pageId: matchedSource ? matchedSource.id : null,
      pageTitle: matchedSource ? matchedSource.title : null
    };
  });

  return (
    <div className="content-panel">
      <div className="content-wrapper">
        {/* Back navigation button if selected page is not the index */}
        {page.id !== 'index' && (
          <button 
            className="control-btn" 
            onClick={() => onSelectPage('index')}
            style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px', width: 'auto', padding: '0 16px' }}
          >
            <ArrowLeft style={{ width: '16px', height: '16px' }} />
            <span>Back to Index</span>
          </button>
        )}

        {/* Page Type Badge */}
        <span className={`page-type-badge ${page.type}`}>
          {page.type === 'concept' ? '🧠 Concept & Construct' : '📄 Source Summary'}
        </span>

        {/* Title */}
        <h1 className="wiki-title">{page.title}</h1>

        {/* Metadata */}
        <div className="page-metadata">
          <div className="metadata-item">
            <Calendar style={{ width: '14px', height: '14px' }} />
            <span>Updated: {page.lastUpdated || 'Recently'}</span>
          </div>
          {page.type === 'concept' && (
            <div className="metadata-item">
              <Link2 style={{ width: '14px', height: '14px' }} />
              <span>{page.related.length} Connections</span>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="markdown-body">
          <ReactMarkdown 
            components={{
              // Intercept standard Markdown links to handle hash-based SPA routing
              a: ({ href, children }) => {
                if (href && href.startsWith('#/page/')) {
                  const targetId = href.replace('#/page/', '');
                  return (
                    <span 
                      className={`wiki-link ${targetId.startsWith('source-') ? 'source' : ''}`}
                      onClick={() => onSelectPage(targetId)}
                    >
                      {children}
                    </span>
                  );
                }
                return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
              }
            }}
          >
            {processedContent}
          </ReactMarkdown>
        </div>

        {/* Sources Section for Concept Pages */}
        {page.type === 'concept' && sourcePages.length > 0 && (
          <div className="sources-card">
            <h3 className="sources-card-title">
              <FileCode style={{ width: '18px', height: '18px', color: 'var(--accent-cyan)' }} />
              <span>Cited Sources ({sourcePages.length})</span>
            </h3>
            <ul className="sources-list">
              {sourcePages.map((src, idx) => (
                <li key={idx} className="source-item">
                  <span className="source-bullet"></span>
                  {src.pageId ? (
                    <span 
                      className="wiki-link source" 
                      onClick={() => onSelectPage(src.pageId!)}
                      style={{ cursor: 'pointer' }}
                    >
                      {src.pageTitle || src.rawName}
                    </span>
                  ) : (
                    <span>{src.rawName}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Backlinks Section */}
        {backlinks.length > 0 && (
          <div className="backlinks-card">
            <h3 className="sources-card-title" style={{ marginBottom: '12px' }}>
              <Link2 style={{ width: '18px', height: '18px', color: 'var(--accent-purple)' }} />
              <span>Backlinks ({backlinks.length})</span>
            </h3>
            <div className="backlinks-grid">
              {backlinks.map(bl => (
                <div 
                  key={bl.id} 
                  className="backlink-item"
                  onClick={() => onSelectPage(bl.id)}
                >
                  <div className="backlink-title">{bl.title}</div>
                  <div className="backlink-summary">{bl.summary}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
