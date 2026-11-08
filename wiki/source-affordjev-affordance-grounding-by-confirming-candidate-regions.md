# AffordJEV: Affordance Grounding by Confirming Candidate Regions

## Introduction

This paper introduces AffordJEV, a novel approach to affordance grounding, a critical capability for embodied agents, particularly in human-robot interaction (HRI). Affordance grounding involves identifying specific parts of an object responsible for a requested operation.

## Problem Statement

Existing methods for affordance grounding often rely on a "System Two" cognitive paradigm, where AI models generate detailed reasoning chains (chain-of-thought) before producing output, such as bounding boxes or segmentation masks. This approach suffers from:

*   **High Inference Costs:** Significant computational resources are required.
*   **Limited Control:** The semantic decision has little direct influence on the precision of the final region.
*   **Difficult Error Correction:** Mistakes are hard to rectify due to the opaque reasoning process.

The authors argue that locating an affordance is fundamentally a perceptual judgment, not one that necessitates extensive verbal deliberation.

## Proposed Solution: AffordJEV Framework

AffordJEV adopts a "System One" cognitive paradigm, which focuses on rapid, intuitive decision-making. The core contributions are:

1.  **Hierarchical Inference Framework:**
    *   Proposes candidate regions using frozen segmenters.
    *   Confirms these candidates iteratively, moving from the whole object to its parts and sub-parts.
    *   Employs bidirectional evidence passing between hierarchical levels, enabling mutual correction and refinement of decisions.

2.  **Specialized System One Model:**
    *   A System One model is specifically trained for this framework's unique requirements.
    *   Unlike general System One models, it is designed to judge all candidates within a level simultaneously.
    *   It learns directly from the framework's request structures, avoiding text generation.

## Key Findings and Results

*   **Performance:** AffordJEV outperforms traditional chain-of-thought methods.
*   **Generalization:** It demonstrates strong zero-shot transfer capabilities to unseen datasets (UMD and IIT-AFF).
*   **Efficiency:** It is more effective than other System One models operating within the same framework and requires fewer computational "judge requests."
*   **Novelty:** It is claimed to be the first approach to successfully apply System One models to the task of affordance grounding.

## Relevance to HRI

This research significantly advances the capabilities required for effective human-robot interaction by improving a robot's ability to understand and respond to instructions related to object manipulation. By enabling faster and more accurate identification of operational parts, AffordJEV can contribute to more natural, efficient, and less error-prone collaboration between humans and robots.

## Sources

*   AffordJEV: Affordance Grounding by Confirming Candidate Regions (arXiv:2611.07896v1)

## Last updated

2026-11-08

## Related pages

*   [[human-robot-interaction]]
*   [[human-ai-interaction]]
*   [[explainability]]