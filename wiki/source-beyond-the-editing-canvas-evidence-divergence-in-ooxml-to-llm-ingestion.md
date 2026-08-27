# Beyond the Editing Canvas: Evidence Divergence in OOXML-to-LLM Ingestion

## Overview
This paper investigates a critical flaw in how Large Language Models (LLMs) process Office Open XML (OOXML) documents (Word, Excel, PowerPoint). It demonstrates that the content an LLM ingests can differ significantly from what a human user sees in the Microsoft Office editing suite, a phenomenon termed 'plural ground truth'. This divergence, caused by 'evidence forks' within the OOXML specification, compromises the integrity of the information LLMs use and impacts the trustworthiness of AI systems relying on document analysis.

## Key Findings
*   **Plural Ground Truth:** A single OOXML file can yield different evidentiary views when processed by Microsoft Office versus when extracted for an LLM. Each consumer treats its view as authoritative.
*   **Evidence Forks:** Specific constructions within the OOXML specification lead to these view divergences. The study identifies 21 such 'evidence forks' across Excel, Word, and PowerPoint.
*   **Ubiquitous Extraction Issues:** All 13 extraction tools tested exhibited evidence from at least one fork.
*   **LLM Exposure to Hidden Data:** LLM APIs and web chatbots exposed 'trap' information (task-relevant facts present in extraction but not visible in Office) in a significant percentage of trials (48-76% for APIs across 21 mechanisms).
*   **Upstream Influence:** The ingestion path and extractor configuration heavily influence evidence exposure, often before the data reaches the LLM.
*   **Default Path Vulnerability:** Popular open-source LLM projects often use default ingestion paths that are susceptible to these divergence issues.

## Implications
The findings highlight a critical gap in the 'ingestion contract' for LLMs, where the method of evidence derivation is often unstated and can lead to AI systems operating on a different understanding of reality than human users. This has profound implications for AI trustworthiness, especially in sensitive domains requiring high data integrity.

## Sources
*   [Beyond the Editing Canvas: Evidence Divergence in OOXML-to-LLM Ingestion](http://arxiv.org/abs/2608.25880v1)

## Last updated
2026-08-27

## Related pages
*   [[human-ai-interaction]]
*   [[trust]]
*   [[chatbots]]