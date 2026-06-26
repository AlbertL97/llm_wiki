Authors: [Unknown]
Date: 2026-06-26
Title: Auditing Framing-Sensitive Behavioral Instability in Large Language Models for Mental Health Interactions
URL: http://arxiv.org/abs/2606.26982v1

Summary:
Large Language Models (LLMs) are increasingly used in psychologically sensitive applications like mental health support. Behavioral stability and consistency are crucial for trustworthy human-AI interaction in these domains. However, LLMs can exhibit framing-sensitive behavioral instability, where semantically similar concerns presented with different contextual framings lead to different responses. This variability challenges user expectations and complicates AI reliability assessments.

Prior research has focused on behavioral outcomes, but this work explores how framing effects manifest in the internal representations of aligned language models.

Key Findings:

*   **Framing Sensitivity:** Controlled experiments using matched prompts across multiple framing conditions demonstrate that framing systematically alters the interpretive response tendencies of LLMs.
*   **Internal Representations:** Layer-wise probing analyses reveal that behavior-associated information is decodable throughout the transformer's depth, though the strength of decoding varies by architecture.
*   **Robustness to Framing:** Held-out framing probes consistently remained above chance across architectures, even when controlling for strong lexical baselines, indicating genuine sensitivity to framing.
*   **Behavioral Modulation:** Activation steering experiments suggest that representational directions associated with framing can partially influence downstream behavioral outcomes.
*   **Implications for Trustworthiness:** The findings underscore that robustness to contextual variation is a significant factor in evaluating the consistency and trustworthiness of conversational AI systems, especially those deployed in mental health settings.