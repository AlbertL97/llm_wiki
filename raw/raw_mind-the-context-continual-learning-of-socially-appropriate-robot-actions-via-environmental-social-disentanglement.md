# Mind the Context: Continual Learning of Socially Appropriate Robot Actions via Environmental-Social Disentanglement

**Authors:** Not specified in the provided text.
**Date:** 2026-08-14 (based on URL v1 timestamp format, assuming it's a hypothetical future date for illustrative purposes, actual date would be from the paper itself if available).

## Abstract
Social robots are expected to operate across diverse environments, where similar arrangements can imply different socially appropriate actions, e.g., starting a conversation may be acceptable in a crowded home but disruptive in an office meeting. Because such norms and environments cannot all be anticipated in advance, robots require continual learning (CL) to adapt from sequential experience while retaining previously acquired knowledge. Prior work has studied CL for generating socially appropriate robot actions, but it has not addressed domain-incremental settings in which the robot incrementally encounters diverse contexts (e.g., living room, meeting room, office, hallway), where both environmental (e.g., whether the space is open or cluttered with furniture) and social cues (e.g., how people or other agents are positioned around the robot) jointly shape the appropriateness of robot actions. We address this gap with the Explicit Disentanglement Dual-Branch (EDD) framework. EDD explicitly separates environmental and social-agent related knowledge and uses replay-based rehearsal to mitigate forgetting while learning the appropriateness of robot actions (e.g., cleaning, serving, starting a conversation) across several indoor domains. Experiments show that EDD outperforms several state-of-the-art baselines, and ablation studies further evaluate different disentanglement strategies and the sensitivity to domain ordering. Our code is publicly available at https://github.com/Cambridge-AFAR/Mind-the-Context.git.

## Key Findings and Contributions:

*   **Problem:** Robots need to learn socially appropriate actions that vary depending on the environmental and social context, a challenge not fully addressed by prior continual learning (CL) research.
*   **Challenge:** Domain-incremental CL settings, where robots encounter new contexts sequentially, require robust adaptation without forgetting previous knowledge.
*   **Proposed Solution:** The Explicit Disentanglement Dual-Branch (EDD) framework.
    *   **Mechanism:** EDD explicitly separates knowledge related to the environment from knowledge related to social agents.
    *   **Continual Learning Strategy:** Utilizes replay-based rehearsal to mitigate forgetting while learning new action appropriateness across different indoor domains (e.g., living room, meeting room).
*   **Evaluation:** Experiments demonstrate that EDD outperforms state-of-the-art baselines.
*   **Analysis:** Ablation studies were conducted to evaluate different disentanglement strategies and the impact of domain ordering on performance.
*   **Practical Implication:** Enables robots to be more adaptable and socially intelligent in dynamic and diverse real-world settings.
*   **Open Source:** Code is publicly available, promoting reproducibility and further research.

## Limitations/Future Work:

*   (Not explicitly detailed in the provided abstract, but typical limitations might include the specific types of environments tested, the complexity of social interactions, or the computational cost of the EDD framework).

## Target Audience:

*   AI researchers, robotics engineers, human-robot interaction specialists.

## Link to Code:

*   https://github.com/Cambridge-AFAR/Mind-the-Context.git