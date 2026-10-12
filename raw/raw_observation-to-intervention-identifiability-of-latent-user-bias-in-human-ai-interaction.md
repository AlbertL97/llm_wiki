# From Observation to Intervention: Identifiability of Latent User Bias in Human-AI Interaction

**Authors:** [Authors' names not provided in the title/description]
**Date:** 2026-10-12 (based on example format, actual date may vary)

## Summary

This paper addresses a critical challenge in human-AI interaction: the accurate inference of user preferences when users exhibit cognitive biases. Traditional AI alignment methods often assume that observed user behavior directly reflects their true preferences. However, this assumption is flawed when users are influenced by belief-dependent biases, which can lead to "confirmation traps" and harmful feedback loops. The research formalizes the conditions under which an AI system can differentiate genuine user preferences from behaviors shaped by these biases.

### Key Findings

*   **Problem of Passive Observation:** Under passive observation, a user with a static binary bias can produce action trajectories that are statistically indistinguishable from those of an unbiased user in a transformed environment. This is formalized by a non-identifiability theorem, suggesting that action-only estimators will perform no better than random guessing.
*   **Solution through Active Elicitation:** The paper demonstrates that active preference elicitation is crucial for overcoming this observational equivalence. By strategically intervening in the interaction, an AI can gather information to separate true preferences from biased behaviors.
*   **Intervention Effectiveness:** The research proves that an "Observer" applying a finite sequence of adversarial zero-reward interventions of a specific length ($m_δ$) can make the post-intervention action distributions arbitrarily separable. This implies that AI systems can be designed to actively probe for and identify underlying biases.
*   **Implications for Alignment:** The theoretical results strongly suggest that achieving robust alignment in human-AI systems necessitates moving beyond passive observation to actively intervening and eliciting informed preferences, rather than relying solely on observed actions.

This work has significant implications for the design of AI systems that aim to align with human users, particularly in applications where understanding user intent and preventing harmful feedback loops is paramount.