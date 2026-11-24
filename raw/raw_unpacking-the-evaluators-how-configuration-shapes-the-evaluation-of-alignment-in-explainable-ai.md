# Unpacking the Evaluators: How Configuration Shapes the Evaluation of Alignment in Explainable AI

**Authors:** Not specified in the provided text.
**Date:** 2026-11-24 (based on last update date requested)

## Summary of Findings:

This paper addresses the critical issue of human-centered evaluation in Explainable AI (XAI), particularly focusing on how well AI explanations align with human reasoning and expert knowledge. The authors point out that current evaluation methods, often relying on manual validation or automated alignment-based metrics against ground truth (GT), are susceptible to implicit biases stemming from various design choices.

These design choices include:
*   **GT representations:** The nature of the predefined ground truth used for comparison.
*   **Metric families:** The specific types of metrics employed to measure alignment.
*   **Metric formulations:** Whether soft or hard metrics are used.
*   **Thresholding strategies:** The criteria used to determine acceptable alignment levels.

To tackle this, the research formalizes alignment evaluation within a structured "configuration space." This framework allows for a systematic analysis of how different design choices interact and influence evaluation outcomes. The paper introduces a structured alignment evaluation framework that models these interactions across various datasets (2D/3D, synthetic/real-world).

Key findings from their experiments include:
*   **Systematic Flows:** Specific combinations of XAI methods, GT, and metric configurations lead to distinct alignment outcomes and behavior patterns (e.g., variations between soft/hard metric implementations).
*   **Threshold Sensitivity:** Different metric families and attribution structures exhibit varying degrees of sensitivity to chosen thresholds.

The overarching conclusion is that alignment evaluation is not a fixed or invariant measure of explanation quality. The paper aims to provide practical guidance for developing more reliable and behavior-aware XAI evaluation protocols by understanding and controlling these influential configuration factors.