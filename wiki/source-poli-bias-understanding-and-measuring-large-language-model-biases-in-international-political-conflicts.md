# Poli-Bias: Understanding and Measuring Large Language Model Biases in International Political Conflicts

## Introduction

Political bias in Large Language Models (LLMs) is a significant challenge, often manifesting in subtle ways that are difficult to measure with traditional methods. This paper introduces **Poli-Bias**, a new framework designed to systematically identify and quantify such biases.

## Methodology: The Poli-Bias Framework

Poli-Bias employs a counterfactual approach to detect bias. It works by presenting LLMs with paired prompts where the identities of countries involved in international political conflicts are systematically swapped. This allows researchers to observe if the LLM treats legally equivalent scenarios differently based solely on the nationalities involved.

The framework is designed to be granular, decomposing observed disparities into five distinct dimensions. This provides a detailed understanding of *how* and *where* unequal treatment occurs, rather than just identifying its presence.

## Key Findings

The research utilized Poli-Bias to analyze 13 different LLMs, representing a range of model architectures and sizes. The primary findings include:

*   **Systematic Bias Detected:** LLMs demonstrate a consistent tendency to treat equivalent actions differently depending on the countries involved in international conflicts.
*   **Influence of Identity and Affiliation:** The country's identity and potentially the user's perceived affiliation play a role in shaping the LLM's responses.
*   **Impact on Legal Reasoning:** The bias affects how LLMs frame descriptions of actions, evaluate their legality, and construct defenses under international law.

## Conclusion

Poli-Bias proves to be a valuable tool for auditing the political impartiality and potential sycophancy of LLMs. It offers a fine-grained method for understanding and measuring biases that were previously hard to detect.

## Sources

*   Poli-Bias: Understanding and Measuring Large Language Model Biases in International Political Conflicts (arXiv:2608.06123v1)

## Last updated

2026-08-08

## Related pages

*   [[measurement-tools]]
*   [[persuasion-and-influence]]
*   [[human-ai-interaction]]