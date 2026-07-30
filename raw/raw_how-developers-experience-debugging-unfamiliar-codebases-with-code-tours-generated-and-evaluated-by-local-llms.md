# How Developers Experience Debugging Unfamiliar Codebases with Code Tours Generated and Evaluated by Local LLMs

**Authors:** [Authors not explicitly mentioned in description, but implied by study structure]
**Date:** 2026-07-30 (based on v1 date)

## Overview

This research explores the user experience of developers when debugging unfamiliar codebases using code tours automatically generated and evaluated by local Large Language Models (LLMs). Code tours are interactive documentation designed to onboard developers into a codebase. The study focuses on how different properties of LLM-authored code tours impact developer experience and trust calibration.

## Methodology

- A pipeline was developed to generate and evaluate code tours from real reproducible bugs.
- 26 developers with diverse backgrounds participated in a user study.
- 26 code tours were created from Java bugs sourced from GitHub commits.
- Each tour was independently judged by two different LLMs, resulting in 52 evaluated configurations.
- Participants engaged in a think-aloud protocol while exploring the code tours.
- Three authors qualitatively coded the interview data to identify recurring themes.

## Key Findings

### Developer Preferences for Code Tours:

- **Scaling Detail:** Developers preferred tours that adjusted detail based on code length.
- **Avoided Restatement:** Tours that avoided simply repeating the code were favored.
- **Scannability:** Easily scannable tours were more effective.
- **Guiding Tone:** A guiding tone was generally preferred.
- **Conflicting Preferences:** Some desirable tour properties were mutually exclusive (e.g., use of imperative mood).
- **Limitations of Stack Traces:** Stack traces alone were often insufficient to identify all relevant steps for developers.

### Trust Calibration:

- Developers tended to trust descriptions they perceived as human-written more than those they believed were AI-generated.
- This suggests a critical need for calibrating user trust to prevent both underutilization and misuse of AI tools.

### LLM Evaluation Reliability:

- LLM-generated annotations of code tour quality were found to be unreliable.
- Pervasive issues included:
    - **Sycophancy:** LLMs agreeing with incorrect assumptions or statements.
    - **Confabulation:** LLMs generating plausible but false information.
    - **Incoherence:** LLMs producing illogical or nonsensical text.

## Implications and Future Work

- **Fine-tuning LLMs:** Laying the groundwork for fine-tuning open-weight models for code tour generation.
- **Personalization:** Developing methods to personalize tour generation based on individual developer preferences.
- **Step Selection:** Improving the ability to select relevant steps beyond what is provided by stack traces.
- **Trust Calibration:** Addressing the crucial need to calibrate user trust to ensure appropriate use of AI tools.
- **Improving LLM Evaluators:** Enhancing the trustworthiness and reliability of open-weight LLMs as evaluators of generated content.