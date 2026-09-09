# API Benchmark Scores Do Not Reliably Transfer to Chatbot Interfaces

**Authors:** Unknown (based on provided link format, likely derived from arXiv's automated metadata)
**Date:** 2026-09-09 (based on provided link format)

## Key Findings:

*   **Discrepancy between API and Interface Performance:** Benchmark scores for AI models, often obtained via APIs, do not reliably reflect the performance of these models when accessed through deployed chatbot interfaces.
*   **Systematic Differences:** Audits of ChatGPT, Claude, and Gemini across various benchmarks revealed systematic differences in accuracy and consistency between API and interface evaluations.
    *   On average, API evaluations showed 3.4 percentage points higher accuracy.
    *   API evaluations exhibited 2.1 percentage points higher test-retest agreement.
*   **Significant Performance Impact:** For ChatGPT, the performance difference between API and interface access was found to be as significant as the difference between two different model versions (GPT 5.3 and GPT 5.4).
*   **Limitations of API Controls:** Attempts to bridge this gap by manipulating API controls (system prompts, sampling parameters, reasoning settings) were only partially successful and did not reliably eliminate the performance difference.
*   **Context-Validity Gap:** The study identifies a 'context-validity gap,' emphasizing that measurements from API evaluations are not necessarily generalizable to deployed systems, thus complicating their use as reliable proxies for real-world behavior.
*   **Implications:** This gap has critical implications for model purchasing decisions, public trust in AI, and policy-making, as current evaluation methods may be misleading.