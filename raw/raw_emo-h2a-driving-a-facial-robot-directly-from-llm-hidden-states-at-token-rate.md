# Emo-H2A: Driving a Facial Robot Directly from LLM Hidden States at Token Rate

**Authors:** Jiarui Zhang, Xinyi Hu, Jingyan Huang, Kaizheng Fan, Zhiying Yang, Zihan Yang, Shiqi Chen, Kai-Wei Chang, Song-Chun Zhu, Yejin Choi
**Date:** 2026-11-19

## Introduction
Diverse, semantically synchronized, and low-latency facial expressions are essential for human-robot interaction. While large language models (LLMs) have endowed anthropomorphic robots with fluent speech, facial expression still struggles to follow the conversation. This paper addresses this gap.

## Emo-H2A Paradigm
We present Emo-H2A (hidden-to-actuation), a paradigm that drives a facial robot directly from LLM hidden states during autoregressive decoding.

### Key Features:
*   **No separate emotion label:** Expression is derived directly from LLM hidden states, eliminating the need for explicit emotion labels.
*   **Continuous and context-sensitive:** Facial expressions are not static but evolve continuously based on the LLM's internal representations.
*   **Low-latency synchronization:** The face moves in real-time with the unfolding reply, at token granularity.

## EmoManifold Implementation
We instantiate the Emo-H2A paradigm as EmoManifold, a training-free method.

### Methodology:
1.  **VAD Coordinate Extraction:** Extract a valence-arousal-dominance (VAD) coordinate from each LLM hidden state.
2.  **Projection:** Project these VAD coordinates.
3.  **Facial Driving:** Drive the face directly from these projected coordinates at token granularity.

## Evaluation
The readout mechanism was tested on six language models and drove a 29-degree-of-freedom (DoF) facial robot.

### Results:
*   When driven by the EmoManifold projection, the face shifted its expression in the matching direction on **87.5% of within-reply valence transitions**.
*   In contrast, holding a single label for the whole reply resulted in directional tracking near the **50% chance level**.
*   The latency for expression change was significantly reduced, moving in **0.96s** compared to waiting **10-26s** for a turn-level label to return after the reply finishes.