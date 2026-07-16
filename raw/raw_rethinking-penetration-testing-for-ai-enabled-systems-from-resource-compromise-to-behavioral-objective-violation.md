Authors: Unknown
Date: 2026-07-16
Title: Rethinking Penetration Testing for AI-Enabled Systems: From Resource Compromise to Behavioral Objective Violation

Summary:
This paper introduces a novel approach to penetration testing for AI-enabled systems. Traditional methods focus on compromising infrastructure, but for AI, adversaries can manipulate behavior without direct infrastructure access. The authors redefine penetration testing for AI systems as an objective-driven behavioral evaluation. An AI-enabled system is defined as one where learned models significantly impact behavior and operational outcomes. AI-enabled penetration is then the feasible induction of AI-governed behavior that violates operational objectives under a specific threat model.

Key points:
- AI systems introduce new adversarial pathways beyond traditional infrastructure compromise.
- These pathways include prompt injection, indirect prompt injection, data poisoning, sensor manipulation, retrieval poisoning, tool misuse, and agentic misalignment.
- The proposed framework reframes penetration testing as a behavioral objective violation assessment.
- A new testing workflow is proposed, involving:
    - Identifying operational objectives.
    - Mapping AI-governed behavior.
    - Analyzing adversarial influence surfaces.
    - Defining behavioral failure criteria.
    - Executing scenario-based tests.
    - Reporting evidence linking adversarial action to objective violation.
- An example of an AI-enabled security operations center assistant illustrates how behavioral influence can lead to penetration.
- The paper provides a technical framework for evaluating adversarial success in deployed AI-enabled systems.