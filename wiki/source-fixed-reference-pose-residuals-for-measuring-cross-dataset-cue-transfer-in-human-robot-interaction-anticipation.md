# Source Summary: Fixed-Reference Pose Residuals for Measuring Cross-Dataset Cue Transfer in Human-Robot Interaction Anticipation

**Authors:** Wei Zhou, Zihong Zhou, Kaan Vural, Katsuya Ogawa, Kuniaki Takahashi, Michael V. W. Morris

**Last updated:** 2026-10-09

## Introduction
This paper addresses the critical challenge of enabling social and service robots in public spaces to anticipate when a nearby person is about to approach and interact with them. Accurate anticipation allows robots to prepare responses proactively, enhancing user experience and safety. A key hurdle is the ability of predictive models, trained on one robot's data, to generalize to different robots and environments (cross-dataset and cross-platform transfer).

## Research Question
What human cues support the anticipation of interaction intent when predictive models are transferred across different robot platforms and environments?

## Methodology
The study introduces a novel **Fixed-Reference Pose Residuals (FRPR)** model. This model decomposes the prediction of interaction intent into two components:

*   **Geometry Term:** A fixed prediction based on geometric features derived from a person's bounding box and mask.
*   **Pose Term:** An additive correction learned by a temporal network from the person's body pose.

This architectural choice allows for the independent evaluation of the transferability and contribution of pose-based cues versus static geometric cues.

## Datasets
Experiments were performed using two public egocentric datasets collected by different robots:

*   HUI360
*   SSUP-A

Transfers were tested in both directions: SSUP-A to HUI360, and HUI360 to SSUP-A.

## Key Findings

*   **Asymmetric Cue Transferability:** The pose residual significantly improved prediction accuracy (measured by Average Precision - AP) when transferring from SSUP-A to HUI360 (from 0.277 to 0.321). However, the reverse transfer direction showed no measurable gain from the pose component. This asymmetry persisted even with a more robust, source-selected geometry reference.
*   **Measurement Tool, Not Peak Performance:** The FRPR model's architecture, particularly freezing the geometry predictor, did not yield higher AP than joint training. Simple geometric baselines and tree ensemble models remained competitive or superior in prediction accuracy. This indicates that the FRPR model's value lies in its ability to **measure** cue transfer, rather than solely in maximizing prediction performance.
*   **Head Orientation as a Transferable Cue:** Adding a residual based on head orientation provided small, but measurable, performance gains in both transfer directions, suggesting it is a more robust cue across different contexts than general body pose alone.
*   **Differential Cue Stability:** Post hoc analysis revealed that `face camera` direction remained a consistent predictor across datasets. In contrast, `head pitch` exhibited reversed discriminative directionality between the HUI360 and SSUP-A datasets, highlighting context-dependent interpretability of cues.
*   **Overall Anticipation Challenge:** Even with sophisticated neural models utilizing geometric information, detection rates for target interactions remained low (at most 17% with source-selected thresholds), underscoring the inherent difficulty of achieving robust human-robot interaction anticipation in diverse, real-world scenarios.

## Contributions
This work provides a novel methodology for quantifying the transferability of visual cues used in human-robot interaction anticipation. It offers insights into which cues are more robust to changes in robot embodiment and environment, informing the design of more adaptable and effective HRI systems.

## Sources
*   [Fixed-Reference Pose Residuals for Measuring Cross-Dataset Cue Transfer in Human-Robot Interaction Anticipation](http://arxiv.org/abs/2610.12245v1)

## Related pages
*   [[human-robot-interaction]]
*   [[human-ai-interaction]]
*   [[measurement-tools]]
*   [[qualitative-methods]]