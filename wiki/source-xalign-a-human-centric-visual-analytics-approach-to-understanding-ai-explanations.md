# XALIGN: A Human-centric Visual Analytics Approach to Understanding AI Explanations

## Introduction
This paper presents XALIGN, a visual analytics system aimed at improving how humans understand and verify AI explanations. It is particularly relevant for high-stakes applications where domain experts need to reconcile AI predictions with existing knowledge.

## Problem Addressed
Traditional XAI evaluation focuses on technical metrics. A key challenge arises when different explanation methods produce contradictory results, which are hard to detect when viewed separately. This hinders domain experts from validating AI outputs against their specialized knowledge.

## Solution: XALIGN
XALIGN offers a visual analytics workflow and interface that enables users to compare multiple AI explanation methods simultaneously. Specifically, it visualizes rule-based explanations alongside feature attribution methods (TreeSHAP, KernelSHAP, LIME) for the same model.

## Key Features
*   **Side-by-Side Comparison:** Allows direct visual comparison of different explanation types.
*   **Visibility of Discrepancies:** Makes agreements and contradictions between methods evident.
*   **Integration with Domain Knowledge:** Facilitates exploration of explanations in the context of expert knowledge.

## Case Studies
XALIGN was applied to:
*   The German Credit dataset.
*   A meteorological dataset using ICON model output and Cloudnet observations.

These case studies demonstrated XALIGN's ability to reveal discrepancies not visible when examining explanation methods in isolation.

## Expert Evaluation
An evaluation with three domain specialists found XALIGN to be:
*   **Useful** for identifying influential features.
*   **Beneficial** for avoiding over-trust in AI predictions.

*Note:* Participants without an XAI background found the linking of rules to attributions more challenging.

## Sources
*   XALIGN: A Human-centric Visual Analytics Approach to Understanding AI Explanations (http://arxiv.org/abs/2610.31015v1)

## Last updated
2026-10-25

## Related pages
*   [[explainability]]
*   [[trust]]
*   [[human-ai-interaction]]