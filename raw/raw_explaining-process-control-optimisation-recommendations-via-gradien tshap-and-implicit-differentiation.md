## Explaining Process Control Optimisation Recommendations via GradientSHAP and Implicit Differentiation

**Authors:** Not specified in the provided text.
**Date:** 2026-07-18 (based on the provided URL structure, assuming it reflects submission or publication date).
**Abstract:** Automated optimisation is increasingly adopted in industrial processes, yet a trust gap persists between engineers who design these algorithms and operators who must act on their recommendations. Explainable AI methods like SHAP (SHapley Additive exPlanations) have transformed interpretability for machine learning predictions; optimisation outputs could benefit from similar techniques. We present an approach that integrates Implicit Function Theorem (IFT) based sensitivity analysis with SHAP attribution and narrative generation via Large Language Models (LLM), producing explanations tailored for operators. Our approach leverages IFT to compute exact parameter sensitivities $\partial p^*/\partial x$ from the optimality conditions, enabling efficient GradientSHAP computation. For an industrial High Pressure Grinding Roll (HPGR) control optimisation problem with 22 features, we achieve equivalent SHAP attributions (correlation $>0.99$ with KernelSHAP) with over 40$\times$ speedup, enabling real-time natural language explanations. We validate on industrial scenarios and present feedback from domain experts on generated explanations.

### Key Findings and Contributions:

*   **Problem Addressed:** A persistent trust gap exists between engineers and operators regarding AI-driven optimisation recommendations in industrial settings.
*   **Proposed Solution:** An integrated approach combining Implicit Function Theorem (IFT) based sensitivity analysis with SHAP attribution and Large Language Model (LLM) for narrative generation.
*   **Mechanism:** IFT is used to compute exact parameter sensitivities ($\partial p^*/\partial x$) from optimality conditions, which facilitates efficient GradientSHAP computation.
*   **Benefits:** Enables faster and more interpretable explanations for AI optimisation outputs.
*   **Empirical Validation:** Tested on an industrial High Pressure Grinding Roll (HPGR) control optimisation problem with 22 features.
*   **Performance:** Achieved SHAP attributions with high correlation to KernelSHAP ($>$0.99) and a significant speedup of over 40$\times$.
*   **Outcome:** Facilitates real-time natural language explanations tailored for operators.
*   **User Feedback:** Validated on industrial scenarios and includes feedback from domain experts on the generated explanations.

### Methodology Details:

*   **Explainable AI (XAI) Techniques:** Utilizes SHAP (SHapley Additive exPlanations) and GradientSHAP.
*   **Sensitivity Analysis:** Employs Implicit Function Theorem (IFT) for efficient computation of parameter sensitivities.
*   **Explanation Generation:** Leverages Large Language Models (LLMs) to create natural language narratives for operator understanding.
*   **Target Domain:** Industrial process control optimisation.
*   **Case Study:** High Pressure Grinding Roll (HPGR) control.
