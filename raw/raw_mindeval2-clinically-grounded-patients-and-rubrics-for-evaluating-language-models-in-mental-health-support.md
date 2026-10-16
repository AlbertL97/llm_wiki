# MindEval2: Clinically Grounded Patients and Rubrics for Evaluating Language Models in Mental Health Support

**Authors:** Not specified in the provided text.
**Date:** 2026-10-16 (based on example format, original arXiv date may differ).

## Summary

The increasing use of AI chatbots for mental health support necessitates rigorous evaluation. Existing evaluation methods often lack realism and practical utility, using overly forthcoming synthetic patients and opaque judgment scales. To address this, the authors propose **MindEval2**, a comprehensive evaluation framework consisting of two main components:

1.  **Mental Health Quality Rubrics (MHQR):** Developed in collaboration with PhD-level psychologists, these rubrics break down response quality into explicit, operational criteria, offering greater interpretability and actionability compared to existing taxonomies.
2.  **MindSim:** This component is an LLM harness designed for patient simulation. It combines carefully crafted patient profiles with tools to enable more varied, challenging, and realistic multi-turn interactions. A key feature of MindSim is its memory component, which updates between interactions, allowing for the modeling of longitudinal aspects crucial in mental health.

The authors evaluated 18 proprietary and open-weight models using MindEval2. Their findings indicate that while frontier models have improved in surface-level quality and boundary adherence, **guidance calibration** emerges as the dominant failure mode, accounting for most of the quality gap across all tested models.

## Key Findings:

*   **Problem:** Current benchmarks for evaluating AI in mental health support are limited by unrealistic patient simulations and opaque evaluation metrics.
*   **Solution:** Introduction of **MindEval2**, an evaluation framework comprising:
    *   **MHQR:** Clinically validated rubrics for detailed response quality assessment.
    *   **MindSim:** A patient simulation harness with realistic profiles, tools, and memory for longitudinal interactions.
*   **Evaluation Results:** 18 models tested showed improvements in basic quality but struggled with **guidance calibration**.
*   **Dominant Failure Mode:** Guidance calibration remains the primary challenge, significantly impacting overall quality across models.

## Implications:

MindEval2 provides a more robust and clinically relevant method for assessing the safety and efficacy of AI in mental health. The identification of guidance calibration as a critical failure point offers a clear direction for future model development.