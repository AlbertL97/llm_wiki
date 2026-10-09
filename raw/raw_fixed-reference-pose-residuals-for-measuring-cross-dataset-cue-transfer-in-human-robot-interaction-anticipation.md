**Title:** Fixed-Reference Pose Residuals for Measuring Cross-Dataset Cue Transfer in Human-Robot Interaction Anticipation

**Authors:** Wei Zhou, Zihong Zhou, Kaan Vural, Katsuya Ogawa, Kuniaki Takahashi, Michael V. W. Morris

**Date:** 2026-10-09 (First version: 2026-10-09)

**Summary:**
Social and service robots operating in public spaces require the ability to anticipate which nearby person is about to approach and initiate physical contact. This anticipation is crucial for preparing an appropriate response before contact occurs. A significant challenge arises when a predictive model, trained on data from one robot or environment, needs to be deployed on a different robot at a different location (cross-dataset and cross-platform transfer). This study investigates which cues support this anticipation when such transfer occurs.

The researchers propose and utilize a Fixed-Reference Pose Residuals (FRPR) model. This model is designed to dissect the prediction into two components: a fixed geometry prediction derived from a person's bounding box and mask, and an additive correction term learned from body pose via a temporal network. This construction allows for the independent assessment of the contribution of pose information to the prediction.

Experiments were conducted using two public egocentric datasets, HUI360 and SSUP-A, recorded by different robots. Key findings include:

*   **Asymmetric Cue Transfer:** When transferring from SSUP-A to HUI360, the pose correction component improved the average precision (AP) from 0.277 to 0.321. However, the opposite transfer direction (HUI360 to SSUP-A) showed no measurable gain from the pose correction. This asymmetry was also observed when using a stronger, source-selected geometry reference.
*   **Measurement vs. Prediction Accuracy:** Freezing the geometry predictor offered no AP advantage over joint training. Furthermore, simpler baselines, such as basic geometric cues and tree ensembles, remained competitive or even outperformed the FRPR model in terms of prediction accuracy. This suggests that the FRPR model's primary utility lies in measuring cue transferability rather than maximizing prediction performance.
*   **Head Orientation Gains:** Adding a head-orientation residual provided small gains in both transfer directions, indicating that head orientation is a useful cue for anticipation.
*   **Discriminating Cues:** Post hoc analysis revealed that whether a person faces the camera maintains its discriminative direction across datasets. In contrast, head pitch showed a reversal in its discriminative direction between datasets.
*   **Limited Detection:** Even with neural models incorporating geometry, when using thresholds chosen on the source data, the models detected at most 17% of target interactions, highlighting the difficulty of robust anticipation in varied environments.

The study's contribution is in providing a method to dissect and measure the transferability of interaction anticipation cues, informing the development of more robust and adaptable human-robot interaction systems.

**Code:** Available at https://github.com/WeiZhou96/FRPR-interaction-anticipation