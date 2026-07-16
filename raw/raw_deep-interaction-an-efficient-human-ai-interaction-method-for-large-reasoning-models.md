# Deep Interaction: An Efficient Human-AI Interaction Method for Large Reasoning Models

**Authors:** Not specified in the provided text.
**Date:** 2026-07-16 (based on the arXiv version provided)

## Comprehensive Summary Details:

This research addresses a critical limitation in human-AI interaction, particularly with large reasoning models (LLMs) that employ Chain-of-Thought (CoT) reasoning. While CoT enhances LLMs' ability to handle complex, multi-step tasks, current methods for correcting errors are inefficient. These typically involve re-generating entire responses, which may still contain errors, or requiring users to manually flag specific faulty steps in subsequent turns, often leading to the AI acknowledging the mistake without fundamentally improving future reasoning. 

To overcome these drawbacks, the authors propose **Deep Interaction**, an efficient human intervention mechanism designed for precise correction of reasoning errors in LLMs. The core innovation of Deep Interaction lies in its ability to enable direct editing of the original LLM response. This allows users to correct only the erroneous parts of the reasoning chain while preserving the accurate steps. The edited CoT is then refined into a distilled prompt, which effectively guides the LLM along the corrected reasoning path for subsequent operations.

Experimental results demonstrate the efficacy of Deep Interaction, showing over a 25% improvement in the correction success rate. Furthermore, the method significantly reduces token usage by approximately 40% when applied to STEM tasks reasoning, compared to existing baseline approaches. This indicates that Deep Interaction offers a more targeted, efficient, and effective way for humans to collaborate with and refine the reasoning capabilities of LLMs.