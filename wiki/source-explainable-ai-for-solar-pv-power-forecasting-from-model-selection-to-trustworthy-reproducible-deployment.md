# Source Summary: Explainable AI for Solar PV Power Forecasting: From Model Selection to Trustworthy, Reproducible Deployment

**Last updated:** 2026-11-21

## Overview

This paper addresses the critical challenge of building trust and enabling reproducible comparisons in machine learning (ML) models used for solar photovoltaic (PV) power forecasting. Current practices often lack transparency, making it difficult to assess the reliability of AI-generated forecasts. The authors propose and evaluate a novel, reproducible workflow that integrates automated model selection with Explainable AI (XAI) techniques. This approach aims to enhance the trustworthiness of AI in this domain by making its predictions more understandable and verifiable.

## Key Findings

*   **Trustworthiness in Forecasting:** The research highlights the need for more reliable and comparable ML models for solar PV forecasting, as current methods often suffer from inconsistent validation and reporting.
*   **Reproducible XAI Workflow:** A workflow combining automated model search with XAI is presented as a solution to improve transparency and trust. This workflow was tested on a real-world dataset.
*   **Model Performance and Feature Importance:** Experiments demonstrated that the choice of input features significantly impacts forecast accuracy, more so than the selection among advanced algorithms. The best models achieved a normalized RMSE of 11.6%, substantially better than simpler methods.
*   **Calibration and Uncertainty:** Conformal calibration was found to significantly improve the accuracy of prediction intervals, ensuring they better reflect the actual observed variability.
*   **Interpretation of Explanations:** SHAP values, a common XAI technique, were found to be stable under model retraining but sensitive to input feature correlations. This suggests that model explanations should be interpreted as properties of the *model* rather than intrinsic properties of the physical system being modeled.
*   **Practical Implications:** The paper offers practical lessons for deploying and understanding AI models in energy forecasting and identifies open challenges, including edge deployment and climate change adaptation.

## Sources

*   [Explainable AI for Solar PV Power Forecasting: From Model Selection to Trustworthy, Reproducible Deployment](http://arxiv.org/abs/2611.25894v1)

## Related pages

*   [[explainability]]
*   [[trust]]
*   [[human-ai-interaction]]
