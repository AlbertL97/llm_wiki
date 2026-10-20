# Accountable partial understanding: securing the epistemic attack surface of agentic systems

**Last updated:** 2026-10-20

This paper addresses the critical security challenge posed by agentic AI systems, where the gap between complex system behavior and human understanding creates an "epistemic attack surface." Attackers exploit this opacity, especially as AI systems increasingly perform actions that have security implications. The research introduces the concept of "accountable partial understanding" (APU) as a framework to manage these risks.

## Key Findings

*   **The Epistemic Attack Surface:** Agentic AI systems generate vulnerabilities by operating in ways that humans do not fully comprehend. This gap is exacerbated when AI systems read, write, explain, and authorize security-relevant actions, increasing opacity and delegating authority.
*   **Attack Categories:** The paper identifies four primary attack vectors targeting:
    *   The interpretation of AI intent.
    *   The generation and use of evidence by AI.
    *   The boundaries of delegated authority.
    *   Human supervisors' comprehension of AI actions.
*   **Accountable Partial Understanding (APU):** APU is proposed as a method to ensure security despite incomplete human understanding. It is defined by six essential conditions:
    *   **Bounded Scope:** Defining clear limits and explicit assumptions for AI operations.
    *   **Inspectable Evidence:** Making the evidence used by AI for decisions transparent and verifiable.
    *   **Assigned Responsibility:** Clearly delineating who is accountable for AI actions.
    *   **Visible Residual Unknowns:** Acknowledging and tracking what remains unknown.
    *   **Actionability:** Ensuring that human supervisors can act upon the AI's outputs or decisions.
    *   **Temporal Maintenance:** Ensuring these conditions are upheld over time.
*   **Distinction from Existing Concepts:** APU is differentiated from related concepts such as risk acceptance, explainable AI (XAI), assurance cases, formal verification, and human-in-the-loop (HITL) systems, highlighting its unique focus on accountability in the face of inherent partial understanding.
*   **Design Principles:** Five design principles are derived from the APU conditions:
    *   Bounded delegation
    *   Decoupled evidence
    *   Assumption tracking with invalidation
    *   Role-specific accountability views
    *   Intervention-preserving design with residual unknown registers
*   **Measurement:** Two dimensions, evidence linkage and invalidation latency, are proposed for testing the robustness of accountability mechanisms.
*   **Applications:** The concepts are illustrated with examples from AI coding agents, autonomous cyber-defense agents, and AI-mediated medical systems (insulin delivery).

## Sources

*   [Accountable partial understanding: securing the epistemic attack surface of agentic systems](http://arxiv.org/abs/2610.26799v1)

## Related pages

*   [[human-ai-interaction]]
*   [[trust]]
*   [[explainability]]
*   [[human-robot-interaction]]
*   [[medical-ai]]
