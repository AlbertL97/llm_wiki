# Unpacking the Evaluators: How Configuration Shapes the Evaluation of Alignment in Explainable AI

This paper examines the critical process of evaluating Explainable AI (XAI) systems, specifically focusing on how human perception and understanding of AI explanations are shaped by the evaluation methodology itself. The authors argue that current methods for assessing the alignment of XAI outputs with human reasoning are heavily influenced by implicit biases arising from design choices within the evaluation setup. These choices include the nature of ground truth representations, the selection of metric families, the specific formulation of metrics (soft vs. hard), and the strategies used for thresholding evaluation results.

Through a formalization of alignment evaluation into a "configuration space," the researchers systematically analyze the impact of these design decisions. Their experiments reveal that specific configurations of XAI methods, ground truth data, and metrics lead to distinct alignment outcomes and behavioral patterns. Furthermore, the sensitivity of these evaluations to threshold settings varies across different metric families and attribution structures. The core finding is that the evaluation of AI explanation quality is not a stable, invariant measure and is highly dependent on the chosen evaluation protocol.

The paper proposes a structured framework and a novel taxonomy of XAI output behavior to enable more reliable and behavior-aware XAI evaluation protocols, offering practical guidance for researchers and developers in the field.

## Key Findings:

*   **Configuration Dependency:** The evaluation of XAI alignment is significantly influenced by the specific choices made in the evaluation design (e.g., ground truth, metric type, thresholds).
*   **Invariant Measure:** Alignment evaluation outcomes cannot be treated as fixed or invariant measures of explanation quality.
*   **Systematic Patterns:** Specific configurations of XAI methods, ground truth, and metrics lead to discernible behavior patterns in alignment outcomes.
*   **Threshold Sensitivity:** The choice of thresholds has a varying impact depending on the metric family and the structure of AI attributions.
*   **Guidance for Robust Evaluation:** The research provides practical insights for designing more reliable and context-aware XAI evaluation protocols.

## Sources:

*   Unpacking the Evaluators: How Configuration Shapes the Evaluation of Alignment in Explainable AI (http://arxiv.org/abs/2611.30816v1)

## Last updated:

2026-11-24

## Related pages:

*   [[explainability]]
*   [[human-ai-interaction]]
*   [[measurement-tools]]