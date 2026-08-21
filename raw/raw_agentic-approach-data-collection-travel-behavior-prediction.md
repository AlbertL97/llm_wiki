Authors: Not specified in the prompt.
Date: 2026-08-21 (based on prompt's 'Last updated' date for markdown section)

Summary:
This study introduces a three-agent workflow designed to bridge the gap between active data collection and predictive modeling in travel behavior research. The workflow integrates a conversational agent for data collection with structured data processing and behavioral prediction. A chatbot, augmented with images, was used to administer a stated-preference survey to student commuters, collecting their mode choices under five different weather scenarios. This resulted in 454 respondent-scenario observations.

The research analyzed weather-related associations using a multinomial logit model and established machine-learning benchmarks with logistic regression and random forest. Several Large Language Models (LLMs), with parameter counts ranging from 2 to 35 billion, were evaluated across various configurations: zero-shot prompting with different context conditions, persona-based prompting, few-shot learning, and vision-based configurations utilizing weather images.

Key findings include:
- Random forest achieved 69.6% accuracy in five-class prediction.
- The best text-only zero-shot LLM reached 69.9% accuracy without task-specific fine-tuning.
- Incorporating habitual travel information consistently improved prediction accuracy.
- An 'Expert' framing generally outperformed 'Role-Play' configurations.
- Persona information was most beneficial when habitual travel data was absent.
- Few-shot prompting led to prediction improvements, with gains plateauing after a small number of examples.
- The best vision-based LLM configuration, using the same weather images as respondents, achieved 71.5% accuracy, suggesting visual context adds predictive value for certain models.

Overall, the study demonstrates the potential of coordinating conversational surveys, data processing, conventional behavioral modeling, machine learning, and multimodal LLM prediction within an auditable multi-agent system.