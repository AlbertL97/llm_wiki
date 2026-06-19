import os
import re
import urllib.request
import json
import time
from datetime import datetime

WIKI_DIR = "wiki"
INDEX_PATH = "wiki/index.md"
LOG_PATH = "wiki/log.md"
RAW_DIR = "raw"

# The 4 new files to process
NEW_FILES = [
    "Behavioral Signatures of Large Language Models.md",
    "Post _ LinkedIn.md",
    "Trajectory Safety Observatory for Vulnerable-User Interactions.md",
    "What Is AI Psychology_.md"
]

def call_gemini(api_key, prompt, json_mode=False):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key={api_key}"
    headers = {"Content-Type": "application/json"}
    
    body = {
        "contents": [{"parts": [{"text": prompt}]}]
    }
    if json_mode:
        body["generationConfig"] = {"responseMimeType": "application/json"}
        
    req = urllib.request.Request(url, data=json.dumps(body).encode("utf-8"), headers=headers, method="POST")
    
    max_retries = 5
    backoff = 2
    for attempt in range(max_retries):
        try:
            with urllib.request.urlopen(req) as response:
                res_body = json.loads(response.read().decode("utf-8"))
                return res_body["candidates"][0]["content"]["parts"][0]["text"]
        except Exception as e:
            print(f"Error calling Gemini (attempt {attempt + 1}/{max_retries}): {e}")
            if attempt < max_retries - 1:
                print(f"Retrying in {backoff} seconds...")
                time.sleep(backoff)
                backoff *= 2
            else:
                print("Max retries reached. Gemini API call failed.")
                return None

def parse_frontmatter(content):
    title = ""
    source = ""
    description = ""
    body = content
    
    match = re.match(r"^---\s*\n(.*?)\n---\s*\n", content, re.DOTALL)
    if match:
        yaml_text = match.group(1)
        body = content[match.end():]
        for line in yaml_text.splitlines():
            if ":" in line:
                parts = line.split(":", 1)
                key = parts[0].strip().lower()
                val = parts[1].strip().strip('"').strip("'")
                if key == "title":
                    title = val
                elif key == "source":
                    source = val
                elif key == "description":
                    description = val
    return title, source, description, body

def clean_json_string(text):
    # Replace invalid backslash single quotes with plain single quotes
    text = text.replace(r"\'", "'")
    return text

def main():
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("GEMINI_API_KEY environment variable not set. Exiting.")
        return
        
    # Load existing concept filenames in wiki/
    all_files = os.listdir(WIKI_DIR)
    concept_ids = []
    for f in all_files:
        if f.endswith(".md") and not f.startswith("source-") and f not in ["index.md", "log.md"]:
            concept_ids.append(f.replace(".md", ""))
            
    print(f"Available concept pages in wiki: {concept_ids}")
    
    current_date = datetime.now().strftime("%Y-%m-%d")
    changed_pages = []
    ingested_details = []
    
    for filename in NEW_FILES:
        filepath = os.path.join(RAW_DIR, filename)
        if not os.path.exists(filepath):
            print(f"File not found: {filepath}, skipping.")
            continue
            
        print(f"\nProcessing local file: {filename}")
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
            
        title, source_url, description, body_text = parse_frontmatter(content)
        if not title:
            title = filename.replace(".md", "")
        if not description:
            description = body_text[:300] + "..."
            
        # Combine description and body snippet
        combined_desc = f"{description}\n\n--- Content Snippet ---\n{body_text[:2500]}"
        
        print(f"Parsed Title: {title}")
        print(f"Parsed Source: {source_url}")
        
        relevance_prompt = f"""
You are an expert AI researcher building a Human-AI/Robot Interaction Psychology wiki.
Evaluate if this article/paper is highly relevant to the psychology of AI/robot interaction, trust, social companions, mental health, explainability, anthropomorphism, or measurement methodologies.
Title: {title}
Description and Content: {combined_desc}
Source URL: {source_url}

Available concept page IDs in our wiki: {concept_ids}

If it is NOT relevant, return:
{{"relevant": false}}

If it IS relevant, return a JSON object with:
{{
  "relevant": true,
  "summary_paragraph": "A 1-2 sentence summary of this source's main findings.",
  "source_summary_markdown": "A full, structured Source Summary Wiki page in Markdown. Use headings, bullet points for key findings, a 'Sources' section citing the raw file '[filename]', 'Last updated' as {current_date}, and a 'Related pages' section listing links to concept pages like [[concept-id]].",
  "related_concepts": ["concept-id1", "concept-id2"], // MUST be a subset of the available concept IDs: {concept_ids}
  "clean_filename": "lowercase-hyphenated-safe-name" // e.g. beyond-usability-withdrawal-design
}}

IMPORTANT: Your output MUST be valid JSON. Avoid unescaped double quotes inside JSON string values. Use single quotes or escape them as \\" so that json.loads() does not fail. Do NOT escape single quotes (e.g. do NOT output \\').
Return ONLY valid JSON. No markdown wrappers like ```json.
"""
        res_text = call_gemini(api_key, relevance_prompt, json_mode=True)
        if not res_text:
            print("Failed to get relevance response from Gemini.")
            continue
            
        res_text_cleaned = clean_json_string(res_text)
        try:
            res_json = json.loads(res_text_cleaned)
        except Exception as e:
            print(f"Failed to parse JSON response: {e}\nResponse: {res_text_cleaned}")
            continue
            
        if not res_json.get("relevant"):
            print("Source determined to be not relevant.")
            # Remove original file if irrelevant
            try:
                os.remove(filepath)
                print(f"Deleted irrelevant raw file: {filepath}")
            except Exception as ex:
                print(f"Error deleting irrelevant file: {ex}")
            continue
            
        clean_name = res_json["clean_filename"]
        raw_name = f"raw_{clean_name}.md"
        src_page_name = f"source-{clean_name}.md"
        
        # Write prefixed raw file
        new_raw_path = os.path.join(RAW_DIR, raw_name)
        with open(new_raw_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Created prefixed raw file: {new_raw_path}")
        
        # Remove original file
        try:
            os.remove(filepath)
            print(f"Deleted original raw file: {filepath}")
        except Exception as e:
            print(f"Error deleting original file: {e}")
            
        # Write source summary page
        src_path = os.path.join(WIKI_DIR, src_page_name)
        src_md = res_json["source_summary_markdown"].replace("[filename]", raw_name)
        with open(src_path, "w", encoding="utf-8") as f:
            f.write(src_md)
        print(f"Created source summary page: {src_path}")
        changed_pages.append(f"wiki/{src_page_name}")
        
        time.sleep(10)
        
        # Update related concept pages
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
                    updated_md = re.sub(r"^```markdown\s*", "", updated_md)
                    updated_md = re.sub(r"\s*```$", "", updated_md)
                    with open(concept_path, "w", encoding="utf-8") as f:
                        f.write(updated_md.strip() + "\n")
                    print(f"Updated concept page: {concept_path}")
                    if f"wiki/{concept_id}.md" not in changed_pages:
                        changed_pages.append(f"wiki/{concept_id}.md")
                time.sleep(10)
                
        ingested_details.append({
            "title": title,
            "raw_file": f"raw/{raw_name}",
            "src_page": f"wiki/{src_page_name}",
            "clean_filename": clean_name
        })
        
    if not ingested_details:
        print("No new files successfully ingested.")
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
2. Insert the new source summary links alphabetically or at the end of the '## Source summaries' list. Ensure there are no duplicate links.
3. Output the ENTIRE updated index.md.
Output ONLY the updated markdown, no code blocks or extra text.
"""
    updated_index = call_gemini(api_key, index_prompt)
    if updated_index:
        updated_index = re.sub(r"^```markdown\s*", "", updated_index)
        updated_index = re.sub(r"\s*```$", "", updated_index)
        with open(INDEX_PATH, "w", encoding="utf-8") as f:
            f.write(updated_index.strip() + "\n")
        print("Updated wiki/index.md successfully.")
        changed_pages.append("wiki/index.md")
        
    # Step 4: Append to wiki/log.md
    print("Appending to wiki/log.md...")
    log_sources = "\n".join([f"- raw/{os.path.basename(d['raw_file'])}" for d in ingested_details])
    log_changed = "\n".join([f"- {p}" for p in changed_pages])
    log_summary = "\n".join([f"- Ingested \"{d['title']}\" and created summary page {d['src_page']}." for d in ingested_details])
    
    log_entry = f"""
 
## {current_date} — Ingested Batch 11 of Local Clippings

**Source(s)**:  
{log_sources}

**Changed pages**:  
{log_changed}

**Summary of changes**:  
{log_summary}
- Automatically compiled new sources and updated related concept pages via local execution script.

**Open issues**:  
- None.
"""
    with open(LOG_PATH, "a", encoding="utf-8") as f:
        f.write(log_entry)
    print("Appended log entry.")

if __name__ == "__main__":
    main()
