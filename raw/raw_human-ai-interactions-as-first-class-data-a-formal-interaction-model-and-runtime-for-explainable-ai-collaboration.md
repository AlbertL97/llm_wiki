# Human--AI Interactions as First-Class Data: A Formal Interaction Model and Runtime for Explainable AI Collaboration

**Authors:** Not specified in the provided description.
**Date:** 2026-10-27 (v1)

## Core Problem:

Human-AI interactions, particularly within environments like computational notebooks and scientific workflows, are often treated as ephemeral prompt-response exchanges. This transient nature hinders critical aspects of AI development and usage, including:

*   **Reproducibility:** Inability to reliably recreate past interactions and their outcomes.
*   **Explainability:** Difficulty in understanding the context and reasons behind AI behavior.
*   **Replayability:** Challenges in re-executing specific interaction sequences.
*   **Behavioral Analysis:** Limited ability to study user patterns, engagement, and learning.
*   **Adaptive AI Support:** Obstacles in developing AI systems that can learn from and adapt to user behavior.

## Proposed Solution: Human-AI Interaction Description Language (HAIDL)

The authors propose HAIDL, a formal interaction model designed to represent human-AI interactions as a new, structured data class. HAIDL aims to capture comprehensive details of each interaction, including:

*   Computational context
*   User request
*   Prompt payload
*   AI response
*   User feedback
*   Problem context
*   Provenance information
*   Model metadata

This formal representation allows interactions to be treated as durable data products. The concrete syntax of HAIDL is inspired by Backus-Naur Form (BNF).

## Implementation: HAIDL-X Middleware

HAIDL-X is presented as a middleware system, specifically integrated into JupyterLab, to instantiate the HAIDL vision. Its functionalities include:

*   Capturing user-bot state throughout an interaction.
*   Building context-aware prompts for the AI.
*   Interfacing with various AI providers.
*   Collecting explicit and implicit user feedback.
*   Storing interactions in a structured repository.

## Learning and Analysis Layer:

A key feature of HAIDL-X is a learning layer built on top of the interaction objects. This layer maps interaction data and notebook execution traces to derive reproducible measures of user behavior, such as:

*   Engagement levels
*   Task performance metrics
*   Help-seeking patterns
*   Error-oriented usage
*   Identification of learning personas

## Benefits:

HAIDL and HAIDL-X provide a foundation for treating human-AI collaboration as:

*   **Structured Data:** Organized and queryable.
*   **Replayable:** Interactions can be re-run for testing and analysis.
*   **Analyzable:** Enables deep insights into user behavior and AI performance.

This work is crucial for advancing the understanding and development of more effective and transparent Human-AI interaction systems.