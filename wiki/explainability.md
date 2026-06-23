# Explainability

**Summary**: The capacity of an AI system to provide understandable explanations of its internal reasoning, outputs, or decision-making processes. This page covers post-hoc interpretability methods, natural language explanations in LLMs, and the "Persuasion Paradox" where explanations decouple user trust from task accuracy. New research explores using AI to interpret the internal activations of other LLMs to understand their "thought processes," and introduces the concept of "Secure Coding Drift" in LLM-assisted development, proposing gamified solutions to maintain security rigor. Recent work also examines user skepticism, verification behaviors, and reliance on generative AI advisors, particularly in goal-directed use, highlighting the importance of output-centric cues and the need to differentiate these user constructs (source: raw_hallucinations-in-organization-backed-ai-advisors-skepticism-verification-reliance.md).

**Sources**:
- The Persuasion Paradox_ When LLM Explanations Fail to Improve Human-AI Team Performance.md
- From Trust in Automation to Trust in AI in Healthcare_ A 30-Year Longitudinal Review and an Interdisciplinary Framework.md
- SHAPE-AI_ Development and Expert Validation of a Survey for Human-AI Performance Evaluation in Healthcare.md
- (1) (PDF) Comparing Objective and Subjective Measures of Usability in a Human-Robot Dialogue System.md
- On the "Human" in Human-Artificial Intelligence Interaction.md
- The Psychology Of Trust In AI_ A Guide To Measuring And Designing For User Confidence.md
- raw_correct-yourself-keep-my-trust-how-self-correction-and-social-connection-shape-credibility-in-social-chatbots.md
- raw_ai-experts-warning-dangerous-llm-problem.md
- raw_they-looked-inside-claudes-ai-s-mind-it-got-weird.md
- raw_secure-coding-drift-in-llm-assisted-post-quantum-cryptography-development-a-gamified-fix.md
- raw_hallucinations-in-organization-backed-ai-advisors-skepticism-verification-reliance.md

**Last updated**: 2026-06-23

---

## Main content

Explainability is a cornerstone of human-AI collaboration, particularly in high-stakes fields such as healthcare, where users must calibrate their trust and decide when to rely on automated recommendations. This extends to critical software development, where the reliance on LLMs for tasks like Post-Quantum Cryptography (PQC) implementation introduces new challenges related to maintaining secure coding practices (source: raw_secure-coding-drift-in-llm-assisted-post-quantum-cryptography-development-a-gamified-fix.md). Furthermore, understanding how users interact with generative AI advisors, especially when they produce inaccurate outputs (hallucinations), is crucial for safe and effective deployment (source: raw_hallucinations-in-organization-backed-ai-advisors-skepticism-verification-reliance.md).

### 1. Post-Hoc Interpretability vs. Natural Language Explanations
Explainable AI (XAI) is traditionally divided into two main methodologies:
1.  **Model-Centric (Post-Hoc Interpretability)**: Techniques applied to "black box" machine learning models after training to approximate their decision boundaries. These include local feature attribution methods such as:
    *   **LIME (Local Interpretable Model-agnostic Explanations)**
    *   **SHAP (SHapley Additive exPlanations)**
    *   **Occlusion Sensitivity**
    These methods attempt to identify which input features (e.g., specific pixels in an image or tokens in a text block) most heavily influenced the model's output (source: From Trust in Automation to Trust in AI in Healthcare_ A 30-Year Longitudinal Review and an Interdisciplinary Framework.md).
2.  **User-Centric (Natural Language Explanations)**: Generative AI models (such as LLMs) that produce narrative, free-form textual justifications for their actions. These explanations do not necessarily map to the underlying neural activations, but are designed to be intuitive and readable for human operators (source: The Persuasion Paradox_ When LLM Explanations Fail to Improve Human-AI Team Performance.md).

A novel approach to understanding LLM internals involves using one AI to translate the numerical "thought processes" (activations) of another AI into human-readable text (source: raw_they-looked-inside-claudes-ai-s-mind-it-got-weird.md). This method aims to demystify AI decision-making and explain unusual behaviors by attempting to interpret the AI's internal state (source: raw_they-looked-inside-claudes-ai-s-mind-it-got-weird.md). However, a significant challenge remains in verifying the accuracy of these AI-generated explanations, as LLMs can also "make stuff up" (source: raw_they-looked-inside-claudes-ai-s-mind-it-got-weird.md).

### 2. The Persuasion Paradox
Although free-form natural language explanations are highly favored by users due to their readability and conversational style, they introduce a significant psychological risk known as the **Persuasion Paradox** (source: The Persuasion Paradox_ When LLM Explanations Fail to Improve Human-AI Team Performance.md):
-   **Decoupling of Confidence and Accuracy**: Fluent, well-structured explanations systematically increase user confidence and reliance on the AI system, regardless of whether the system's prediction is correct or incorrect.
-   **Error Masking and Suppression of Recovery**: When an AI makes an error but accompanies it with a persuasive, fluent explanation, the explanation acts to mask the mistake. Users are significantly less likely to detect or recover from the AI's errors, often overriding their own correct intuitions.
-   **Alternative Interfaces**: In tasks with high visual component, interfaces that communicate uncertainty through raw predicted probabilities (or employ selective automation by deferring low-confidence cases to humans) result in significantly higher team accuracy than interfaces that provide textual explanations (source: The Persuasion Paradox_ When LLM Explanations Fail to Improve Human-AI Team Performance.md).

### 3. Task Dependency and Cognitive Modality
The effectiveness of narrative explanations is highly dependent on the cognitive modality of the task:
-   **Visual Reasoning (e.g., RAVEN Matrices)**: Narrative explanations degrade overall team performance. Textual justifications create cognitive mismatch when applied to visual-spatial reasoning tasks and increase error masking (source: The Persuasion Paradox_ When LLM Explanations Fail to Improve Human-AI Team Performance.md).
-   **Logical Reasoning (e.g., LSAT Questions)**: Narrative explanations significantly improve team performance and error recovery. When the task itself is native to language and logic, textual explanations successfully help users correct mistakes and calibrate their trust, outperforming simple probability-based confidence indicators (source: The Persuasion Paradox_ When LLM Explanations Fail to Improve Human-AI Team Performance.md).

### 4. User Skepticism, Verification, and Reliance in Goal-Directed Use
When interacting with AI advisors, particularly those that may produce hallucinations, it is crucial to understand distinct user constructs: skepticism (doubt), verification (checking outputs), and reliance (dependence) (source: raw_hallucinations-in-organization-backed-ai-advisors-skepticism-verification-reliance.md). While reliance is frequently measured, empirical studies often overlook direct measurements of skepticism and verification behavior (source: raw_hallucinations-in-organization-backed-ai-advisors-skepticism-verification-reliance.md). Interventions like source citations or explicit warnings about potential inaccuracies have shown weak or mixed effects on user scrutiny (source: raw_hallucinations-in-organization-backed-ai-advisors-skepticism-verification-reliance.md). The primary cues that prompt users to scrutinize AI responses are typically embedded within the AI's output itself, rather than external factors (source: raw_hallucinations-in-organization-backed-ai-advisors-skepticism-verification-reliance.md). Future research needs to systematically measure these distinct constructs and explore how content categories influence verification behavior (source: raw_hallucinations-in-organization-backed-ai-advisors-skepticism-verification-reliance.md).

### 5. Integration into Clinical and Expert Workflows
In professional contexts, explainability features must be tightly integrated into existing user-experience (UX) and Human Factors Engineering (HFE) pathways (source: From Trust in Automation to Trust in AI in Healthcare_ A 30-Year Longitudinal Review and an Interdisciplinary Framework.md). This includes addressing new socio-technical vulnerabilities that emerge with LLM adoption in specialized domains.

A novel vulnerability model, **"Secure Coding Drift in PQC,"** has been proposed to describe the progressive degradation of secure coding practices due to sustained reliance on LLM-generated code, particularly in the complex field of Post-Quantum Cryptography (PQC) (source: raw_secure-coding-drift-in-llm-assisted-post-quantum-cryptography-development-a-gamified-fix.md). This model emphasizes the longitudinal, behavioral aspects of human-AI interaction in secure coding. To mitigate this drift, a **gamified, LLM-augmented secure coding framework** has been developed. This framework aims to embed adversarial evaluation, provide behavioral feedback, and implement security scoring within development workflows, reframing LLMs from passive assistants into active security co-pilots (source: raw_secure-coding-drift-in-llm-assisted-post-quantum-cryptography-development-a-gamified-fix.md).

-   **Clinical Alignment**: Surveys like **SHAPE-AI** (Survey for Human-AI Performance Evaluation in Healthcare) are utilized to validate how explainability interfaces affect clinician cognitive workload, alert burden, and decision-support accuracy before clinical deployment (source: SHAPE-AI_ Development and Expert Validation of a Survey for Human-AI Performance Evaluation in Healthcare.md).
-   **Subjective Usability**: The complexity of explainable dialogues is subject to usability trade-offs. While explanatory dialogues can be longer, users are often willing to engage in more interactive turns if they feel the instruction quality and explanation clarity are high, although excessive repetition requests degrade user satisfaction (source: (1) (PDF) Comparing Objective and Subjective Measures of Usability in a Human-Robot Dialogue System.md).
-   **Error Correction and Credibility in Social Chatbots**: For social chatbots, how errors are corrected significantly impacts user credibility and trust. While all tested correction strategies can rectify factual errors, only **self-correction** by the original chatbot effectively preserves its trustworthiness and perceived expertise (source: raw_correct-yourself-keep-my-trust-how-self-correction-and-social-connection-shape-credibility-in-social-chatbots.md). External corrections (e.g., by a webpage or an "expert" chatbot) significantly damage the original chatbot's credibility, despite correcting the factual error (source: raw_correct-yourself-keep-my-trust-how-self-correction-and-social-connection-shape-credibility-in-social-chatbots.md). Furthermore, a strong **social connection** with the chatbot amplifies the positive impact of self-correction on belief change, a benefit entirely nullified by external correction methods (source: raw_correct-yourself-keep-my-trust-how-self-correction-and-social-connection-shape-credibility-in-social-chatbots.md). This implies that designing chatbots to identify and correct their own errors directly, and fostering social connection, are critical for maintaining long-term credibility, especially given their propensity for generating convincing but inaccurate information (source: raw_correct-yourself-keep-my-trust-how-self-correction-and-social-connection-shape-credibility-in-social-chatbots.md).
-   **Interface Design**: Designers must ensure that explanations do not lead to "trustwashing"—using fluent, human-like justification styles to artificially boost user reliance while obscuring the system's actual limitations and safety boundaries (source: The Psychology Of Trust In AI_ A Guide To Measuring And Designing For User Confidence.md; On the "Human" in Human-Artificial Intelligence Interaction.md). Experts also warn of new, dangerous problems with LLMs, including emergent risks such as sophisticated misinformation or subtle manipulation, which can exploit human psychological vulnerabilities and lead to an erosion of trust. These issues highlight the critical need for robust safety measures and transparent operational principles in LLM deployment to prevent a breakdown in effective and healthy human-AI engagement (source: raw_ai-experts-warning-dangerous-llm-problem.md).

## Related pages
- [Trust](file:///c:/Users/lukas/Desktop/Agents_workflow/Gemini/llm_wiki/wiki/trust.md)
- [Measurement Tools](file:///c:/Users/lukas/Desktop/Agents_workflow/Gemini/llm_wiki/wiki/measurement-tools.md)
- [Human-AI Interaction](file:///c:/Users/lukas/Desktop/Agents_workflow/Gemini/llm_wiki/wiki/human-ai-interaction.md)
- [source-persuasion-paradox-explanations.md](file:///c:/Users/lukas/Desktop/Agents_workflow/Gemini/llm_wiki/wiki/source-persuasion-paradox-explanations.md)
- [source-longitudinal-review-trust-healthcare.md](file:///c:/Users/lukas/Desktop/Agents_workflow/Gemini/llm_wiki/wiki/source-longitudinal-review-trust-healthcare.md)
- [source-shape-ai-healthcare.md](file:///c:/Users/lukas/Desktop/Agents_workflow/Gemini/llm_wiki/wiki/source-shape-ai-healthcare.md)
- [source-comparing-usability-measures.md](file:///c:/Users/lukas/Desktop/Agents_workflow/Gemini/llm_wiki/wiki/source-comparing-usability-measures.md)
- [source-human-artificial-intelligence-interaction.md](file:///c:/Users/lukas/Desktop/Agents_workflow/Gemini/llm_wiki/wiki/source-human-artificial-intelligence-interaction.md)
- [source-psychology-trust-smashing.md](file:///c:/Users/lukas/Desktop/Agents_workflow/Gemini/llm_wiki/wiki/source-psychology-trust-smashing.md)
- [raw_correct-yourself-keep-my-trust-how-self-correction-and-social-connection-shape-credibility-in-social-chatbots.md](file:///c:/Users/lukas/Desktop/Agents_workflow/Gemini/llm_wiki/wiki/raw_correct-yourself-keep-my-trust-how-self-correction-and-social-connection-shape-credibility-in-social-chatbots.md)
- [[source-ai-experts-warning-dangerous-llm-problem]]
- [[source-they-looked-inside-claudes-ai-s-mind-it-got-weird]]
- [[source-secure-coding-drift-in-llm-assisted-post-quantum-cryptography-development-a-gamified-fix]]
- [[source-hallucinations-in-organization-backed-ai-advisors-skepticism-verification-reliance]]