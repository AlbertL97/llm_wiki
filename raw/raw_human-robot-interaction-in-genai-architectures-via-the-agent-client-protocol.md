# Human-Robot Interaction in GenAI Architectures via the Agent-Client Protocol

**Authors:**
Not explicitly listed in the provided text, but the paper is from arXiv.

**Date:**
2026-07-18 (based on the provided URL v1 which usually indicates initial submission date)

**Summary:**
Recent advancements in Generative Artificial Intelligence (GenAI), particularly Large Language Models (LLMs), are leading to agent-based high-level orchestration in robotic systems. This allows natural language instructions to be translated into context-aware actions. While protocols like the Model Context Protocol (MCP) are emerging for agent-robot communication, the human-robot interaction (HRI) layer remains fragmented due to proprietary interfaces, hindering real-time human-in-the-loop collaboration.

To address this, the paper proposes the Agent-Client Protocol (ACP), a communication standard from software engineering, for the HRI layer. By integrating ACP at the human-interface-agent link and MCP at the agent-execution link, a fully decoupled three-layer architecture is formed: 

1.  **Human Interaction Layer:** Handles HRI through heterogeneous user interfaces.
2.  **Deliberative Orchestration Layer:** Manages high-level reasoning and action sequencing using GenAI agents.
3.  **Physical Execution Layer:** Controls the physical robot.

This architecture decouples components, allowing different user interfaces to connect to the same robot and enabling robot platform changes without requiring client-side modifications. It also natively supports collaborative HRI features like real-time observability, explicit human authorization, and immediate task interruption.

**Experimental Validation:**
The proposed architecture was evaluated on a physical mobile robot, demonstrating interoperability across three different user interfaces and validating real-time human-in-the-loop workflows with minimal latency.