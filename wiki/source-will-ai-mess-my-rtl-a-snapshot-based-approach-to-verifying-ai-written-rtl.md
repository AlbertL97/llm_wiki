# Will AI mess my RTL? A snapshot-based approach to verifying AI-written RTL

## Introduction

The increasing adoption of Artificial Intelligence (AI), particularly Large Language Models (LLMs), in the field of Register-Transfer Level (RTL) hardware development necessitates robust verification methodologies. Ensuring that AI-generated or AI-modified RTL code maintains existing functionality is paramount for establishing trust in AI-driven design workflows. This paper introduces **SVApshot**, a novel framework designed to automate the verification of AI-written RTL.

## SVApshot Framework

SVApshot is a fully automated system that leverages LLMs to generate and iteratively correct SystemVerilog Assertions (SVA) for RTL modules, aiming to remove human involvement from the assertion generation process. The key features of the framework include:

*   **Snapshot Methodology:** This novel approach captures the current state of an RTL design by generating a comprehensive set of formal assertions. These assertions form a regression suite that can validate future design changes.
*   **Automated Verification Processes:** The framework includes features for:
    *   Duplicate detection to ensure assertion efficiency.
    *   Assertion set expansion to enhance coverage.
    *   Iterative repair of failing assertions using LLM-guided debugging with feedback from formal verification.

## Experimental Evaluation and Impact

The framework's effectiveness was demonstrated through experimental evaluations on diverse RTL modules. SVApshot achieved high coverage, particularly for complex modules, and successfully identified both manually injected and AI-introduced bugs.

Beyond bug detection, SVApshot also opens avenues for:

*   Automatic generation of formal testbenches.
*   Benchmarking LLMs for hardware design using nuanced, assertion-based scoring rather than simple pass/fail metrics.

## Relevance to Human-AI Interaction

This research is highly relevant to the psychology of Human-AI Interaction, particularly concerning the establishment of **trust** in AI systems operating in complex technical domains. By providing a mechanism to verify the integrity of AI-generated code, SVApshot addresses concerns about the reliability and predictability of AI collaborators, a critical factor for widespread AI adoption in professional workflows.

## Sources

*   [Will AI mess my RTL? A snapshot-based approach to verifying AI-written RTL](http://arxiv.org/abs/2611.12712v1)

## Last updated

2026-11-10

## Related pages

*   [[trust]]
*   [[human-ai-interaction]]
