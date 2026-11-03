Authors: R. H. Adhikari, N. H. Nguyen, V. S. K. Nallamilli, S. L. Lee, H. L. Lee, S. C. Lee, S. P. Kim
Date: 2026-11-03

Title: Specificity Bias and the Wikipedia Paradox: An xAI Analysis of AI Text Detectors under Domain Shift

Abstract:
The widespread adoption of Large Language Models (LLMs) demands reliable detection of human-authored versus synthetic text. However, current Transformer-based detectors often experience severe performance degradation during domain shifts and operate as opaque classifiers. This paper investigates the robustness and interpretability of fine-tuned Transformer models (DistilBERT, RoBERTa) by evaluating them against a custom out-of-distribution (OOD) dataset of hyper-local news synthesized via open-source LLMs (Llama 3, Mistral, Gemma). To analyze model decision boundaries, we apply a tripartite Explainable AI (xAI) framework using SHAP. Our analysis reveals three key phenomena:

1.  **Call-to-Action Syndrome:** Detectors often rely on a 'Call-to-Action' syndrome inherent to instruction-tuned LLMs rather than generic machine text.
2.  **Specificity Bias:** We observe a 'Specificity Bias,' where LLMs successfully bypass detection by hallucinating specific named entities and mimicking conversational imperfection.
3.  **Wikipedia Paradox:** We illustrate the 'Wikipedia Paradox,' wherein formal, objective human writing is frequently misclassified as AI due to its low statistical burstiness.

These findings demonstrate that purely statistical detection paradigms face systematic limitations in highly structured human domains, emphasizing the critical need for semantically-aware, interpretable detection architectures.