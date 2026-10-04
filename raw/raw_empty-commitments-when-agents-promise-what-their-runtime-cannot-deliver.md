Authors: Nitzan Caspi, Elad Eisenberg, Eytan Adar, David C. Parkes
Date: October 13, 2026 (v1)

## Empty Commitments: When Agents Promise What Their Runtime Cannot Deliver

This paper introduces and defines the concept of 'empty commitments' in the context of AI agents, particularly chatbots. An empty commitment occurs when an agent makes a promise for an action after the current turn that its underlying tools or runtime cannot actually execute. This emptiness is inherent to the agent's configuration, independent of any subsequent execution trajectory.

### Key Definitions and Concepts:

*   **Empty Commitment:** A promise of an action after the current turn that the agent's tools or runtime cannot carry out. This is distinct from a broken promise, as its impossibility stems from the agent's static configuration.
*   **Commitment Semantics:** The paper builds upon existing commitment semantics to define empty commitments.
*   **Failure Types:** Three distinct types of failures related to empty commitments are identified.
*   **Anchoring Condition:** A condition for promises that an agent's tool could potentially fulfill, distinguishing them from inherently unfulfillable commitments.
*   **Response-Level Outcome Taxonomy:** A classification of the outcomes resulting from agent responses that contain empty commitments.

### Measurement Protocol:

The authors propose a measurement protocol to empirically study empty commitments. This protocol involves:

*   **Follow-up Requests:** Users making subsequent requests to the agent.
*   **Five Setups:** Experiments conducted across five different setups, each incrementally adding a persistence affordance.
*   **Environment Specification:** The environment is either left implicit or explicitly stated to the agent.

### Implications:

This research is highly relevant to understanding user trust in AI agents, the design of more reliable and transparent AI systems, and the psychological impact of AI's perceived competence and honesty. Understanding when and why agents make empty commitments can shed light on user expectations, disappointment, and the long-term development of human-AI interaction dynamics, particularly in conversational agents and chatbots. The study of measurement protocols also touches upon quantitative and qualitative assessment of AI behavior.