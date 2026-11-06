# Benchmarking Large Language Models on Heterogeneous Cognitive and Biomedical Knowledge Graphs: The Role of Graph Grounding in Multi-Hop Reasoning and Hallucination Mitigation

## Overview

This paper investigates the performance of Large Language Models (LLMs) when applied to complex reasoning tasks involving biomedical and cognitive knowledge graphs (KGs). It evaluates how well different LLMs can extract and reason over structured information, focusing on the impact of grounding these models with explicit KG data to mitigate factual inaccuracies, commonly known as hallucinations.

## Key Findings

*   **LLM Performance on KGs:** General-purpose LLMs like GPT-5.1 and Gemini 2.0 Pro generally outperform domain-specific models in multi-hop reasoning and complex cognitive tasks over heterogeneous KGs.
*   **Impact of Graph Grounding:** Integrating LLMs with knowledge graphs (KG grounding) significantly reduces hallucination rates across all tested models.
*   **Reasoning Complexity:** Performance of all LLMs declines as the complexity of the reasoning queries increases.
*   **Domain-Specific vs. General-Purpose Models:** Domain-specific models do not consistently outperform general-purpose models without KG grounding, challenging initial hypotheses.
*   **Importance of Hybrid Approaches:** The study highlights the value of combining the broad capabilities of LLMs with structured domain knowledge.
*   **Application Areas:** Findings have implications for personalized medicine, cognitive disorder diagnosis, and the development of explainable AI (XAI).

## Methodology

*   **Models Evaluated:** GPT-5.1, Gemini 2.0 Pro, Llama 3, Qwen, and BioGPT.
*   **Knowledge Graphs Used:** DrugBank, NeuroSynth, Cognitive Atlas, Brain Map, and GDPKG.
*   **Evaluation Dataset:** A multi-tier query dataset designed to assess reasoning depth and factual accuracy.
*   **Conditions:** KG-aware (grounded) vs. KG-agnostic.
*   **Agreement Metrics:** Substantial inter-annotator agreement was achieved using Cohen's kappa (0.781) and Fleiss' kappa (0.77).

## Implications

This research provides practical guidance for selecting LLM-KG integration strategies based on task requirements and computational constraints. It also points towards future directions in developing more reliable and explainable AI systems, particularly in sensitive domains like healthcare and neuroscience.

## Sources

*   Benchmarking Large Language Models on Heterogeneous Cognitive and Biomedical Knowledge Graphs: The Role of Graph Grounding in Multi-Hop Reasoning and Hallucination Mitigation (arxiv.org/abs/2611.08315v1)

## Last updated

2026-11-06

## Related pages

*   [[explainability]]
*   [[medical-ai]]
*   [[human-ai-interaction]]