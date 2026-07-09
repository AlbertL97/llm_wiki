# DiRLU: Unlearning to Protect: A Distilled Reinforcement Learning Framework with Privacy-Preserving Feature Unlearning and XAI for IoT Security

**Authors:** Not specified in the provided text.
**Date:** 2026-07-09 (from URL version)

## Summary Details:

**Problem:**
* Botnets pose a significant cybersecurity threat to IoT devices, which often lack built-in protection.
* Existing AI-based solutions for IoT security are often too resource-intensive for edge deployment.
* These solutions also lack the capability to forget sensitive or outdated features without full retraining, posing privacy concerns.

**Proposed Solution: DiRLU (Distilled Reinforcement Learning with Unlearning)**
* A lightweight, reinforcement learning-driven framework for IoT security.
* Employs knowledge distillation to transfer knowledge from a heavier 'teacher' model to a more efficient 'student' model.
* Both models are trained using the A2C reinforcement learning algorithm.
* Includes a post-hoc unlearning mechanism to selectively remove targeted features from the model, ensuring privacy and compliance with regulations like GDPR (right to be forgotten).
* Restored features demonstrate negligible performance loss, indicating reversibility of the unlearning process.

**Key Features and Benefits:**
* **Efficiency:** Requires only 2,370 FLOPS, making it significantly more efficient (approx. 3.87x) than state-of-the-art models for edge deployment.
* **Privacy-Preserving Unlearning:** Allows selective forgetting of sensitive or outdated features without retraining.
* **High Performance:** The student model achieves 99.60% accuracy and a 99.80% F1 score.
* **Explainability (XAI):** Integrates LIME to interpret model decisions and identify key predictive features, enhancing transparency.
* **Scalability:** Designed to be a practical and scalable IoT security solution.
* **Data Utilization:** Leverages 25% of the BoT-IoT dataset for stronger model development, compared to 5% in many benchmarks.

**Underlying Technologies:**
* Reinforcement Learning (A2C algorithm)
* Knowledge Distillation
* Post-hoc Model Unlearning
* Explainable AI (LIME)

**Evaluation:**
* Demonstrates high accuracy and F1 scores.
* Quantifies computational efficiency (FLOPS).
* Confirms the reversibility of the unlearning process.

**Relevance to AI/Robot Interaction Psychology:**
While primarily a cybersecurity paper, the inclusion of **Explainable AI (XAI)** touches upon the psychology of understanding and trusting AI systems. The concept of **privacy-preserving unlearning** could also have implications for user trust and perceived control over AI systems, especially in personal or sensitive environments where IoT devices are common.