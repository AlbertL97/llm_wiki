# Harnessing LLMs for Reliable Academic Supervision: A Comparative Study

**Authors:** Not specified in the provided text.
**Date:** 2026-07-19 (based on provided URL date)

## Summary

Large language models (LLMs) often generate fluent but unreliable outputs, posing challenges for deployment in high-stakes decision systems. This paper presents 'harness engineering' as a solution, which involves composing deterministic scaffolding around an LLM core to enhance its reliability. The authors conducted a case study in academic supervision, a domain requiring high-stakes recommendations, longitudinal accountability, and structured workflows.

They compared a baseline system (ASA) using a GPT-5 chatbot with no scaffolding against a multi-module system (ASuS). ASuS utilized a smaller LLM (GPT-4o-mini) wrapped in a LangGraph harness. This harness included features such as:

*   Symbolic-semantic retrieval
*   Schema-validated outputs
*   LLM-as-judge with bounded retry
*   Human-in-the-loop (HITL) gates
*   Deterministic weighted risk scoring with LLM narration
*   Per-node SQLite audit trail

The evaluation focused on six harness-mechanism dimensions: grounding, explainability, consistency, process integrity, cognitive load, and constraint adherence.

A blind ten-rater hybrid evaluation, supplemented by model-harness ablation studies, revealed that ASuS significantly outperformed ASA on all dimensions. ASuS achieved a pooled mean score of 4.08 compared to ASA's 1.23. The ablation studies further indicated that the structural contributions of the harness were largely model-invariant.

The study concludes that harness engineering is crucial for applications where reliability, traceability, and institutional consistency are paramount, challenging the prevailing notion that only larger models guarantee better performance.