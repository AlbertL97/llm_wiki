Authors: Unknown
Date: Unknown (based on arXiv URL format, likely a recent submission)

Title: Beyond the Editing Canvas: Evidence Divergence in OOXML-to-LLM Ingestion

Summary:
Large Language Models (LLMs) are increasingly used to process Office Open XML (OOXML) documents, such as Word, Excel, and PowerPoint files, for various workflows including financial analysis, compliance, and information retrieval. A critical, often implicit, assumption in these pipelines is that the 'evidence' ingested by the LLM semantically matches the content displayed to a human user within the Microsoft Office editing interface. This paper demonstrates that this assumption is frequently violated.

The core problem identified is 'plural ground truth', where a single, specification-valid OOXML file can present different evidentiary views depending on whether it is processed by Microsoft Office or extracted for an LLM. Each of these views is treated as authoritative by its respective consumer.

The research introduces the concept of 'evidence forks' to describe specific constructions within OOXML that lead to these divergent views. The authors systematically analyzed the OOXML specification and identified 21 distinct evidence forks across Excel, Word, and PowerPoint, covering six different dimensions of view construction.

Empirical testing confirmed the prevalence of these forks. All 13 extraction tools tested emitted evidence from at least one fork. When these documents were processed by LLMs, including four native-ingestion LLM APIs and seven web chatbots, a significant percentage of the time the LLM was exposed to information (a 'trap') that was present in the extracted data but not visible in the Office editing canvas. Across 21 mechanisms, LLM APIs returned the trap in 48-76% of trials, and eleven of the interfaces returned the trap for 20 out of 21 mechanisms.

Crucially, the study highlights that the exposure of this divergent evidence is not solely determined by the LLM itself, but is significantly shaped by upstream factors such as the ingestion path and the configuration of the extraction tools. A survey of 16 popular open-source LLM projects revealed that default OOXML ingestion paths often utilize extractor families known to be affected by these evidence forks.

Implications:
This divergence poses a significant challenge for the reliability and trustworthiness of AI systems that rely on document analysis. It suggests that a lack of transparency regarding how documents are processed by LLM pipelines can lead to a misunderstanding of the 'ground truth' upon which the AI's reasoning is based. This has implications for areas where accurate information extraction is critical, such as legal discovery, financial reporting, and medical record analysis.