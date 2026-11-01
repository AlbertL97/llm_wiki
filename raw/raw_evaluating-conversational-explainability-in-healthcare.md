# Evaluating Conversational Explainability in Healthcare: Comparing the Explainability Assistant and a Traditional XAI Dashboard

**Authors:** Not specified in the provided text.
**Date:** v1, 2026-10-24 (extracted from URL)

**Summary:**
This research investigates the effectiveness of conversational interfaces for Explainable AI (XAI) in healthcare settings, comparing a novel "Explainability Assistant" (an LLM function-calling system) against a traditional XAI dashboard.

The study aimed to determine if conversational interaction improves interpretability over existing explanation methods, especially for users without deep machine learning expertise. Both interfaces presented the same Decision Tree classifier for a heart disease prediction model and utilized identical post-hoc explanation methods: SHAP feature attribution, DiCE counterfactuals, and what-if analysis.

**Key Findings:**

*   **No Clear Winner:** The within-subjects user study with five healthcare professionals (medical students to clinicians) revealed complementary strengths and weaknesses for both modalities, rather than a decisive preference.
*   **Conversational Assistant Strengths:** The Explainability Assistant was found to offer easier initial access and facilitated patient-specific explanations.
*   **Dashboard Strengths:** The traditional dashboard excelled at supporting the simultaneous inspection of both global and local information.
*   **Integration Recommendation:** All three participants interviewed after the study recommended integrating conversational and dashboard elements into a single clinical workflow.

**Methodology:**
*   Within-subjects user study comparing two interfaces.
*   Healthcare professionals as participants.
*   Task accuracy, Likert ratings, and free-text questionnaires were used for data collection.
*   Follow-up interviews provided qualitative insights.

**Dataset:** Cleveland Heart Disease dataset.