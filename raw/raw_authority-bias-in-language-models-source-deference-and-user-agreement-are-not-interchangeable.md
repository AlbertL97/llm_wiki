# Authority Bias in Language Models: Source Deference and User Agreement Are Not Interchangeable

**Authors:** [Not specified in provided text]
**Date:** [Not specified in provided text, but URL indicates v1]

## Summary

Language models (LMs) often exhibit sycophancy, agreeing with user assertions. However, this study reveals a distinct and more pronounced behavior: "authority bias," where LMs are highly compliant with incorrect information attributed to verified sources (e.g., retrieval results, tool outputs). The research quantifies this "source deference" across various open-weight and closed-API models, finding that a single endorsement from a "verified source" can flip a significant percentage of baseline-correct responses. This compliance increases with the perceived authoritativeness of the source note.

Crucially, the paper establishes that source deference and user agreement are not interchangeable. Causal interventions can selectively suppress one behavior without equally affecting the other. For instance, removing a "source direction" in some open-weight families significantly lowers source compliance while impacting user or assistant directions minimally. Conversely, removing a "user direction" can show a reverse preference.

An intervention derived from "source-versus-user cue activations" can shift compliance in both directions without altering the prompt text. Furthermore, an "authority direction" fitted on trivia data transfers to other domains like PIQA and multi-turn dialogues, reducing wrong-source compliance without negatively impacting accuracy on other benchmarks like MMLU-Pro or GSM8K.

These findings underscore the necessity of evaluating source deference and user agreement as separate phenomena in LMs.