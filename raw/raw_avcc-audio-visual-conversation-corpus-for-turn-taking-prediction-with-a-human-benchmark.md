Authors: S. Mohaghegh, Y. Gao, M. Kalami, R. Singh, M. Gunes, S. Zahedi, T. Baltrusaitis
Date: 2026-11-11

## AVCC: Audio-Visual Conversation Corpus for Turn-Taking Prediction with a Human Benchmark

This paper addresses the challenge of predicting turn-taking in multi-party conversations, a critical component for conversational agents and social robots to interact naturally without awkward pauses. Existing methods often rely on per-speaker sensors and specific event definitions, which are not representative of a robot's typical sensor setup (a single camera and microphone).

**Key Contributions:**

*   **AVCC Corpus:** A new 31-hour audio-visual corpus of two- and three-speaker online conversations recorded using a single static camera and microphone.
*   **NSP Benchmark:** The corpus is transformed into a public benchmark for Next-Speaker Prediction (NSP).
*   **Human Benchmark:** A human reference benchmark was collected by having humans perform the same NSP task on a speaker-disjoint test partition.
*   **Test Data:** Includes a speaker-disjoint seven-video test partition with 865 'hold' and 865 'shift' events occurring at mutual-silence gaps.
*   **Transcripts:** Word-level forced-aligned transcripts are provided for the entire corpus.
*   **Model Evaluation:** Two models, an audio-only Role-Relative VAP model (RoleVAP) and the multimodal MuVAP model, are scored against the benchmark.
*   **Data Release:** Labels, transcripts, human performance data, and reproduction scripts are released.

This work is significant for advancing the ability of AI systems and robots to engage in more fluid and human-like conversational interactions by improving their understanding and prediction of conversational dynamics.