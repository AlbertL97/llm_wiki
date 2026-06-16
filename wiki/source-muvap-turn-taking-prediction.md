# MuVAP: Multimodal Multiparty Voice Activity Projection for Turn-taking Prediction in the Wild

This paper presents MuVAP, a significant advancement in facilitating more natural and effective human-AI/robot interaction by improving turn-taking prediction in multiparty conversations. It addresses the practical challenges of deploying conversational AI in real-world scenarios by minimizing sensor requirements and focusing on causal, real-time prediction.

## Key Findings and Contributions:

*   **Efficient Multimodal Turn-taking Prediction:** Introduces MuVAP, a causal framework that leverages both monaural audio and single-camera video to predict turn-taking. This significantly reduces the hardware complexity typically required for such tasks, making it more feasible for real-world human-robot interaction (HRI) applications.
*   **Speaker-Aware Prediction:** The framework grounds acoustic predictions in face tracks, allowing for speaker-specific turn-taking decisions, which is crucial for natural group dynamics.
*   **Role-Relative Projection:** Proposes an innovative method to simplify the modeling of multiparty interactions by mapping N-speaker dynamics onto a fixed 'current vs. next floor-holder' state, effectively managing combinatorial complexity.
*   **New Dataset for Causal Modeling:** Creates the Audio-Visual Conversation Corpus, a 31-hour dataset of unedited, single-camera multiparty conversations. This resource is vital for training and evaluating causal models where continuous tracking is essential.
*   **Improved Performance:** Demonstrates that MuVAP significantly outperforms existing baselines in predicting shift-hold and next-speaker turns in two- and three-speaker conversations.

## Implications for Human-AI/Robot Interaction Psychology:

Accurate turn-taking is fundamental to fluid and psychologically comfortable human-human interaction. Extending this capability to AI and robots directly impacts how naturally humans perceive and interact with these agents. Robots or AI companions capable of seamless turn-taking are likely to be perceived as more intelligent, socially competent, and trustworthy, enhancing the overall quality of interaction and reducing user frustration or cognitive load.

## Sources:

*   [[muvap-turn-taking-prediction.md]]

## Last updated:

2026-06-16

## Related pages:

*   [[human-robot-interaction]]
*   [[human-ai-interaction]]
*   [[ai-companions]]
*   [[chatbots]]