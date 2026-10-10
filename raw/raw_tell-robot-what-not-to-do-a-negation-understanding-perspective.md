# Tell Robot What Not to Do: A Negation Understanding Perspective

**Authors:** Anonymous

**Date:** 2026-10-10 (based on v1 timestamp)

**Abstract:**
Instruction following enables robots to perform diverse tasks specified in natural language, making it a fundamental capability for human-robot interaction. Beyond communicating desired outcomes, users also need to specify constraints on what not to do. We investigate how to enable vision-language-action models (VLAs) to follow negated instructions, where robots must accomplish task goals while respecting explicit exclusions. To this end, we propose NegaAlign, a parameter-efficient, plug-and-play framework that extends pretrained VLAs to follow negated instructions through image-language supervision alone. Specifically, we introduce Negation Transformation Layers into selected layers of the vision-language backbone to reshape intermediate instruction representations. Meanwhile, a teacher-guided alignment mechanism is designed to align instruction-relevant visual tokens, transferring action-relevant grounding from instructions that satisfy the negated constraint. The training phase uses supervision constructed from existing demonstrations and updates only the inserted layers, keeping all pretrained parameters frozen, including the action generator. We further introduce NegaBench, a simulation benchmark spanning 10 scenarios across five domains for systematically evaluating manipulation under negated constraints. Experiments across GR00T, $π_0$, and $π_{0.5}$ demonstrate consistent improvements in negated instruction following. With 11.6M trainable parameters, NegaAlign increases the negated-instruction success rate of $π_{0.5}$ from 2.60% to 88.45% on NegaBench and from 12.4% to 88.8% on real-world tasks, while retaining performance on affirmative instructions.

**Key Findings & Contributions:**

*   **Problem:** Current instruction-following robots primarily handle affirmative commands, lacking the ability to understand and adhere to negative constraints (e.g., "don't pick up the red block"). This limits natural language interaction and task safety.
*   **Proposed Solution: NegaAlign Framework:** A parameter-efficient, plug-and-play framework to extend existing Vision-Language-Action (VLA) models for negated instruction following.
    *   **Negation Transformation Layers:** Introduced into VLA backbone to modify intermediate instruction representations, enabling the model to process negation.
    *   **Teacher-Guided Alignment:** Aligns instruction-relevant visual tokens to ground actions based on instructions that satisfy the negated constraint.
    *   **Parameter Efficiency:** Updates only newly inserted layers, keeping pretrained VLA parameters frozen.
*   **NegaBench Benchmark:** A new simulation benchmark with 10 scenarios across 5 domains designed for systematic evaluation of robot manipulation under negated constraints.
*   **Empirical Results:**
    *   Demonstrated significant improvements in negated instruction following across multiple VLA models (GR00T, $π_0$, $π_{0.5}$).
    *   NegaAlign increased the success rate of $π_{0.5}$ from 2.60% to 88.45% on NegaBench and 12.4% to 88.8% on real-world tasks.
    *   Maintained performance on affirmative instructions.

**Implications for Human-AI/Robot Interaction:**

*   Enables more natural and intuitive communication between humans and robots by allowing users to specify what robots should avoid.
*   Enhances safety and reliability of robot operations in human environments.
*   Moves towards more sophisticated AI agents capable of understanding nuanced instructions.