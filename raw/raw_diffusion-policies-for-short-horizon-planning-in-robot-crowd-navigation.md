# Planning Policies for Short-Horizon Planning in Robot Crowd Navigation

**Authors:** Not specified in the provided text.
**Date:** 2026-08-28 (based on URL structure - actual publication date may vary)

## Summary

This research addresses the challenge of robot crowd navigation, which requires safe and efficient decision-making in dynamic and dense human-robot interaction scenarios. Traditional reinforcement learning methods often output single reactive actions, limiting their ability to represent diverse short-term avoidance strategies. To overcome this, the paper proposes **Planning Diffusion Policy Optimization (PDPO)**, a new offline-to-online reinforcement-learning framework. PDPO utilizes a diffusion policy to generate short-horizon action chunks, enabling more sophisticated navigation behaviors.

### Key Findings and Contributions:

*   **Problem:** Existing robot crowd navigation methods struggle with diverse short-term avoidance strategies due to single-timestep action outputs.
*   **Proposed Solution:** Planning Diffusion Policy Optimization (PDPO), an offline-to-online reinforcement-learning framework that employs a diffusion policy.
*   **Mechanism:** PDPO is pretrained on collision-avoidance demonstrations and then fine-tuned online using PPO, treating the denoising process as an internal decision process.
*   **Execution:** The policy generates and applies five-step action chunks in a receding-horizon manner for improved navigation.
*   **Benchmark Improvement:** The authors identify and address an evaluation artifact in common crowd-navigation benchmarks where agents might leave the valid domain. They introduce a setting where boundary violations are treated as collisions.
*   **Results:** Experiments demonstrate that PDPO achieves an improved success rate compared to strong baselines.
*   **Ablation Studies:** Ablations confirm that action chunks are particularly beneficial for the modified, bounded benchmark.

### Implications:

The PDPO framework offers a more robust and adaptable approach to robot navigation in complex human environments, potentially enhancing safety and user experience in applications involving robots interacting with people in public spaces or collaborative settings.