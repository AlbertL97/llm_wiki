# ConceptSMILE: Auditing the Trustworthiness of Concept-Based Explainable AI

## Authors
- Junseok Kim
- Haeyong Yoon
- Jiyoung Kim
- Jinho Kim

## Date
2026-07-09

## Summary
This paper introduces ConceptSMILE, a novel framework designed to audit the trustworthiness of concept-based Explainable AI (XAI). While concept-based XAI aims to enhance human understanding of AI model reasoning, the reliability of these concept-level explanations is not guaranteed. ConceptSMILE is a model-agnostic auditing framework that uses perturbation-based methods to evaluate the dependability of concept explanations. It extends existing techniques by applying them to human-understandable concepts, perturbing input regions, measuring concept-response shifts, and employing surrogate models (like XGBoost) to approximate local concept behavior. The framework assesses reliability through various metrics including attribution accuracy, surrogate fidelity, faithfulness, stability, and consistency.

## Key Findings

*   **Problem:** Concept-based XAI explanations, while offering human-understandability, require auditing to ensure their trustworthiness.
*   **Solution:** Introduction of ConceptSMILE, a model-agnostic framework for auditing the reliability of concept-based explanations.
*   **Methodology:** ConceptSMILE perturbs input regions, quantifies concept-response shifts, applies locality weighting, and uses a surrogate model (XGBoost) to approximate local concept behavior.
*   **Evaluation Metrics:** Reliability is assessed using attribution accuracy, surrogate fidelity, faithfulness, stability, and consistency.
*   **Application & Results:** Tested on retinal fundus images, comparing MedSAM and VLM-based concepts. Results indicated that reliability varied between concepts and pathways.
    *   MedSAM demonstrated superior spatial attribution and surrogate fidelity ($R^2 = 0.8503$, $R_w^2 = 0.8465$).
    *   The VLM pathway showed better vessel faithfulness and stability under specific artifact conditions.
*   **Contribution:** ConceptSMILE provides an independent audit layer to enhance the trustworthiness of concept-based XAI, which is vital for reliable human-AI interactions.

## Sources
*   [ConceptSMILE: Auditing the Trustworthiness of Concept-Based Explainable AI](http://arxiv.org/abs/2607.09649v1)

## Last updated
2026-07-13

## Related pages
*   [[explainability]]
*   [[trust]]
*   [[human-ai-interaction]]
*   [[measurement-tools]]
*   [[medical-ai]]