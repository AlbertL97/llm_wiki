# Explainable AI for Solar PV Power Forecasting: From Model Selection to Trustworthy, Reproducible Deployment

**Authors:** Not specified in the provided text.
**Date:** Not specified in the provided text (but version is v1 and year is 2611, suggesting a future publication date).

## Summary

Machine learning (ML) is widely used for solar photovoltaic (PV) power forecasting, but current practices often lead to difficulties in comparing accuracy figures and building trust. Issues include inconsistent validation methods (e.g., random splits), lack of reference forecasts, and incomplete reporting of feature attributions. This paper proposes a reproducible workflow to improve the trustworthiness and transparency of ML models for PV power forecasting.

### Key Findings and Contributions:

*   **Problem Statement:** Inaccuracy and lack of trust in ML-based solar PV power forecasts due to methodological inconsistencies.
*   **Proposed Solution:** A reproducible workflow integrating automated model search with Explainable AI (XAI).
*   **Methodology:** 
    *   Reviews main ML families for PV forecasting (tree ensembles, deep models, foundation models).
    *   Implements a workflow combining automated model search and XAI.
    *   Tests the workflow on an openly available dataset for a 16.32 kWp plant in Porto, Portugal, with one-day-ahead forecasting.
*   **Results:
    *   The best models achieved a normalized root mean square error (nRMSE) of 11.6% of installed capacity, significantly outperforming smart persistence.
    *   Input feature selection had a greater impact on accuracy than the choice among strong algorithms.
    *   Shuffled cross-validation showed mild optimism.
    *   Conformal calibration improved prediction intervals, with 80% intervals covering 81.7% of observations (up from 64.5% before calibration).
    *   SHAP (SHapley Additive exPlanations) rankings were stable when models were retrained on different periods but shifted when correlated inputs were removed, highlighting that attributions are model-specific properties rather than intrinsic plant properties.
*   **Practical Lessons & Open Problems:** The paper concludes with practical insights and identifies future research directions, including deployment on edge hardware and adaptation to climate change.

## Relevance to AI/Robot Interaction Psychology

While the primary focus is on technical aspects of AI for solar forecasting, the paper touches upon critical psychological elements relevant to Human-AI interaction:

*   **Trust:** The core motivation is to make AI forecasts more "trustworthy." This directly relates to the psychology of trust in AI systems, exploring how to build and maintain user confidence in AI-generated predictions, especially in critical applications like energy forecasting.
*   **Explainability:** The emphasis on "explainable AI" (XAI) is fundamental. Understanding *why* an AI makes a certain prediction (e.g., through feature attributions like SHAP) is crucial for user comprehension, debugging, and ultimately, trust. This aligns with the psychological need for transparency and understanding in human-AI interactions.
*   **Human-AI Interaction:** Although not directly about social robots or companions, the principles of making AI outputs understandable and reliable are transferable to broader human-AI interaction contexts. Users need to understand the AI's capabilities and limitations to interact with it effectively and safely.

## Potential Concept Page Mappings:

*   Explainability
*   Trust
*   Human-AI Interaction

## Future Work/Considerations:

*   Deployment on edge hardware could involve different human-computer interaction challenges depending on the interface.
*   The impact of climate change implies a dynamic environment, requiring AI systems that can adapt and communicate their evolving performance and uncertainties to human users.
