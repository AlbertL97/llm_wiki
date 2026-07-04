# Algebraic Model Counting for Global Analysis of Optimal Decision Trees

**Last updated:** 2026-07-04

## Overview

This paper introduces Algebraic Decision Tree Counting (ADTC), a formal framework designed for the global analysis of optimal and near-optimal decision trees, crucial for ensuring reliability in Explainable AI (XAI). Inspired by Algebraic Model Counting (AMC), ADTC unifies various analytical tasks like optimization, counting, and sampling into a sum-of-products computation. The proposed dynamic programming algorithm achieves an efficient time complexity relative to the number of features, even for complex decision trees.

## Key Findings and Contributions

*   **Formal Framework (ADTC):** ADTC provides a structured approach to comprehensively analyze the hypothesis space of decision trees.
*   **Unified Analytical Tasks:** Integrates optimization, counting, and sampling into a single algebraic computation.
*   **Efficient Algorithm:** Develops a dynamic programming algorithm with $O^*(n^{O(\Delta)})$ time complexity, handling the exponential growth of decision trees.
*   **Model Behavior Tensors:** Introduces tensors to manage multiple complex constraints (e.g., accuracy, size, fairness) through convolution products.
*   **Global Model Landscape Analysis:** Facilitates the construction of a "model profile" that captures the global trade-offs between different model criteria.
*   **Evidence-Based Model Selection:** Demonstrates utility via the "emtrees" software on real-world datasets, supporting informed model selection, especially in sensitive domains.

## Relevance to Human-AI Interaction Psychology

The paper's focus on global model analysis, explainability, and trade-offs between performance metrics (like fairness) is highly relevant to understanding and building trustworthy AI systems. By offering tools to assess these complex interdependencies, it directly informs how users might perceive, trust, and interact with AI, particularly in sensitive applications.

## Sources

*   Algebraic Model Counting for Global Analysis of Optimal Decision Trees (arxiv.org/abs/2607.02069v1)

## Related pages

*   [[explainability]]
*   [[trust]]
*   [[medical-ai]]
*   [[human-ai-interaction]]
