# Benchmarking Large Language Models on Heterogeneous Cognitive and Biomedical Knowledge Graphs: The Role of Graph Grounding in Multi-Hop Reasoning and Hallucination Mitigation

**Authors:** Not specified in the provided text.
**Date:** 2026-11-06 (based on the provided URL format v1)

## Summary

Large language models (LLMs) are increasingly utilized in biomedical and cognitive neuroscience domains. However, their reliability in reasoning over heterogeneous knowledge graphs (KGs) is still a subject of investigation. This paper benchmarks five LLMs (GPT-5.1, Gemini 2.0 Pro, Llama 3, Qwen, and BioGPT) against five KGs (DrugBank, NeuroSynth, Cognitive Atlas, Brain Map, and GDPKG). A multi-tier query dataset was developed to assess reasoning depth and factual accuracy under both KG-aware (graph-grounded) and KG-agnostic conditions. The study found substantial inter-annotator agreement for the dataset (Cohen's kappa of 0.781, Fleiss' kappa of 0.77).

Key findings indicate that general-purpose LLMs, specifically GPT-5.1 and Gemini 2.0 Pro, generally outperform domain-specific models in multi-hop and complex reasoning tasks. However, performance degrades as query complexity increases for all models. Crucially, grounding LLMs with KGs demonstrably reduces hallucination rates across all models tested. Contrary to expectations, domain-specific models did not consistently show superior performance over general-purpose models when not grounded in a KG.

The research underscores the importance of integrating broad LLM capabilities with structured domain knowledge for improved accuracy and reliability. Practical recommendations are offered for selecting LLM-KG integration strategies based on task complexity and available computational resources. The paper also discusses the potential of hybrid neuro-symbolic architectures for advancing personalized medicine, diagnosing cognitive disorders, and developing explainable AI (XAI) systems.