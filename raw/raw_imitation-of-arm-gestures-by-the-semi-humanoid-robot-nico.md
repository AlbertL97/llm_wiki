Authors: Unknown
Date: 2026-07-18

Summary:
This work focuses on developing a system for the semi-humanoid robot NICO to imitate human arm gestures, a crucial aspect for seamless human-robot interaction (HRI).

Key aspects:
- **Problem:** Humanoid robots need perceptual and motor abilities, like gesture imitation, for effective HRI.
- **Approach:** Utilizes analytical geometry and a pretrained MediaPipe pose-estimation model.
- **Methodology:**
    - Extracts 3D coordinates of human body landmarks (arm joints, hand keypoints) from RGB frames using MediaPipe.
    - Computes joint angles using derived geometric relations from these coordinates.
    - Maps computed angles to NICO's motor configuration.
    - Executes movements in a predefined motion sequence.
- **Robot:** Semi-humanoid robot NICO.
- **Input:** Monocular RGB input.
- **Experiments:** Preliminary tests with six participants of varying heights using representative arm gestures.
- **Findings:** The proposed method can produce meaningful imitative motions.
- **Limitations:** Identified limitations in imitating more complex poses and wrist-related movements.