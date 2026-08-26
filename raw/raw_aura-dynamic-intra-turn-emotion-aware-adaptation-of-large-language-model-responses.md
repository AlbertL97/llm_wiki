Authors: Not specified in the provided text
Date: 2026-08-26 (based on URL structure)

Title: Aura: Dynamic Intra-Turn Emotion-Aware Adaptation of Large Language Model Responses

Description: Effective human-AI interaction requires systems that dynamically adapt to a user's behavior and evolving understanding. When users interact with Large Language Models (LLMs), these models typically respond to prompts without sensing the user's immediate reactions. This lack of communicative synchrony can lead to information overload or leave confusion unresolved in real time. In this paper, we introduce Aura, a framework that enables LLM systems to dynamically modulate output based on a user's evolving emotions. Aura's Perception Module continuously estimates the user's emotional state from facial expressions. Our Policy Module then selects interventions through a probabilistic belief model. Finally, Aura's Generation Module uses parameter-efficient Low-Rank Adaptation (LoRA) adapters to produce contextually tailored responses mid-turn during response generation. We evaluated Aura in a within-subjects user study (N=20) on information-seeking tasks, where it achieved statistically significantly higher normalized perceived learning gains than a Llama-3 baseline and reduced interaction time by 21% relative to existing LLM baselines (GPT-4o, Llama-3). Our results indicate that real-time, context-sensitive interventions can improve learning efficiency and user satisfaction without observable degradation in factual accuracy. Aura thus supports the potential for more responsive and effective human-AI interaction.

Key Findings:
- Aura is a framework for LLMs to dynamically adapt responses based on user emotions detected mid-turn.
- It uses a Perception Module (facial expressions), Policy Module (probabilistic belief model), and Generation Module (LoRA adapters).
- User studies (N=20) on information-seeking tasks showed Aura achieved significantly higher perceived learning gains compared to a Llama-3 baseline.
- Aura reduced interaction time by 21% compared to existing LLM baselines (GPT-4o, Llama-3).
- Real-time, context-sensitive interventions improve learning efficiency and user satisfaction without degrading factual accuracy.
- The system enhances the responsiveness and effectiveness of human-AI interaction.