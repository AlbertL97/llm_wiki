# SocialRL: Refining LLMs' Social Intelligence through Multi-turn Reinforcement Learning and Reward Design

**Authors:** [Not specified in provided text]
**Date:** [Not specified in provided text]
**Source:** arXiv ([http://arxiv.org/abs/2609.09764v1](http://arxiv.org/abs/2609.09764v1))

## Summary

This paper introduces SocialRL, a multi-turn reinforcement learning framework aimed at improving the social intelligence of Large Language Models (LLMs). The core problem addressed is that existing methods often optimize for single-turn utterances and immediate rewards, leading to short-sighted AI agents that struggle to balance goals with relationship management in extended conversations. SocialRL tackles this by:

1.  **Multi-turn Reinforcement Learning (PPO):** Propagating delayed outcome rewards across multiple turns to enable long-horizon planning and better adaptation to evolving dialogue dynamics.
2.  **Process Reward Design:** Introducing six distinct reward dimensions that capture the intricate trade-off between goal advancement and relational attunement (e.g., goal advancement, relational attunement, contextual coherence).
3.  **Dynamic Reward Modeling and Scheduling:** Employing a reward model for fine-grained scoring and a stage-aware weight schedule that prioritizes relationship building early, goal advancement mid-dialogue, and balanced closure towards the end.

## Key Findings

*   SocialRL enhances the social intelligence of LLMs for more effective and trustworthy human-AI interaction.
*   The framework addresses the limitations of single-turn optimization, enabling agents to manage goal-relationship tensions across multi-turn dialogues.
*   By propagating delayed rewards and designing process rewards, SocialRL facilitates long-horizon planning.
*   The proposed reward dimensions (goal advancement, relational attunement, contextual coherence, etc.) provide a nuanced evaluation of social dialogue.
*   A dynamic reward model and stage-aware weighting schedule optimize conversational flow.
*   Empirical results show SocialRL improves Goal Achievement by an average of 9.2 percentage points over base models on various social dialogue benchmarks.
*   The effectiveness is demonstrated across synthetic, real, standard, and challenging social scenarios.

## Relevance to Wiki Concepts

This paper is highly relevant to the psychology of AI/robot interaction, trust, and social companions. The focus on social intelligence, multi-turn dialogue, and the goal-relationship trade-off directly impacts how humans perceive and interact with AI agents, influencing trust and the formation of social connections. The improvement in goal achievement and relational attunement points towards creating more effective AI companions and collaborators. It also has implications for chatbots designed for social interaction.