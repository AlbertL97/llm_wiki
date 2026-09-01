# XAI2CSI: Interpreting CSI with eXplainable AI for Human Activity Recognition

**Authors:** Not specified in the provided text.
**Date:** Not specified in the provided text (arxiv.org/abs/2608.31034v1 suggests a publication in 2026).

## Summary Details:

This paper addresses the challenge of generalization in Deep Learning (DL) models used for Human Activity Recognition (HAR) that rely on Wi-Fi Channel State Information (CSI). These models often fail to perform well across different users, environments, and device setups because CSI is highly sensitive to the surrounding context.

The authors introduce **XAI2CSI**, a framework designed to improve the understanding and robustness of these CSI-based HAR systems by integrating eXplainable Artificial Intelligence (XAI).

**Key aspects of XAI2CSI:

*   **Purpose:** To analyze DL-based CSI sensing systems and understand model decisions and generalization failures.
*   **Methodology:** Employs SAGE, a model-agnostic explainability method.
*   **Analysis Scope:** Quantifies the temporal, spectral, and spatial contributions of CSI to HAR decisions.
*   **Evaluation:** Conducted under both nominal and cross-context scenarios using IEEE 802.11ax data.

**Main Findings:

*   The considered DL model demonstrates limited robustness to unseen conditions.
*   This lack of robustness is attributed to an **over-reliance on context-specific CSI patterns**.
*   When deployment conditions change, the model misinterprets the underlying signal dynamics.

**Contribution:** The proposed methodology and findings offer a reference framework for exploring alternative solutions and guiding the development of more robust and transparent Wi-Fi sensing systems.
