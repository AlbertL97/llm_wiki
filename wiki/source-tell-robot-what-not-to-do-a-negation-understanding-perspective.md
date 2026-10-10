# Source Summary: Tell Robot What Not to Do: A Negation Understanding Perspective

## Authors

*   Anonymous

## Date

*   Last updated: 2026-10-10

## Summary

This paper addresses the crucial challenge of enabling robots to understand and follow negated instructions, a fundamental aspect of natural human-robot interaction. The authors introduce **NegaAlign**, a novel, parameter-efficient framework designed to extend existing Vision-Language-Action (VLA) models. NegaAlign incorporates **Negation Transformation Layers** and a **teacher-guided alignment mechanism** to allow VLAs to process and adhere to instructions specifying what the robot should *not* do, while still performing its primary task. A new benchmark, **NegaBench**, is also presented for systematic evaluation. Experimental results show substantial improvements in negated instruction following without sacrificing performance on affirmative instructions, indicating a significant step towards more capable and safer human-robot collaboration.

## Key Findings

*   **Need for Negation Understanding:** Robots require the ability to understand negative constraints (e.g., "do not touch X") for more natural and safe human-robot interaction.
*   **NegaAlign Framework:** A parameter-efficient, plug-and-play solution that integrates into existing VLA models.
    *   Utilizes **Negation Transformation Layers** to adapt intermediate representations for negation.
    *   Employs **teacher-guided alignment** to ground actions based on negative constraints.
*   **NegaBench Benchmark:** A new evaluation suite for assessing robot performance under negated instructions across various scenarios and domains.
*   **Significant Performance Gains:** NegaAlign dramatically improves negated instruction success rates (e.g., from 2.60% to 88.45% on $π_{0.5}$ for NegaBench) while preserving affirmative instruction performance.

## Implications

*   Enhances the intuitiveness and safety of human-robot interaction by allowing users to specify exclusions.
*   Facilitates more complex task execution where constraints are essential.
*   Contributes to the development of more robust and context-aware AI agents.

## Sources

*   [Tell Robot What Not to Do: A Negation Understanding Perspective](http://arxiv.org/abs/2610.11952v1)

## Related Pages

*   [[human-robot-interaction]]
*   [[human-ai-interaction]]
*   [[trust]]
*   [[anthropomorphism]]
*   [[measurement-tools]]