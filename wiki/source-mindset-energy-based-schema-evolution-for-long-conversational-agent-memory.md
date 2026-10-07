# MINDSET: Energy-based Schema Evolution for Long Conversational Agent Memory

## Authors

* Yicheng Fu
* Michael Saxon
* Xinyuan Chen
* William F. McPhee
* Christopher G. Harris
* Christopher L. Drum

## Date

2026-10-07

## Summary

This paper presents MINDSET, a novel memory controller designed to enhance the long-term memory capabilities of conversational agents. Addressing the challenge of maintaining context and adapting to evolving information in extended dialogues, MINDSET structures conversations as immutable episodes organized into versioned schemas. It employs a minimum-energy state transition mechanism to manage memory, balancing factors like representation distortion, contradiction, and inconsistency. The system aims to preserve both current and historical states, differentiate active knowledge from stale information, and retrieve relevant evidence efficiently without excessive reliance on large language models for rewriting.

## Key Findings

*   **MINDSET System:** A new memory controller that uses energy-based schema evolution for managing long conversational agent memory.
*   **Conversation Storage:** Conversations are stored as immutable episodes and organized into versioned schemas through minimum-energy state transitions.
*   **Adaptation Mechanisms:** The transition decision for incoming episodes considers representation distortion, contradiction, historical damage, fragmentation, and internal inconsistency. Hysteresis is used to prevent premature rewriting of stable memory.
*   **Evaluation:** MINDSET was evaluated against five existing memory systems using 850 questions from the LoCoMo (700 questions) and MemoryAgentBench (150 questions) datasets.
*   **Performance:** MINDSET achieved the highest observed LoCoMo answer F1 score and significantly improved retrieval ranking (Recall@8, MRR, and nDCG@8) compared to the second-best method, LightMem (p<0.01 after Holm correction).
*   **Cross-Model Compatibility:** Evaluation with GLM-4.7 and Gemma-4-31B demonstrated model independence for MINDSET.
*   **Key Contributors:** Ablation studies identified controlled fragmentation and schema-aware assignment as the most significant factors contributing to answer quality.
*   **Conclusion:** The results suggest that long-term memory in conversational agents can be more effectively managed as constrained state management rather than through continual summarization.

## Sources

*   [MINDSET: Energy-based Schema Evolution for Long Conversational Agent Memory](http://arxiv.org/abs/2610.08586v1)

## Last updated

2026-10-07

## Related pages

*   [[metacognitive-agent-architectures]]
*   [[chatbots]]
*   [[human-ai-interaction]]