# API Benchmark Scores Do Not Reliably Transfer to Chatbot Interfaces

This paper investigates the reliability of benchmark scores in representing the actual performance of AI models in deployed chatbot interfaces. The research highlights a significant "context-validity gap," where performance metrics obtained through APIs often differ systematically from those observed in user-facing interfaces. For models like ChatGPT, Claude, and Gemini, API evaluations showed higher accuracy and consistency compared to interface evaluations, with the performance difference comparable to a full model version downgrade.

The study tested various API controls to mitigate these differences, but found them insufficient to consistently bridge the gap. This discrepancy has crucial implications for how AI performance is understood, impacting purchasing decisions, public trust, and policy, as API-based benchmarks may not be accurate proxies for real-world AI behavior.

## Key Findings:

*   **API vs. Interface Performance Gap:** Benchmark scores measured via APIs do not accurately reflect the performance of AI models in deployed chatbot interfaces.
*   **Accuracy and Consistency Differences:** API evaluations are systematically higher in accuracy (3.4 pp) and test-retest agreement (2.1 pp) than interface evaluations.
*   **Magnitude of Difference:** For ChatGPT, switching access surfaces (API vs. interface) can degrade performance as much as downgrading a model version.
*   **Limited Effectiveness of API Controls:** Adjusting system prompts, sampling, and reasoning settings via APIs does not reliably eliminate the observed performance gap.
*   **Context-Validity Challenge:** The findings underscore a "context-validity gap," questioning the generalizability of API-based measurements to real-world deployments.

## Sources:

*   [API Benchmark Scores Do Not Reliably Transfer to Chatbot Interfaces](http://arxiv.org/abs/2609.08861v1)

## Last updated:

2026-09-09

## Related pages:

*   [[chatbots]]
*   [[human-ai-interaction]]
*   [[trust]]
*   [[measurement-tools]]