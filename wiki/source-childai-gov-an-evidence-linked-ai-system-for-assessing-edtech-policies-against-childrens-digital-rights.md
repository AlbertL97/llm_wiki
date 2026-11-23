# ChildAI-Gov: An Evidence-Linked AI System for Assessing EdTech Policies Against Children's Digital Rights

**Last updated:** 2026-11-23

## Overview

This paper introduces ChildAI-Gov, an AI system designed to automate and enhance the assessment of educational technology (EdTech) policies concerning children's digital rights. The rapid integration of generative AI in education has outpaced the development of effective governance frameworks, making manual policy evaluation a bottleneck. ChildAI-Gov aims to provide an evidence-linked, explainable approach to this challenge.

## Key Findings

*   **System Functionality:** ChildAI-Gov processes EdTech policies to assess their alignment with children's digital rights, specifically focusing on five dimensions: safety, privacy, transparency, autonomy, and non-discrimination.
*   **Scoring Mechanism:** The system assigns a "Child Rights Impact Score" (CRIS) by integrating judgments from a large language model (GPT-4o-mini) with deterministic rule checks.
*   **Explainability and Grounding:** A core feature is the use of retrieval-augmented generation (RAG) to ground each score in specific provisions from a curated knowledge base of children's rights frameworks (including the EU AI Act and UNICEF guidance). This ensures that scores are traceable to their evidentiary basis.
*   **Dataset and Validation:** The study includes the creation of the AIPolicy-EdTech dataset, comprising 57 real EdTech policies. The five dimensions of the CRIS score showed strong internal consistency (Cronbach's alpha = 0.79).
*   **Impact of Grounding:** The evidence-linking mechanism was found to significantly increase the stringency of the assessment. Policies that might pass an ungrounded evaluation were often rejected by ChildAI-Gov due to its reliance on explicit evidence.
*   **Scope and Purpose:** The system is intended as a decision support tool for evaluating documented policy commitments, not for observing real-world behavior or making definitive legal compliance judgments.

## Limitations

*   The assessment is based on the text of policies and not on the actual implementation or observable effects of EdTech tools.
*   The system does not provide legal judgments.

## Sources

*   ChildAI-Gov: An Evidence-Linked AI System for Assessing EdTech Policies Against Children's Digital Rights, arXiv:2611.27799v1

## Related pages

*   [[explainability]]
*   [[human-ai-interaction]]
*   [[measurement-tools]]
