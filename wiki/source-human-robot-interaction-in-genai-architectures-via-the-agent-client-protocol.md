# Human-Robot Interaction in GenAI Architectures via the Agent-Client Protocol

## Overview
This paper addresses the fragmentation in the human-robot interaction (HRI) layer of Generative AI (GenAI) powered robotic systems. It proposes the adoption of the Agent-Client Protocol (ACP) as a unified communication standard to enable seamless, real-time human-in-the-loop collaboration. The proposed architecture features a three-layer separation: human interaction, deliberative orchestration (using GenAI agents), and physical execution.

## Key Findings

*   **Problem:** Current GenAI-driven robotic architectures have fragmented HRI interfaces, hindering effective human-robot collaboration.
*   **Solution:** Proposes using the Agent-Client Protocol (ACP) for the HRI layer, alongside the Model Context Protocol (MCP) for agent-execution, to create a standardized communication contract.
*   **Architecture:** A fully decoupled three-layer architecture is formulated, separating:
    *   Human interaction (heterogeneous UIs)
    *   Deliberative orchestration (GenAI agents)
    *   Physical execution (robotics)
*   **Benefits:**
    *   Enables interoperability across different user interfaces.
    *   Allows for robot platform upgrades without client-specific changes.
    *   Provides native support for collaborative HRI features like real-time observability, human authorization, and task interruption.
*   **Validation:** Experimental evaluation on a physical mobile robot demonstrated interoperability and effective real-time human-in-the-loop workflows with negligible latency.

## Sources
*   `raw/human-robot-interaction-in-genai-architectures-via-the-agent-client-protocol.md`

## Last updated
2026-07-18

## Related pages
*   [[human-robot-interaction]]
*   [[human-ai-interaction]]
*   [[metacognitive-agent-architectures]]
*   [[chatbots]]