Title: ConceptSMILE: Auditing the Trustworthiness of Concept-Based Explainable AI
Authors: Junseok Kim, Haeyong Yoon, Jiyoung Kim, Jinho Kim
Date: 2026-07-09

Abstract:
Concept-based explainable artificial intelligence (AI) can make model reasoning more human-understandable, but concept-level outputs are not automatically trustworthy. We introduce ConceptSMILE, a model-agnostic perturbation-based auditing framework for evaluating the reliability of concept-based explanations. Rather than replacing SMILE, ConceptSMILE extends its perturbation-based logic from feature- or region-level attribution to the auditing of human-understandable concept explanations. The framework perturbs input regions, measures concept-response shifts, applies locality weighting, and fits an XGBoost surrogate to approximate local concept behaviour. Reliability is assessed through attribution accuracy, surrogate fidelity, faithfulness, stability, and consistency. We evaluate ConceptSMILE on retinal fundus images by comparing MedSAM-derived visual concepts with VLM-based semantic concepts. Results show that reliability varies across concepts and pathways: MedSAM achieves stronger spatial attribution and the highest surrogate fidelity ($R^2 = 0.8503$, $R_w^2 = 0.8465$), while the VLM pathway shows stronger vessel faithfulness and stronger stability under selected artefact conditions. ConceptSMILE provides an independent audit layer for evaluating the trustworthiness of concept-based XAI.

Key Findings:
- Concept-based XAI aims to make AI reasoning more understandable to humans, but its trustworthiness needs auditing.
- ConceptSMILE is a new model-agnostic framework for auditing the reliability of concept-based AI explanations.
- It extends existing perturbation-based methods to audit concept-level explanations.
- The framework measures concept-response shifts, uses locality weighting, and fits a surrogate model (XGBoost) to assess local concept behavior.
- Reliability is evaluated using metrics like attribution accuracy, surrogate fidelity, faithfulness, stability, and consistency.
- Evaluation on retinal fundus images showed varying reliability across different concepts and AI pathways (MedSAM vs. VLM-based).
- MedSAM excelled in spatial attribution and surrogate fidelity, while VLM showed better faithfulness and stability under certain conditions.
- ConceptSMILE offers an independent layer for auditing the trustworthiness of concept-based XAI, contributing to more reliable human-AI interactions.