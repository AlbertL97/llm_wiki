# Human-Centered Explainable AI for TinyML Edge Devices: A Pareto-Based Selection Framework with LLM-Guided Design

**Authors:** Anonymous
**Date:** 2026-08-10 (based on arXiv submission date)

## Comprehensive Summary:

The article addresses the challenge of deploying Explainable AI (XAI) on resource-constrained TinyML edge devices, especially in clinical settings where local inference is crucial for timely decision-making by healthcare professionals and patients. The authors frame the selection of XAI methods as a human-centered, multi-objective design problem that balances qualitative stakeholder preferences, explanation quality (e.g., fidelity, stability), and deployment costs.

**Key Contributions and Framework Components:**

*   **Problem Formulation:** The core problem is selecting appropriate XAI methods for TinyML edge devices under strict resource limitations. This is framed as a human-centered multi-objective optimization problem.
*   **LLM-Guided Design Interface:** A novel aspect is the integration of a Large Language Model (LLM) to translate qualitative stakeholder preferences (e.g., desired explanation characteristics) into concrete candidate XAI methods.
*   **Selection Framework:** The proposed framework consists of:
    1.  **LLM Mapping:** Translating stakeholder needs into a set of potential XAI methods.
    2.  **Feasibility Filtering:** Eliminating methods that are computationally infeasible for the target TinyML device.
    3.  **Pareto-Based Optimization:** Identifying a set of Pareto-efficient solutions that represent optimal trade-offs between explanation quality metrics (fidelity, stability) and proxy-based deployment costs.
*   **Trade-off Exposure:** The framework aims to systematically expose and characterize the trade-offs between different XAI methods, providing insights into their implications for explanation quality and deployment feasibility.
*   **Proof-of-Concept Evaluation:** The paper includes an evaluation on a skin lesion classification task to demonstrate how the framework can compare XAI methods and identify Pareto-efficient solutions.
*   **Scope Limitations:** The current evaluation focuses on the computational selection stages. Physical deployment on microcontrollers (MCUs) and empirical validation with human experts are noted as future work.

## Relevance to Wiki Concepts:

This work is highly relevant as it directly discusses the human-AI interface, the role of explainability in AI adoption, and the potential impact on decision-making in sensitive domains like healthcare. While not directly about social companionship or mental health applications *per se*, the principles of building trust and understanding through explainable AI are fundamental to how humans interact with and accept AI systems, which can extend to those applications.