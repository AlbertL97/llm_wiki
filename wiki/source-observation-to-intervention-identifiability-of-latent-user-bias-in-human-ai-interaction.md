# From Observation to Intervention: Identifiability of Latent User Bias in Human-AI Interaction

This paper addresses the challenge of inferring accurate user preferences in human-AI interactions when users exhibit cognitive biases. It argues that traditional AI alignment methods, which rely on observed behavior as a proxy for preferences, are insufficient due to the risk of confirmation traps and harmful feedback loops. The core contribution is a theoretical framework demonstrating that passive observation alone cannot reliably distinguish true preferences from bias-influenced actions. The paper introduces a non-identifiability theorem showing that unbiased and biased users produce statistically identical action distributions under passive observation. To overcome this, the research proposes and proves the effectiveness of active preference elicitation through carefully designed interventions. By applying a finite sequence of adversarial zero-reward interventions, an AI system can make post-intervention action distributions arbitrarily separable, enabling it to distinguish informed preferences from biases.

## Key Findings

*   **Observational Equivalence:** A user with a static binary bias exhibits action trajectory distributions identical to an unbiased user under passive observation, making it impossible for action-only estimators to perform better than random guessing.
*   **Active Interventions are Necessary:** Robust alignment requires AI systems to actively intervene in user interactions to elicit true preferences.
*   **Separability through Intervention:** A finite sequence of adversarial zero-reward interventions can make post-intervention action distributions arbitrarily separable, allowing AI to identify and account for user biases.
*   **Implication for AI Alignment:** Moving beyond passive observation to active preference elicitation is crucial for building reliable and aligned human-AI systems.

## Sources

*   [From Observation to Intervention: Identifiability of Latent User Bias in Human-AI Interaction](http://arxiv.org/abs/2610.13185v1)

## Last updated

2026-10-12

## Related pages

*   [[human-ai-interaction]]
*   [[trust]]
*   [[persuasion-and-influence]]