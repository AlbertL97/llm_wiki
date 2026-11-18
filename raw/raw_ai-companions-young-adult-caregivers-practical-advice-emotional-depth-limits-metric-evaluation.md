# AI Companions for Young Adult Caregivers: Practical Advice, Emotional Depth, and the Limits of Metric Evaluation

**Authors:** [Not Specified]
**Date:** 2026-11-18 (based on URL v1)

## Abstract

Young adult caregivers (YACs) are individuals aged 18 to 25 currently taking care of a family member, partner, or friend facing chronic illness. AI companions designed specifically for YACs remain underexplored in prior works. We present Carebot, it uses an open-weight LLM (Gemma 3-27B) as its base model, on which we compared fine-tuning, retrieval-augmented generation (RAG), and a combination of both. The fine-tuning was performed based on an existing dataset of conversations with YACs and a psychologist. Three well-being experts evaluated these configurations and preferred the fine-tuned model for the warmth of its responses and its actionable advice tailored to YACs. Based on their choice, we adopted the fine-tuned model as Carebot's final configuration and used it for all subsequent evaluations. An LLM judge preferred this Carebot's responses over the base model's in 85% of evaluated pairs. We then conducted a user study with 90 YACs, half of whom interacted with the base model and half with Carebot. The user study revealed a discrepancy between metric evaluation and actual user perception. Participants who used Carebot were more likely to characterize its replies as overly practical and brief, noting that it favored advice over emotional support. Conversely, participants who used the base model indicated that its responses were more emotionally oriented than practical. Although, fine-tuning made Carebot's replies more practical, but they were not emotionally supportive for users. We argue that support tools for YACs require situation-sensitive emotional depth and aligned evaluation frameworks to study their effectiveness.

## Key Findings

*   **Target Population:** Young adult caregivers (YACs) aged 18-25 facing chronic illness caregiving.
*   **AI Companion:** Carebot, based on LLM Gemma 3-27B, with fine-tuning and RAG explored.
*   **Expert Preference:** Well-being experts favored a fine-tuned version of Carebot for its perceived warmth and actionable advice.
*   **LLM Evaluation:** An LLM judge preferred Carebot's responses over the base model's in 85% of cases.
*   **User Study Discrepancy:** A user study with 90 YACs revealed that participants interacting with the fine-tuned Carebot found its responses overly practical and brief, lacking emotional support.
*   **Base Model Perception:** Participants using the base model perceived its responses as more emotionally oriented, though less practical.
*   **Core Argument:** AI support tools for YACs need situation-sensitive emotional depth and appropriate evaluation frameworks to accurately assess their effectiveness.

## Methodology

*   Comparison of fine-tuning, RAG, and combined approaches for LLM adaptation.
*   Fine-tuning data: Conversations with YACs and a psychologist.
*   Expert evaluation by three well-being experts.
*   LLM-based evaluation of response quality.
*   User study with 90 YACs, comparing the fine-tuned Carebot with the base LLM.
*   Qualitative feedback from users on response characteristics (practicality vs. emotional support).

## Implications

*   The effectiveness of AI companions in sensitive domains like caregiving cannot solely rely on expert opinions or standard LLM evaluations.
*   There is a critical need to bridge the gap between perceived AI helpfulness by experts and actual user experience, particularly concerning emotional support.
*   Future AI companion development for vulnerable populations must prioritize emotional depth and nuanced understanding of user needs.
*   Evaluation frameworks need to be refined to capture the subjective experience of users and measure emotional resonance alongside task-oriented utility.
