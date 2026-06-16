import os
import re
import urllib.request
import urllib.parse
import xml.etree.ElementTree as ET
import json
from datetime import datetime
import subprocess

# Config
LOG_PATH = r"wiki/log.md"
INDEX_PATH = r"wiki/index.md"
WIKI_DIR = r"wiki"
RAW_DIR = r"raw"

def call_gemini(api_key, prompt, json_mode=False):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={api_key}"
    headers = {"Content-Type": "application/json"}
    
    body = {
        "contents": [{
            "parts": [{"text": prompt}]
        }]
    }
    if json_mode:
        body["generationConfig"] = {"responseMimeType": "application/json"}
        
    req = urllib.request.Request(url, data=json.dumps(body).encode("utf-8"), headers=headers, method="POST")
    try:
        with urllib.request.urlopen(req) as response:
            res_body = json.loads(response.read().decode("utf-8"))
            return res_body["candidates"][0]["content"]["parts"][0]["text"]
    except Exception as e:
        print(f"Error calling Gemini: {e}")
        return None

def normalize_title(t):
    return re.sub(r"[^\w]", "", t.lower()).strip()

def get_ingested_titles():
    ingested = set()
    if os.path.exists(LOG_PATH):
        with open(LOG_PATH, "r", encoding="utf-8") as f:
            content = f.read()
        matches = re.findall(r"Ingested\s+\"([^\"]+)\"", content)
        for m in matches:
            ingested.add(normalize_title(m))
    return ingested

def fetch_arxiv_candidates(ingested):
    keywords = [
        'ti:"human-ai interaction"', 'abs:"human-ai interaction"',
        'ti:"human-robot interaction"', 'abs:"human-robot interaction"',
        'ti:"trust in AI"', 'abs:"trust in AI"',
        'ti:"explainable AI"', 'abs:"explainable AI"',
        'ti:"sycophancy"', 'abs:"sycophancy"',
        'ti:"chatbot"', 'abs:"chatbot"',
        'ti:"anthropomorphism"', 'abs:"anthropomorphism"',
        'ti:"social robot"', 'abs:"social robot"',
        'ti:"chatbot therapists"', 'abs:"chatbot therapists"',
        'ti:"human-chatbot interaction"', 'abs:"human-chatbot interaction"',
        'ti:"AI companion"', 'abs:"AI companion"',
        'ti:"parasocial interaction AI"', 'abs:"parasocial interaction AI"',
        'ti:"conversational agent"', 'abs:"conversational agent"',
        'ti:"attitudes towards AI"', 'abs:"attitudes towards AI"'
    ]
    query_string = " OR ".join(keywords)
    encoded_query = urllib.parse.quote(query_string)
    url = f"http://export.arxiv.org/api/query?search_query={encoded_query}&max_results=10&sortBy=submittedDate&sortOrder=descending"
    
    candidates = []
    try:
        with urllib.request.urlopen(url) as response:
            xml_data = response.read()
            root = ET.fromstring(xml_data)
            ns = {'atom': 'http://www.w3.org/2005/Atom'}
            for entry in root.findall('atom:entry', ns):
                title = entry.find('atom:title', ns).text.replace('\n', ' ').strip()
                summary = entry.find('atom:summary', ns).text.replace('\n', ' ').strip()
                published = entry.find('atom:published', ns).text.strip()
                id_url = entry.find('atom:id', ns).text.strip()
                
                pdf_url = ""
                for link in entry.findall('atom:link', ns):
                    if link.attrib.get('title') == 'pdf':
                        pdf_url = link.attrib.get('href')
                        
                norm = normalize_title(title)
                if norm not in ingested:
                    candidates.append({
                        "type": "paper",
                        "title": title,
                        "description": summary,
                        "url": id_url,
                        "pdf_url": pdf_url,
                        "published": published
                    })
    except Exception as e:
        print(f"Error fetching ArXiv: {e}")
    return candidates

def fetch_google_news_candidates(ingested):
    query = '("chatbot therapist" OR "AI companion" OR "human-robot interaction") psychology'
    encoded_query = urllib.parse.quote(query)
    url = f"https://news.google.com/rss/search?q={encoded_query}&hl=en-US&gl=US&ceid=US:en"
    
    candidates = []
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            xml_data = response.read()
            root = ET.fromstring(xml_data)
            for item in root.findall('.//item'):
                title = item.find('title').text.strip()
                link = item.find('link').text.strip()
                pub_date = item.find('pubDate').text.strip()
                desc = item.find('description').text.strip() if item.find('description') is not None else ""
                
                # Google News titles are usually "Title - Source"
                clean_title = re.sub(r"\s+-\s+[^(-]+$", "", title).strip()
                norm = normalize_title(clean_title)
                if norm not in ingested:
                    candidates.append({
                        "type": "news",
                        "title": clean_title,
                        "description": desc,
                        "url": link,
                        "published": pub_date
                    })
    except Exception as e:
        print(f"Error fetching Google News: {e}")
    return candidates

def main():
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("GEMINI_API_KEY environment variable not set. Exiting.")
        return
        
    print("Reading ingested titles from log...")
    ingested = get_ingested_titles()
    
    print("Fetching candidates from ArXiv...")
    candidates = fetch_arxiv_candidates(ingested)
    
    print("Fetching candidates from Google News...")
    candidates += fetch_google_news_candidates(ingested)
    
    # De-duplicate candidates by normalized title
    seen = set()
    unique_candidates = []
    for c in candidates:
        norm = normalize_title(c["title"])
        if norm not in seen and norm not in ingested:
            seen.add(norm)
            unique_candidates.append(c)
            
    print(f"Found {len(unique_candidates)} unique new candidate(s).")
    if not unique_candidates:
        print("No new content to ingest. Exiting.")
        return
        
    # Limit to top 2 candidates per run to avoid context limits or API rate limits
    selected_candidates = unique_candidates[:2]
    print(f"Selected {len(selected_candidates)} candidate(s) for ingestion.")
    
    current_date = datetime.now().strftime("%Y-%m-%d")
    
    # Load existing concept filenames in wiki/ (excluding source-*, index, log, etc.)
    all_files = os.listdir(WIKI_DIR)
    concept_ids = []
    for f in all_files:
        if f.endswith(".md") and not f.startswith("source-") and f not in ["index.md", "log.md"]:
            concept_ids.append(f.replace(".md", ""))
            
    print(f"Available concept pages in wiki: {concept_ids}")
    
    changed_pages = []
    ingested_details = []
    
    for c in selected_candidates:
        title = c["title"]
        desc = c["description"]
        url = c["url"]
        pub_type = c["type"]
        
        print(f"\nProcessing: {title} ({pub_type})")
        
        # Step 1: Request Gemini to evaluate relevance and generate JSON structure
        relevance_prompt = f"""
You are an expert AI researcher building a Human-AI/Robot Interaction Psychology wiki.
Evaluate if this article/paper is highly relevant to the psychology of AI/robot interaction, trust, social companions, mental health, or anthropomorphism.
Title: {title}
Description: {desc}
URL: {url}

Available concept page IDs in our wiki: {concept_ids}

If it is NOT relevant, return:
{{"relevant": false}}

If it IS relevant, return a JSON object with:
{{
  "relevant": true,
  "summary_paragraph": "A 1-2 sentence summary of this source's main findings.",
  "raw_file_content": "A detailed Markdown raw log representation of the source findings, including authors, date, and comprehensive summary details to save in the raw/ folder.",
  "source_summary_markdown": "A full, structured Source Summary Wiki page in Markdown. Use headings, bullet points for key findings, a 'Sources' section citing the raw file, 'Last updated' as {current_date}, and a 'Related pages' section listing links to concept pages like [[concept-id]].",
  "related_concepts": ["concept-id1", "concept-id2"], // MUST be a subset of the available concept IDs: {concept_ids}
  "clean_filename": "lowercase-hyphenated-safe-name" // e.g. beyond-usability-withdrawal-design
}}
Return ONLY valid JSON. No markdown wrappers like ```json.
"""
        res_text = call_gemini(api_key, relevance_prompt, json_mode=True)
        if not res_text:
            continue
            
        try:
            res_json = json.loads(res_text)
        except Exception as e:
            print(f"Failed to parse JSON response: {e}\nResponse: {res_text}")
            continue
            
        if not res_json.get("relevant"):
            print("Candidate determined to be not relevant.")
            continue
            
        clean_name = res_json["clean_filename"]
        raw_name = f"raw_{clean_name}.md"
        src_page_name = f"source-{clean_name}.md"
        
        # Write to raw/
        raw_path = os.path.join(RAW_DIR, raw_name)
        with open(raw_path, "w", encoding="utf-8") as f:
            f.write(res_json["raw_file_content"])
        print(f"Created raw/ file: {raw_path}")
        
        # Write to wiki/source-*
        src_path = os.path.join(WIKI_DIR, src_page_name)
        # Fix the citation name in the source summary
        src_md = res_json["source_summary_markdown"].replace("[filename]", raw_name)
        with open(src_path, "w", encoding="utf-8") as f:
            f.write(src_md)
        print(f"Created wiki/ source summary: {src_path}")
        changed_pages.append(f"wiki/{src_page_name}")
        
        # Step 2: Update related concept pages
        for concept_id in res_json.get("related_concepts", []):
            concept_path = os.path.join(WIKI_DIR, f"{concept_id}.md")
            if os.path.exists(concept_path):
                print(f"Integrating findings into concept page: {concept_path}")
                with open(concept_path, "r", encoding="utf-8") as f:
                    concept_content = f.read()
                    
                update_prompt = f"""
You are an expert AI researcher. We need to integrate the findings of a new source into the existing wiki concept page `{concept_id}.md`.
Here is the current content of `{concept_id}.md`:
```markdown
{concept_content}
```

Here is the summary of the new source to integrate:
```markdown
{src_md}
```

New Source Citation Name: {raw_name}

Task:
1. Update the 'Sources' list in `{concept_id}.md` to append the new source: `- {raw_name}` (if not already there).
2. Update the 'Last updated' date to `{current_date}`.
3. Integrate the key findings into the appropriate section(s) of the page. You MUST use inline citations in the format `(source: {raw_name})` for all claims added.
4. Output the ENTIRE updated markdown page. Keep all existing headings, structure, and text, only adding the new content logically.
5. In 'Related pages' at the bottom, ensure `[[source-{clean_name}]]` is linked.

Output ONLY the updated markdown. Do not wrap in backticks or add introductory text.
"""
                updated_md = call_gemini(api_key, update_prompt)
                if updated_md:
                    # Strip any accidental triple backticks
                    updated_md = re.sub(r"^```markdown\s*", "", updated_md)
                    updated_md = re.sub(r"\s*```$", "", updated_md)
                    with open(concept_path, "w", encoding="utf-8") as f:
                        f.write(updated_md.strip())
                    print(f"Updated concept page: {concept_path}")
                    if f"wiki/{concept_id}.md" not in changed_pages:
                        changed_pages.append(f"wiki/{concept_id}.md")
                        
        ingested_details.append({
            "title": title,
            "raw_file": f"raw/{raw_name}",
            "src_page": f"wiki/{src_page_name}",
            "clean_filename": clean_name
        })
        
    if not ingested_details:
        print("No candidates successfully ingested.")
        return
        
    # Step 3: Update wiki/index.md
    print("Updating wiki/index.md...")
    with open(INDEX_PATH, "r", encoding="utf-8") as f:
        index_content = f.read()
        
    index_links = "\n".join([f"- [[source-{d['clean_filename']}]] — Summary of {d['title']}." for d in ingested_details])
    index_prompt = f"""
You are an expert wiki maintainer. We need to add the following new source summaries to our `index.md`:
{index_links}

Here is the current content of `index.md`:
```markdown
{index_content}
```

Task:
1. Update the 'Last updated' date to `{current_date}`.
2. Insert the new source summary links alphabetically or at the end of the '## Source summaries' list.
3. Output the ENTIRE updated index.md.
Output ONLY the updated markdown, no code blocks or extra text.
"""
    updated_index = call_gemini(api_key, index_prompt)
    if updated_index:
        updated_index = re.sub(r"^```markdown\s*", "", updated_index)
        updated_index = re.sub(r"\s*```$", "", updated_index)
        with open(INDEX_PATH, "w", encoding="utf-8") as f:
            f.write(updated_index.strip())
        print("Updated wiki/index.md successfully.")
        changed_pages.append("wiki/index.md")
        
    # Step 4: Append to wiki/log.md
    print("Appending to wiki/log.md...")
    log_sources = "\n".join([f"- raw/{os.path.basename(d['raw_file'])}" for d in ingested_details])
    log_changed = "\n".join([f"- {p}" for p in changed_pages])
    log_summary = "\n".join([f"- Ingested \"{d['title']}\" and created summary page {d['src_page']}." for d in ingested_details])
    
    log_entry = f"""

## {current_date} — Cloud Automation Ingestion Ingested {len(ingested_details)} Source(s)

**Source(s)**:  
{log_sources}

**Changed pages**:  
- wiki/log.md  
{log_changed}

**Summary of changes**:  
{log_summary}
- Automatically compiled new sources and updated related concept pages via cloud-scheduler Gemini execution.

**Open issues**:  
- None.
"""
    with open(LOG_PATH, "a", encoding="utf-8") as f:
        f.write(log_entry)
    print("Appended log entry.")
    
    # Step 5: Run compiler parser
    print("Running website compiler parser...")
    subprocess.run(["node", "website/scripts/parse-wiki.js"])
    
if __name__ == "__main__":
    main()
