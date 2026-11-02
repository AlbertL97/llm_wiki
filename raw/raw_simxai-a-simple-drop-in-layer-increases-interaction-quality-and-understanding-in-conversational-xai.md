## SimXAI: A Simple Drop-in Layer Increases Interaction Quality and Understanding in Conversational XAI

**Authors:** Not specified in the provided text.
**Date:** Not specified in the provided text (arXiv version 1, 2610.41856v1).

**Summary:**

Conversational explainable AI (ConvXAI) agents often rely on complex GUS-style architectures with distinct modules for intent recognition, dialogue management, and response generation. These pipelines are rigid and struggle with contextual follow-up questions. SimXAI proposes a novel solution: a lightweight, LLM-centric conversational layer that acts as a modular interface.

**Key Features and Findings:**

*   **Architecture:** SimXAI replaces traditional GUS modules with a single tool-calling LLM, simplifying the conversational layer and improving access to existing XAI resources.
*   **Modularity:** It is designed as a drop-in layer, meaning it can be integrated into existing ConvXAI systems without a complete overhaul.
*   **Performance:** SimXAI demonstrates strong accuracy in function selection and high faithfulness to XAI methods.
*   **Context Handling:** It excels at managing context-dependent requests, a common limitation of previous approaches.
*   **Evaluation:** An evaluation suite for parsing, faithfulness, and contextualization is introduced.
*   **User Study:** In a user study where SimXAI replaced the conversational layer of the TalkToModel agent, users achieved higher task accuracy and completed tasks in fewer turns, indicating improved conversational quality and efficiency.
*   **Impact:** SimXAI enhances existing GUS-based designs by preserving faithfulness while significantly improving conversational quality.