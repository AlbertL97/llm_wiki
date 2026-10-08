# Revisiting Explainable AI through Model-Independent Concept Dictionaries

**Authors:** N/A (Based on the provided text, authors are not specified, but assume for a real entry they would be listed)
**Date:** 2026-10-08 (Inferred from the URL structure, though v1 suggests it's an early version)

## Abstract
Modern applications of AI rely on increasingly complex models. Explainable AI (XAI) has emerged as a set of techniques aimed at improving model transparency. However, existing XAI methods typically assume input features to be inherently interpretable, or they rely on intermediate internal abstractions that are difficult to characterize and highly architecture-specific, hindering consistent use across models. To address these limitations, we propose DictXAI, a method that defines concepts directly in the input domain via a dictionary---a large, potentially overcomplete set of predefined elements, each carrying an interpretable meaning. Technically, DictXAI first computes a sparse code of the input and then attributes the model's prediction to the associated dictionary elements. We demonstrate the actionable nature of DictXAI explanations, showing that they can attribute AI malfunctions (e.g., Clever Hans effects) directly to identifiable artifact patterns in the data, while fostering human-AI alignment on intricate biomedical signals. We further demonstrate our method's ability to operate across a wide variety of dictionaries, including learned image bases, analytically defined waveforms for electrocardiography, and experimentally acquired dictionary elements. Overall, our results show that DictXAI provides more interpretable, actionable, and architecture-agnostic insights than classical XAI or existing concept-based approaches.

## Key Findings and Contributions

*   **Problem Addressed:** Existing XAI methods struggle with complex models, assuming interpretable input features or relying on difficult-to-characterize, architecture-specific internal abstractions.
*   **Proposed Solution: DictXAI:** A novel XAI method that defines interpretable concepts directly in the input domain using a dictionary of predefined elements.
*   **Mechanism:** DictXAI computes a sparse code of the input and attributes the AI's prediction to associated dictionary elements.
*   **Benefits:**
    *   **Actionable Explanations:** Enables direct attribution of AI malfunctions (e.g., Clever Hans effects) to identifiable data artifact patterns.
    *   **Human-AI Alignment:** Fosters better alignment between humans and AI, particularly demonstrated with intricate biomedical signals.
    *   **Architecture-Agnostic:** Operates across diverse dictionary types (learned image bases, analytical waveforms, experimental elements) and model architectures.
    *   **Improved Interpretability:** Offers more interpretable insights compared to classical XAI or existing concept-based approaches.
*   **Demonstrated Applications:** Effective in medical AI contexts (biomedical signals, electrocardiography) and general AI explainability.

## Technical Details

*   **Concept Definition:** Uses a dictionary (potentially overcomplete) of predefined elements with interpretable meanings.
*   **Sparse Coding:** Computes a sparse code representation of the input data.
*   **Prediction Attribution:** Links the model's prediction to the identified dictionary elements.

## Limitations and Future Work

*   (Not explicitly mentioned in the provided text, but typical limitations might include dictionary curation effort, computational cost of sparse coding, and the interpretability of the dictionary elements themselves.)

## Conclusion
DictXAI presents a significant advancement in XAI, providing a more robust, interpretable, and versatile approach to understanding complex AI model decisions by grounding explanations in a predefined dictionary of concepts within the input domain.