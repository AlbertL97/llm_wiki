# On the global feature importance for interpretable and trustworthy heat demand forecasting

## Introduction
This paper introduces an ante-hoc Explainable AI (XAI) methodology to assess the global feature importance of Machine Learning (ML) models used for heat demand forecasting. The context is intelligent control of District Heating Systems, where interpretability and trustworthiness are crucial for adherence to standards, customer satisfaction, and managing liability risks.

## Methodology
The research evaluates four approaches to determine global feature importance:

*   **Intrinsic Interpretability:** Leveraging the inherent explainability of the Gradient Boosting ML method.
*   **Post-hoc Methods:** Applying established techniques for explaining ML models after they have been trained:
    *   Partial Dependence Plots (PDP)
    *   Accumulated Local Effects (ALE)
    *   SHapley Additive exPlanations (SHAP)

A significant methodological choice is the exclusion of feature permutation or perturbation techniques. This approach aims to prevent bias that can arise from generating unrealistic data instances through random alterations.

## Discussion and Results
The paper includes a discussion of the findings, analyzing the relationships and complementarities between the different feature importance methods. Crucially, the results are interpreted within the specific operational context of district heating processes, aiming to make the AI's behavior understandable to domain experts and stakeholders.

## Relevance to Trust and Explainability
The core contribution of this work lies in enhancing the trustworthiness of AI systems through explainability. By providing clear insights into which factors most influence heat demand forecasts, the system becomes more reliable and auditable, which is essential for deploying AI in critical infrastructure and sensitive applications.

## Sources
*   `raw/on-the-global-feature-importance-for-interpretable-and-trustworthy-heat-demand-forecasting.md`

## Last updated
2026-08-14

## Related pages
*   [[explainability]]
*   [[trust]]
*   [[human-ai-interaction]]
