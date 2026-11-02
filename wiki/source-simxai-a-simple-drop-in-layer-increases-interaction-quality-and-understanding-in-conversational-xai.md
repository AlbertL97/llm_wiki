# SimXAI: A Simple Drop-in Layer Increases Interaction Quality and Understanding in Conversational XAI

## Authors

*   [Not specified in the provided text]

## Date

*   [Not specified in the provided text (arXiv version 1, 2610.41856v1)]

## Abstract

Conversational explainable AI (ConvXAI) agents often use GUS-style architectures with separate modules for intent recognition, dialogue management, and template-based response generation. While faithful to the underlying XAI methods, these pipelines are hard to adapt and often struggle with context-dependent follow-up questions. We present SimXAI, a lightweight LLM-centric conversational layer that replaces these modules with a single tool-calling LLM that bridges access to existing XAI resources. Rather than a standalone agent, SimXAI serves as a modular interface that enables conversational access to external XAI resources. We further introduce an evaluation suite for single- and multi-turn parsing, faithfulness, and contextualization. Across existing and new datasets, SimXAI achieves strong function-selection accuracy and high faithfulness while better handling context-dependent requests. In a user study replacing only the conversational layer of TalkToModel, a representative GUS-based agent, users completed tasks more accurately and in fewer turn. Overall, SimXAI improves GUS-based design while preserving faithfulness and improving conversational quality.

## Key Findings

*   **Problem:** Traditional ConvXAI architectures (GUS-style) are rigid, difficult to adapt, and poor at handling contextual follow-up questions.
*   **Solution:** SimXAI is a lightweight, LLM-centric conversational layer that simplifies the architecture by using a single tool-calling LLM.
*   **Functionality:** SimXAI acts as a modular interface, enabling conversational access to external XAI resources.
*   **Improvements:**
    *   Increases interaction quality.
    *   Enhances understanding in conversational XAI.
    *   Achieves strong function-selection accuracy and high faithfulness.
    *   Better handles context-dependent requests.
*   **User Study Results:** Replacing the conversational layer with SimXAI led to users completing tasks more accurately and in fewer turns.
*   **Contribution:** Improves upon existing GUS-based designs while maintaining faithfulness and boosting conversational quality.

## Sources

*   [SimXAI: A Simple Drop-in Layer Increases Interaction Quality and Understanding in Conversational XAI](http://arxiv.org/abs/2610.41856v1)

## Last updated

*   2026-11-02

## Related pages

*   [[explainability]]
*   [[human-ai-interaction]]
*   [[chatbots]]