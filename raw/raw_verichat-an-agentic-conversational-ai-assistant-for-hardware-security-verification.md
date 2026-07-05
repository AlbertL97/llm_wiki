Authors: Not specified
Date: 2026-07-01

Title: VeriChat: An Agentic Conversational AI Assistant for Hardware Security Verification

Description:
Hardware security verification is a critical but complex multi-stage process for engineers. Existing verification environments offer limited structured support for security-focused guidance. While general-purpose chatbots could assist, their tendencies to hallucinate and rely on outdated knowledge pose risks. VeriChat is presented as a domain-specialized conversational assistant designed to support, rather than replace, verification workflows by offering context-aware security guidance.

Key Features and Methodology:

*   **Domain Specialization:** Tailored for hardware security verification.
*   **Agentic Conversational AI:** Utilizes a conversational interface for assistance.
*   **Retrieval-Augmented, Multi-Agent Workflow:** Employs three specialized agents to collaboratively reduce hallucinations and enhance transparency and reliability.
*   **Integration with EDA Tools:** Incorporates open-source Electronic Design Automation (EDA) tools like Icarus Verilog, Yosys, and SymbiYosys for syntax checking, synthesis analysis, simulation, and formal verification directly on user-provided RTL designs.
*   **Focus on Reliability:** Aims to minimize hallucinations, a common issue with general-purpose chatbots.
*   **Transparency:** Improves the transparency of AI-generated guidance.

Evaluation:

*   **Faithfulness Score:** Achieved a Faithfulness score of 87.73%, outperforming leading proprietary models.
*   **Comprehensive Methodology:** Evaluated using a detailed evaluation approach.

Case Study:

A hardware Trojan detection case study on an AES S-Box IP demonstrates VeriChat's capabilities. VeriChat autonomously identified, simulated, and formally proved a covert key-leakage vulnerability through a multi-turn conversational workflow.

Implications:

VeriChat represents a significant step towards developing reliable and domain-specific AI assistants that can augment complex engineering workflows, addressing critical issues of trust and accuracy in AI-assisted design.