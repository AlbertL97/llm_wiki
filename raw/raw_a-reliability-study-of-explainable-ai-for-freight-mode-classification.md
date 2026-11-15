# A Reliability Study of Explainable AI for Freight Mode Classification

**Authors:** Elias B. K. Nyame, David A. W. Agyemang, Bismark K. O. Oduro

**Date:** 2026-11-15 (based on provided URL structure)

## Abstract

Machine learning models are increasingly used to support freight transportation decisions, but their predictions are rarely accompanied by evidence that the associated explanations can be trusted. In this study we investigate explainable machine learning for classifying shipments as Air/Air Charter or Truck/Ocean using the PEPFAR Supply Chain Management System Delivery History dataset, with 5,964 shipment records and 47 input features after cleaning, where freight cost and pack price are excluded as near-proxies of the transportation mode. We compare three Multi-Layer Perceptron (MLP) architectures, Logistic Regression, Random Forest, and gradient boosting with imbalance-aware metrics and paired significance tests across one hundred random replications. We then evaluate the explanations themselves, namely the stability of SHAP feature rankings across retraining and across models, the faithfulness of SHAP and LIME attributions under a feature-deletion test, and the geographic structure of the destination effects, which we map for all 38 destination countries. The results suggest that the tree ensembles significantly outperform the neural and linear models (86.8% against 83.3-85.0% mean testing accuracy) while their leading features remain the most stable across retraining. Removing the five features ranked most important by SHAP or LIME changes the predicted probabilities roughly four times as much as removing randomly chosen features. The destination effects form a coherent geographic pattern that simple port access does not explain. However, models with similar accuracy disagree substantially on which features matter most, and thus explanation stability and faithfulness should be assessed before such explanations are used to support freight transport decisions.

## Key Findings

*   **Model Performance:** Tree ensembles (Random Forest, gradient boosting) outperformed neural networks (MLP) and Logistic Regression in freight mode classification, achieving higher mean testing accuracy.
*   **Explanation Stability:** Leading features identified by SHAP remained more stable across retraining for tree ensemble models compared to other model types.
*   **Explanation Faithfulness:** Removing the top five features identified by SHAP or LIME had a significantly larger impact on predicted probabilities compared to removing random features, suggesting a degree of faithfulness.
*   **Geographic Patterns:** Destination effects exhibited a coherent geographic pattern not solely explained by simple port access.
*   **Trustworthiness of Explanations:** Despite similar accuracy, different models can disagree substantially on feature importance. This underscores the critical need to assess explanation stability and faithfulness before deploying AI for decision support in freight transport.

## Methodology

*   **Dataset:** PEPFAR Supply Chain Management System Delivery History dataset (5,964 shipment records, 47 features).
*   **Models Compared:** Multi-Layer Perceptron (MLP) architectures, Logistic Regression, Random Forest, gradient boosting.
*   **Explanation Methods Evaluated:** SHAP (Shapley Additive Explanations) and LIME (Local Interpretable Model-agnostic Explanations).
*   **Evaluation Metrics:** Imbalance-aware metrics, paired significance tests, feature ranking stability (across retraining and models), feature attribution faithfulness (feature-deletion test).
*   **Analysis:** Mapping of destination effects for 38 countries.
