import os
import re
import urllib.request
import urllib.parse
import xml.etree.ElementTree as ET
import json

log_path = r"c:\Users\lukas\Desktop\Agents_workflow\Gemini\llm_wiki\wiki\log.md"
output_path = r"c:\Users\lukas\Desktop\Agents_workflow\Gemini\llm_wiki\scratch\new_papers.json"

# Parse previously ingested files/titles from log.md to avoid duplicates
ingested_titles = set()
if os.path.exists(log_path):
    with open(log_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Extract titles from log entry headers or lists
    matches = re.findall(r"Ingested\s+\"([^\"]+)\"", content)
    for m in matches:
        ingested_titles.add(m.strip().lower())

def normalize_title(t):
    return re.sub(r"[^\w]", "", t.lower()).strip()

ingested_normalized = {normalize_title(t) for t in ingested_titles}

# ArXiv query constructor
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
url = f"http://export.arxiv.org/api/query?search_query={encoded_query}&max_results=15&sortBy=submittedDate&sortOrder=descending"

print(f"Querying ArXiv API...")
try:
    with urllib.request.urlopen(url) as response:
        xml_data = response.read()
except Exception as e:
    print(f"Error querying ArXiv: {e}")
    xml_data = None

candidates = []

if xml_data:
    root = ET.fromstring(xml_data)
    # ArXiv uses Atom namespace
    ns = {'atom': 'http://www.w3.org/2005/Atom'}
    
    entries = root.findall('atom:entry', ns)
    for entry in entries:
        title = entry.find('atom:title', ns).text.replace('\n', ' ').strip()
        summary = entry.find('atom:summary', ns).text.replace('\n', ' ').strip()
        published = entry.find('atom:published', ns).text.strip()
        id_url = entry.find('atom:id', ns).text.strip()
        
        pdf_url = ""
        for link in entry.findall('atom:link', ns):
            if link.attrib.get('title') == 'pdf':
                pdf_url = link.attrib.get('href')
                
        # Check if already ingested
        norm_title = normalize_title(title)
        if norm_title in ingested_normalized:
            continue
            
        candidates.append({
            "title": title,
            "summary": summary,
            "pdf_url": pdf_url,
            "id_url": id_url,
            "published": published
        })

print(f"Found {len(candidates)} new candidates on ArXiv.")

# Save candidates to new_papers.json
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(candidates, f, indent=2, ensure_ascii=False)

print(f"New candidates saved to scratch/new_papers.json")
