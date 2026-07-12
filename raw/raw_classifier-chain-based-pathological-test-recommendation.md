# Classifier Chain-based Pathological Test Recommendation

**Authors:** Not specified in the provided text.

**Date:** Not specified in the provided text (but URL suggests a submission date of 2026-07-08).

**Summary:**

This paper addresses the challenge of delayed and subjective diagnostic test recommendations in healthcare by introducing an automated system. The system frames pathological test recommendation as a multi-label classification problem, leveraging the Classifier Chain (CC) technique to account for inter-dependencies between different tests. Data was collected from SOUTHERN.IML pathology and augmented with expert knowledge to create a custom dataset.

Key aspects and findings include:

*   **Problem Addressed:** Hindered effective patient care due to delayed test recommendations and subjective physician interpretations.
*   **Proposed Solution:** A pathological test recommendation system that uses patient symptoms to speed up test selection before physician consultation.
*   **Methodology:** Implemented as a multi-label classification task using the Classifier Chain (CC) technique.
*   **Dataset:** Utilized data from SOUTHERN.IML pathology, enhanced with expert input.
*   **Machine Learning Algorithms Compared:** Logistic Regression, Decision Tree, and Random Forest.
*   **Performance:** The Logistic Regression with CC model achieved the highest overall accuracy (98.83%). An ensemble model using Majority Voting provided a good balance with a precision of 0.93, recall of 0.85, and F1-score of 0.89.
*   **Explainability:** Employed Explainable AI (XAI) techniques, specifically SHAP (SHapley Additive Explanations), to provide transparency and identify how individual symptoms contribute to test recommendations.
*   **Clinical Interpretability:** The model's diagnostic reasoning, revealed by SHAP, was found to be consistent with established medical knowledge, increasing confidence in its reliability.
*   **Impact:** The system can help physicians make more logical decisions in critical scenarios and improve the efficiency of the diagnostic process.

**Conclusion:** The study concludes that CC can enhance the efficiency of traditional algorithms in the diagnostic process by providing accurate test recommendations.