Authors: 
Date: 2026-08-13
Title: One Frozen Simulator Is Not Enough: Simulator Collapse in Multi-Agent RL

Summary:
Multi-agent reinforcement learning (MARL) for human-AI interaction often relies on a single large language model (LLM) to simulate user behavior. This paper demonstrates that this approach systematically fails to generalize. The failure is traced to 'simulator collapse,' where a single mode-collapsed simulator leads an LLM policy trained against it to overfit to narrow strategies that exploit the simulator's dominant mode. This overfitted policy then transfers poorly to unseen simulators and real users.

The paper formalizes this collapse theoretically and proposes two complementary solutions:
1.  **Verbalized Sampling (Inference-time):** This method broadens the simulator's behavior by sampling from a verbalized response distribution, thereby reducing mode collapse.
2.  **Co-Training (Training-time):** This method jointly optimizes the policy against a population of trainable simulators, preventing the policy from overfitting to any single simulator's mode.

Validation was performed on three multi-turn benchmarks: Persuasion for Good, $τ^2$-bench, and CooperBench. Verbalized Sampling improved held-out success by up to 9% over single-simulator RL. Co-Training further increased these gains to 14%. A human study confirmed similar performance improvements on real users.

Both proposed solutions preserve policy diversity, which is lost under single-simulator RL. To facilitate further research, the authors release SCOPE, an open-source framework for Population Co-Training MARL.

The broader implication is that the diversity of the training environment, not just the policy itself, is crucial for the generalization of multi-turn RL to real-world applications.