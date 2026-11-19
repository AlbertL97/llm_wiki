# Source Summary: Emo-H2A: Driving a Facial Robot Directly from LLM Hidden States at Token Rate

## Introduction
This paper introduces Emo-H2A (hidden-to-actuation), a novel paradigm designed to enhance human-robot interaction by synchronizing facial robot expressions with conversational content in real-time. The primary challenge addressed is the latency and lack of dynamic expressiveness in current robot faces, which often rely on static emotion labels.

## Key Findings

*   **Emo-H2A Paradigm:** The core contribution is a method to directly drive a facial robot's expressions using the internal hidden states of Large Language Models (LLMs) during the generation of speech. This bypasses the need for explicit, turn-level emotion labels.
*   **EmoManifold Implementation:** EmoManifold is presented as a training-free instantiation of the Emo-H2A paradigm. It extracts Valence-Arousal-Dominance (VAD) coordinates from LLM hidden states and projects them to control facial movements at the token granularity.
*   **Low-Latency and Synchronized Expressions:** Experiments demonstrate that Emo-H2A significantly improves the dynamism and responsiveness of robot facial expressions. The system achieves an 87.5% success rate in matching valence transitions within a reply, compared to a near-chance level for static labels. Furthermore, expression updates occur in approximately 0.96 seconds, a drastic reduction from the 10-26 seconds typically required for traditional turn-level labeling.
*   **Improved Human-Robot Interaction:** By enabling continuous, context-sensitive, and low-latency facial expressions, Emo-H2A aims to make human-robot interactions more natural, engaging, and anthropomorphic.

## Sources
*   Emo-H2A: Driving a Facial Robot Directly from LLM Hidden States at Token Rate. arXiv preprint arXiv:2611.23932v1.

## Last updated
2026-11-19

## Related pages
*   [[human-robot-interaction]]
*   [[human-ai-interaction]]
*   [[anthropomorphism]]
*   [[ai-companions]]