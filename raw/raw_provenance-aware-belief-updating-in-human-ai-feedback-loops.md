Authors: Noah B. Johnson, Shixiang Shane Gu, Kiri Choi, Benjamin L. Card, Steven A. Peck, Anya M. Vartapetov, Jonathan S. T. R. Wu, Andrew M. Dai, Paul M. Bentley, Christopher D. Ré
Date: 2026-10-07
Title: Provenance-Aware Belief Updating in Human-AI Feedback Loops

Summary:
In human-AI interaction, especially in feedback loops, the same piece of information can be presented multiple times, potentially being mistaken for independent corroboration. This can lead to AI models over-weighting repeated, but not necessarily novel, information.

Problem:
Existing AI systems might update their beliefs based on the sheer number of reports received, even if those reports are repetitions of the same underlying evidence. This can lead to inaccurate belief propagation and a lack of sensitivity to truly new information.

Solution Proposed:
Latent Quotient Evidence Training (LQET) is introduced as a novel objective. LQET enables language models to distinguish between reports based on their evidence provenance (origin and history) rather than just their frequency.

Key Features of LQET:
- Relational Objective: LQET is designed to learn relationships between reports and their lineage.
- Sparse Bayesian Supervision: Incorporates Bayesian principles for belief updating.
- Stability Constraints: Encourages stable predictions when a report adds no new evidence.
- Consistent Updates: Ensures that new evidence leads to consistent updates regardless of how many times it has been relayed through different histories.

Evaluation and Results:
- Controlled Binary Benchmark: LQET demonstrated significant improvements. It reduced new-evidence update RMSE by 41-44% and log-odds drift after eight relay steps by 89-91% compared to task-only training.
- Model Backbones: Tested on Qwen3-4B and Phi-4-mini, showing consistent gains across different models.
- Closed-Loop Simulation: The method's effectiveness was further validated in a simulation where AI confidence influenced the number of relayed reports re-entering the system. This showed LQET's ability to ground belief updates in provenance, not just repetition.

Impact:
LQET offers a path towards more dynamic and trustworthy human-AI systems where the influence of information is determined by its novelty and evidential weight, rather than its frequency. This is crucial for building AI systems that can reliably learn and adapt in complex, iterative interaction settings.