# Article: Same Question, Different Answers: Auditing Persona-Dependent Variation in Six LLMs on Smoking-Cessation Advice

**Authors:** N/A (Preprint)

**Date:** 2026-11-02 (based on article's date)

**Summary:**
Hundreds of millions of people now ask large language model (LLM) chatbots for health advice, which raises a question that is simple to pose and hard to answer: does everyone get the same advice? We audit six widely deployed LLMs from four providers on smoking cessation, a domain with codified clini- cal guidance and substantial public-health stakes, by putting the same four cessation questions to twelve user personas that differ in life stage, self-described expertise, and smoking history, for a total of 2,880 responses.

**Key Findings:**

*   **Persona-Dependent Variation:** The advice provided by LLMs on smoking cessation is not uniform; it depends significantly on the user persona's characteristics.
*   **Age Bias:** Every model named FDA-approved prescription cessation medications less often to teen personas than to adult personas, by 32 to 67 percentage points.
*   **Expertise Influence:** In five of six models, a persona presenting healthcare expertise received fewer facts than a persona presenting none.
*   **Intervention Effectiveness:** A short system prompt specifying a factual floor (the set of core medical facts every user should receive when relevant) narrows persona differences in every model.
*   **Model Variability:** The effect of the system prompt on overall fact coverage varies in magnitude and direction across models, meaning a prompt validated on one system cannot be assumed to transfer to another.
*   **Nuance in Fact Delivery:** Equal mention rates are not always the correct clinical target. For instance, prescription cessation pharmacotherapy is not recommended for minors, so a defensible factual floor must be age-aware rather than uniform.
*   **Complex Persona Effects:** Personas vary on several attributes simultaneously, leading to scenario-level differences rather than isolated effects of age or expertise.

**Data Release:** All 2,880 responses and the analysis code are released by the authors.
