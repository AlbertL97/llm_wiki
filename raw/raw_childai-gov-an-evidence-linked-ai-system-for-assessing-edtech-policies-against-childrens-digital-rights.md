# ChildAI-Gov: An Evidence-Linked AI System for Assessing EdTech Policies Against Children's Digital Rights

**Authors:** Not specified in the provided text.
**Date:** 2026-11-20 (based on arXiv submission date)

## Summary

This paper presents ChildAI-Gov, an explainable AI system aimed at evaluating educational technology (EdTech) policies concerning children's digital rights. The system addresses the challenge of rapidly evolving generative AI in education outpacing governance, which currently relies on slow, manual, and expert-dependent policy checks. ChildAI-Gov proposes a "Child Rights Impact Score" (CRIS) across five key dimensions: safety, privacy, transparency, autonomy, and non-discrimination. It operates by processing EdTech policies using a combination of a large-language-model (GPT-4o-mini) judgment and deterministic rule checks. A retrieval-augmented generation (RAG) component is crucial, ensuring that every score is linked to supporting evidence by retrieving relevant provisions from a curated knowledge base of children's rights frameworks (e.g., EU AI Act, UNICEF guidance). This grounding allows auditors to trace the basis for each score.

The authors also developed AIPolicy-EdTech, a dataset comprising 57 real EdTech policies. On this dataset, the five dimensions demonstrated good internal consistency (Cronbach's alpha = 0.79). The grounding mechanism was found to make scoring more stringent, while an ungrounded baseline model was significantly more lenient, passing nearly half of the policies where ChildAI-Gov passed none. The system is positioned as a decision support tool based on documented policy commitments, not as an observer of real-world behavior or a determinant of legal compliance.

## Key Findings

*   **ChildAI-Gov System:** An explainable AI system for assessing EdTech policies against children's digital rights.
*   **CRIS Score:** A "Child Rights Impact Score" evaluating policies across safety, privacy, transparency, autonomy, and non-discrimination.
*   **Methodology:** Combines large language model judgments (GPT-4o-mini) with deterministic rule checks.
*   **Grounding Mechanism (RAG):** Links scores to evidence from curated children's rights frameworks (EU AI Act, UNICEF guidance, etc.) for auditability.
*   **AIPolicy-EdTech Dataset:** A dataset of 57 real EdTech policies used for evaluation.
*   **Effectiveness:** Grounding improves scoring rigor, preventing lenient assessments seen in ungrounded models.
*   **Scope:** Provides evidence-linked decision support for policy commitments, not real-world behavior or legal compliance determination.

## Limitations

*   The system focuses on documented commitments within policies, not actual implementation or real-world impact.
*   It does not determine legal compliance.
*   Authorship and specific technical details beyond model names are not fully detailed in the provided abstract.