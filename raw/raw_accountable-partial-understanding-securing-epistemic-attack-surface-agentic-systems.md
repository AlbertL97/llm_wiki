Authors: no authors listed
Date: 2026-10-20
Title: Accountable partial understanding: securing the epistemic attack surface of agentic systems

Summary:
This paper confronts the inherent security risks in agentic AI systems stemming from the gap between their complex behavior and human understanding. Attackers exploit this "epistemic attack surface" where systems read, write, explain, and authorize security-relevant actions, making partial understanding more opaque and coupled with delegated authority.

The paper characterizes four categories of attacks targeting:
1. Interpretation of intent
2. Production and consumption of evidence
3. Scope of delegated authority
4. Comprehension of human supervisors

It proposes "accountable partial understanding" (APU) as a solution, defining six necessary conditions:
- Bounded scope with explicit assumptions
- Inspectable evidence
- Assigned responsibility
- Visible residual unknowns
- Actionability
- Temporal maintenance

APU is distinguished from risk acceptance, explainable AI (XAI), assurance cases, formal verification, and human-in-the-loop (HITL) systems, emphasizing that delegating interpretation to software agents differs from knowledge distribution among humans.

From these conditions, five design principles are derived:
- Bounded delegation
- Decoupled evidence
- Assumption tracking with invalidation
- Role-specific accountability views
- Intervention-preserving design with residual unknown registers

Two probe dimensions, evidence linkage and invalidation latency, are introduced for testing accountability mechanisms under change and adversarial pressure.

Examples used include an AI coding agent, an autonomous cyber-defense agent, and an AI-mediated insulin delivery update, illustrating how to achieve security in the face of incomplete understanding.

Key Takeaway: Security in agentic AI systems requires moving beyond attempts at full understanding and instead focusing on making partial understanding accountable through specific design principles and mechanisms.