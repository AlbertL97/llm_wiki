Authors: Not specified in the provided text.
Date: August 9, 2026 (Based on arXiv version date)

Title: ECHO: A Locally-Deployable Agentic Health Assistant with Temporal Memory, Safety Guardrails, and Speech Assessment

Summary:
This paper presents ECHO (Enhanced Care & Health Observer), a comprehensive system for long-term chronic care management delivered through a locally-deployable conversational health assistant. ECHO is designed to run entirely on consumer hardware, ensuring user privacy by not transmitting data to external services, thereby complying with regulations like GDPR and KVKK.

Key Components and Features:

1.  **Agentic Chatbot Core:**
    *   Built on a ReAct loop orchestrated via LangGraph.
    *   Equipped with 17 clinical tools.
    *   Utilizes a temporal knowledge graph for persistent cross-session memory.
    *   Achieved a 94.9% tool-execution pass rate on a 59-scenario benchmark using GPT-5 Mini.

2.  **Safety Layer:**
    *   A two-stage hybrid system intercepts all incoming queries.
    *   **Rule-based layer:** Handles explicit crisis signals and jailbreak attempts in under 1ms.
    *   **Signed Graph Neural Network (GNN) layer:** Classifies boundary cases by clinical intent using APPNP-style propagation.
    *   Achieved 88.8% accuracy and 90.6% unsafe recall on a 2,537-query annotated Turkish health dataset.
    *   Outperforms zero-shot LLM baselines like Llama 3.3 70B.

3.  **Multimodal Speech Assessment Module:**
    *   Combines Whisper acoustic encoding and BERT text encoding with cross-attention fusion.
    *   Estimates emotion, depression, and pain.
    *   Reached a mean macro F1 score of 0.652.

4.  **System Architecture:**
    *   Implemented as a web application.
    *   Runs entirely on consumer hardware.
    *   Ensures no patient data is transmitted to external services.
    *   Supports compliance with GDPR and KVKK.

Relevance to Psychology of AI/Robot Interaction:

*   **Mental Health:** Directly addresses mental health assessment (depression, pain) and chronic care management, a significant area in HCI and AI applications.
*   **Trust:** Local deployment and strong privacy guarantees are crucial for building trust in AI health assistants.
*   **AI Companions:** The conversational nature and long-term memory suggest potential for AI companionship in a therapeutic context.
*   **Human-AI Interaction:** Focuses on creating a functional and safe interface for health-related conversations.
*   **Chatbots:** A primary example of advanced chatbot capabilities in a sensitive domain.
*   **Medical AI:** Directly applicable to the field of AI in healthcare.
*   **Anthropomorphism:** While not explicitly discussed, the conversational and emotionally-aware nature could indirectly influence user perceptions and anthropomorphism.
