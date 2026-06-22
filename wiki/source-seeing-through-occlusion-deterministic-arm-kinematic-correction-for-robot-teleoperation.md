# Seeing Through Occlusion: Deterministic Arm Kinematic Correction for Robot Teleoperation

**Authors:** K. Nakajima, S. Suzuki, K. Ogata, S. Hirai
**Date:** 2026-06-19

## Overview
This paper presents a novel method called Arm Kinematic Correction (AKC) designed to improve the accuracy of depth estimation in markerless motion capture systems used for robot teleoperation. The primary challenge addressed is the degradation of depth estimation due to self-occlusion, especially during complex upper-limb movements.

## Key Findings

*   **Problem:** Markerless motion capture systems using RGB-D cameras struggle with depth estimation accuracy when parts of the body, like arms, occlude themselves, which is common in teleoperation tasks.
*   **Solution:** The proposed Arm Kinematic Correction (AKC) method enforces geometric constraints, specifically the constant length of arm segments, to reconstruct accurate joint depths even when occluded.
*   **Methodology:** AKC utilizes known wrist positions and predefined arm lengths in a deterministic formulation (based on the Pythagorean theorem) to solve for missing joint depths. This approach avoids the need for complex probabilistic models or extensive parameter tuning.
*   **Validation:** Experiments comparing AKC against a high-precision Vicon reference system showed reliable performance for both static and dynamic joint motions, measured by RMSE and Pearson correlation.
*   **Application:** The effectiveness of AKC was demonstrated through successful motion-mapping teleoperation in both simulated and physical robot environments.
*   **Benefits:** AKC significantly enhances the robustness and anatomical consistency of motion tracking under challenging occlusion conditions, making it a practical solution for real-time applications in human-robot interaction.

## Sources
*   Seeing Through Occlusion: Deterministic Arm Kinematic Correction for Robot Teleoperation (Nakajima, Suzuki, Ogata, Hirai, 2026-06-19)

## Last updated
2026-06-22

## Related pages
*   [[human-robot-interaction]]
*   [[human-ai-interaction]]
*   [[measurement-tools]]