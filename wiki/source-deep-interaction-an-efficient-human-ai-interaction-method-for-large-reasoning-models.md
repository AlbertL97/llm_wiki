# Deep Interaction: An Efficient Human-AI Interaction Method for Large Reasoning Models

This paper introduces **Deep Interaction**, a novel and efficient method for improving human-AI collaboration by enabling precise correction of errors in the reasoning processes of large language models (LLMs). Current methods for handling LLM reasoning errors, especially within Chain-of-Thought (CoT) frameworks, are often inefficient, leading to repeated mistakes or tedious manual corrections.

## Key Findings:

*   **Problem Identification:** Existing human-AI interaction methods struggle with effectively correcting multi-step reasoning errors in LLMs. Re-generation often repeats mistakes, and manual step-by-step flagging is laborious and not always effective.
*   **Proposed Solution: Deep Interaction:** This method allows for direct editing of erroneous parts of an LLM's response while preserving correct reasoning steps.
*   **Mechanism:** Edited reasoning chains are distilled into a refined prompt that steers the LLM along the corrected path.
*   **Benefits:** Experimental results show significant improvements:
    *   Over 25% increase in correction success rate.
    *   Approximately 40% reduction in token usage for STEM tasks reasoning.
*   **Impact:** Deep Interaction offers a more efficient, targeted, and effective approach for humans to guide and correct AI reasoning, enhancing the reliability and usability of LLMs for complex tasks.

## Sources:

*   [Deep Interaction: An Efficient Human-AI Interaction Method for Large Reasoning Models](http://arxiv.org/abs/2607.14049v1)

## Last updated:

2026-07-16

## Related pages:

*   [[human-ai-interaction]]
*   [[explainability]]
*   [[trust]]
*   [[chatbots]]