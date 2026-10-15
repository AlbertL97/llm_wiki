Authors: Jianing Zhou, Jiarui Sun, Yi-Chao Chen, Jonathan K. Lee, Yongshuo Zhang, Yanyan Zhao, Kai-Wei Chang
Date: 2026-10-15

## PerSo: Investigating Facets of LLMs' Social Intelligence in Real-World Persuasion Scenarios

### Introduction
Understanding the social intelligence of Large Language Models (LLMs) is crucial for their effective integration into human-AI interactions and multi-agent systems. Social intelligence is multifaceted, encompassing cognitive intelligence (the ability to infer others' mental states) and behavioral intelligence (the ability to select appropriate social actions to achieve social goals based on these inferences). Persuasion scenarios offer a complex environment where both aspects are simultaneously engaged, unlike previous benchmarks that often evaluated them in isolation using synthetic data.

### PerSo Benchmark
The paper introduces PerSo, a novel benchmark for evaluating LLM social intelligence in persuasion. It utilizes real-world persuasion dialogues sourced from Reddit's "ChangeMyView" community. An LLM-in-the-loop pipeline was employed to construct the evaluation tasks, with the entire process validated through human annotation. This approach ensures the benchmark reflects authentic human interaction dynamics.

### Key Findings
*   **Benchmark Scope:** PerSo evaluates both cognitive and behavioral aspects of social intelligence within realistic persuasion dialogues.
*   **LLM Performance Scaling:** Evaluation of various LLMs indicates that performance generally improves with larger model sizes.
*   **Performance Variation:** LLM performance is not uniform across all dimensions of social intelligence.
*   **Cognitive vs. Behavioral:** The strongest LLM evaluated slightly surpassed human performance on the behavioral aspect of persuasion, whereas human participants maintained an advantage in the cognitive aspect (inferring mental states).
*   **Real-World Applicability:** The use of real-world dialogues and human annotation aims to increase the ecological validity of the evaluations.

### Implications
The findings highlight the progress and limitations of current LLMs in exhibiting sophisticated social intelligence required for nuanced human-AI interactions, particularly in persuasive contexts.