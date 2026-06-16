# MuVAP: Multimodal Multiparty Voice Activity Projection for Turn-taking Prediction in the Wild

**URL:** http://arxiv.org/abs/2606.16731v1
**Date:** 2026-06-16

**Summary:**
This research addresses a key limitation in current multiparty turn-taking models, which often require complex microphone arrays or multi-camera setups, thereby hindering their practical application in human-robot interaction scenarios. The authors introduce MuVAP (Multimodal Multiparty Voice Activity Projection), a causal multimodal framework that improves turn-taking prediction. MuVAP extends traditional Voice Activity Projection by grounding acoustic predictions in face tracks, enabling speaker-aware turn-taking predictions efficiently from a single monaural audio stream and a single camera view.

To manage the inherent combinatorial complexity of modeling multiple speakers, the paper proposes a novel approach called Role-Relative Projection. This method maps any N-speaker interaction onto a fixed 'current versus next floor-holder' state, simplifying the prediction task.

Recognizing the limitations of existing audiovisual datasets (which often contain disruptive editing cuts that break causal tracking), the researchers also introduce a new resource: the Audio-Visual Conversation Corpus. This corpus comprises 31 hours of unedited, single-camera multiparty conversations, specifically designed to support the development and evaluation of causal models like MuVAP.

Evaluations of MuVAP demonstrate its superior performance over strong baselines on critical tasks such as Shift-Hold and next-speaker prediction in both two- and three-speaker conversational settings. This enhanced capability in turn-taking prediction is crucial for developing more natural, responsive, and socially intelligent AI agents and robots.