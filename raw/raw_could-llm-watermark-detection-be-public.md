## Could LLM Watermark Detection be Public?

**Authors:** Not specified in the provided description.
**Date:** Not specified in the provided description (however, the URL indicates version 1 dated 2026-10-09).

**Summary:**

This research investigates the feasibility and implications of making watermark detection for Large Language Models (LLMs) publicly accessible. The core tension lies between the benefits of transparency and accountability that a public detector could offer, and the potential security risks it might introduce.

**Key Findings & Contributions:**

*   **Problem:** Watermarking LLM outputs is crucial for tracing chatbot and agentic content. However, releasing watermark detectors publicly could enable attackers to perform targeted edits by using the detector's feedback. Despite this, watermarks are already susceptible to 'uninformed tampering attacks' (attacks that don't use detector feedback).
*   **Quantifying Liability:** The paper first quantifies the additional liability of a public detector in deployment settings, analyzing scenarios with varying levels of access to the detector's output (from token-level scores to binary verdicts).
*   **Split-Key Watermarking:** To address the security concerns, a novel 'split-key' public-private watermarking method is introduced. This method exposes one key via a public detector while retaining another private key for full verification and forensic analysis. An attacker aware of the public key can only manipulate the public signal, leading to an imbalance between public and private scores.
*   **Detection Mechanism:** A statistical test is proposed to detect this imbalance between public and private scores. This test is combined with the full-key verdict in a two-stage detection mechanism.
*   **Attack Evaluation:** The split-key method is evaluated against various removal and forgery attacks, comparing uninformed attacks with detector-informed attacks. The findings suggest that public detection offers limited improvement for removal attacks, as simple rephrasing can already degrade watermarks significantly at a low quality cost. However, public detection *does* enable forgery attacks, which can then be identified by the private verification pipeline.
*   **Conclusion:** Releasing half of the watermark's key information (via a public detector) promotes transparency and interoperability. Crucially, tampering with the publicly released half remains detectable, which can bound the provider's liability and calls into question the necessity of keeping detectors entirely private.

**Implications for Human-AI/Robot Interaction:**

This work has direct implications for trust and accountability in human-AI interactions, particularly concerning the use of LLM-generated content in various applications, including those involving social companions and mental health support.
