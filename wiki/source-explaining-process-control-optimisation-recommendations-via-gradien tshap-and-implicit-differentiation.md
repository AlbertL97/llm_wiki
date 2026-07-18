# Explaining Process Control Optimisation Recommendations via GradientSHAP and Implicit Differentiation

## Introduction

Automated optimisation systems are becoming increasingly prevalent in industrial processes. However, a significant trust gap often exists between the engineers who design these sophisticated algorithms and the operators who are tasked with acting upon their recommendations. To address this, the field of Explainable AI (XAI) has introduced methods like SHAP (SHapley Additive exPlanations) for enhancing the interpretability of machine learning predictions. This research extends such interpretability techniques to the realm of optimisation outputs.

## Core Contribution

This paper introduces a novel approach that seamlessly integrates **Implicit Function Theorem (IFT)** based sensitivity analysis with **SHAP attribution** and **narrative generation via Large Language Models (LLMs)**. The primary objective is to produce explanations of optimisation recommendations that are specifically tailored for industrial operators, thereby aiming to improve trust and adoption.

## Methodology

*   **Leveraging IFT:** The approach utilizes the Implicit Function Theorem to efficiently compute exact parameter sensitivities ($\partial p^*/\partial x$) directly from the optimality conditions of the optimisation problem.
*   **Efficient GradientSHAP:** This computation of sensitivities enables a more efficient calculation of **GradientSHAP** values compared to traditional methods.
*   **LLM for Explanation:** Generated SHAP attributions are then fed into a Large Language Model (LLM) to construct natural language explanations that are understandable and relevant to operators.

## Validation and Results

*   **Industrial Case Study:** The method was evaluated on an industrial **High Pressure Grinding Roll (HPGR)** control optimisation problem, involving 22 features.
*   **Performance Metrics:** The approach achieved SHAP attributions that were highly correlated with those from KernelSHAP (correlation $>0.99$).
*   **Speed Improvement:** A significant speedup of over 40$\times$ was observed, making real-time explanation generation feasible.
*   **Real-world Application:** The system was validated in industrial scenarios, and feedback from domain experts on the quality and usefulness of the generated explanations was collected.

## Impact

This research offers a practical solution to enhance the interpretability and trustworthiness of AI-driven optimisation systems in industrial contexts. By providing operators with clear, efficient, and natural language explanations, it aims to bridge the gap between human operators and AI recommendations, fostering greater confidence and potentially leading to more effective process control.

## Sources

*   [Explaining Process Control Optimisation Recommendations via GradientSHAP and Implicit Differentiation](http://arxiv.org/abs/2607.14970v1)

## Last updated

2026-07-18

## Related pages

*   [[human-ai-interaction]]
*   [[trust]]
*   [[explainability]]
