# Source Summary: A Reliability Study of Explainable AI for Freight Mode Classification

This study investigates the reliability of explainable AI (XAI) methods, specifically SHAP and LIME, when applied to freight mode classification. The research used the PEPFAR Supply Chain Management System Delivery History dataset to compare the performance and interpretability of various machine learning models, including tree ensembles, neural networks, and logistic regression. Key findings indicate that while tree ensembles achieved superior accuracy, the stability and faithfulness of their explanations were crucial for establishing trust. The study emphasizes that even models with similar predictive accuracy can offer divergent feature explanations, making the assessment of explanation stability and faithfulness a necessary step before implementing AI for critical decision-making in domains like freight transportation.

## Key Findings

*   **Model Performance:** Tree ensemble models significantly outperformed neural and linear models in classifying freight shipments by mode.
*   **Explanation Stability:** SHAP feature rankings were found to be more stable across retraining and different models for tree ensembles.
*   **Explanation Faithfulness:** Feature-deletion tests indicated that the most important features identified by SHAP and LIME had a substantial impact on model predictions, suggesting a reasonable level of faithfulness.
*   **Geographic Insights:** The study revealed discernible geographic patterns in destination effects that were not fully explained by simple port accessibility.
*   **Trust Concerns:** A critical takeaway is that models with comparable accuracy can disagree considerably on which features are most influential. This highlights the necessity of evaluating the stability and faithfulness of AI explanations before relying on them for decision support.

## Methodology

*   **Dataset:** PEPFAR Supply Chain Management System Delivery History dataset.
*   **Task:** Freight mode classification (Air/Air Charter vs. Truck/Ocean).
*   **Models Explored:** Multi-Layer Perceptron (MLP), Logistic Regression, Random Forest, Gradient Boosting.
*   **XAI Techniques:** SHAP and LIME.
*   **Evaluation:** Stability of feature rankings, faithfulness of attributions via feature deletion, accuracy comparisons, and mapping of destination effects.

## Sources

*   [A Reliability Study of Explainable AI for Freight Mode Classification](http://arxiv.org/abs/2611.15716v1)

## Last updated

2026-11-15

## Related pages

*   [[explainability]]
*   [[trust]]
*   [[human-ai-interaction]]
