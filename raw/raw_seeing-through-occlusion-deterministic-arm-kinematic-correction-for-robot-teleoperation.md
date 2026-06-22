Authors: K. Nakajima, S. Suzuki, K. Ogata, S. Hirai
Date: 2026-06-19

Summary:
This paper addresses the challenge of degraded depth estimation in markerless, single-RGB-D-camera motion capture systems for robot teleoperation, particularly when self-occlusion occurs during upper-limb movements.

Key contributions:
- Introduction of Arm Kinematic Correction (AKC) method.
- AKC improves depth estimation by enforcing geometric constraints based on constant arm lengths.
- Reconstructs occluded joint depths using wrist positions and predefined arm lengths.
- Employs a deterministic formulation based on the Pythagorean theorem, avoiding complex probabilistic models.
- Experimental validation using RMSE and Pearson correlation against a Vicon reference system.
- Demonstrated reliable performance in both static and dynamic joint motions.
- Successful demonstration of motion-mapping teleoperation in simulated and physical robot environments.
- AKC enhances robustness and preserves anatomical consistency under long-duration, severe self-occlusion.
- Practicality for real-time applications like robot teleoperation and human-robot interaction is highlighted.

Methodology:
- Leverages wrist positions and constant arm lengths.
- Uses a deterministic formulation based on the Pythagorean theorem.
- Avoids probabilistic modeling and parameter tuning.

Evaluation:
- Compared against a Vicon reference system.
- Metrics: Root-Mean-Square Error (RMSE) and Pearson correlation.
- Tested on static and dynamic joint motions.

Applications:
- Robot teleoperation.
- Human-robot interaction.
- Motion-mapping teleoperation.