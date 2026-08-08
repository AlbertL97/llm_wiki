Authors: N/A (ArXiv ID implies potential author information available on the source)
Date: 2026-08-08

Summary:
This research introduces a Learning from Demonstration (LfD) framework enabling robots to acquire motor skills by imitating human movements, thereby reducing the need for explicit programming. A key aspect highlighted is that human-like robot motion is a significant factor in fostering trust and facilitating seamless collaboration in human-robot interaction (HRI).

The paper details a framework for learning human-like robot motion from demonstration. This involves data collection, probabilistic trajectory learning, and perceptual user evaluation. Specifically, a dataset comprising 3,142 handwriting demonstrations of all Latin alphabet characters (uppercase and lowercase) was gathered from 22 participants using a touchscreen teleoperation interface. This data captured planar position, contact force, and timing.

The framework extends the Gaussian Mixture Model and Gaussian Mixture Regression approach by incorporating force and normalized time dimensions for a richer representation of human dynamics. It also adapts to handle non-continuous, multi-segment trajectories, allowing for generalization across various demonstrations.

A user study involving 21 participants assessed the perceived human-likeness of the generated trajectories. Participants used a continuous scale (0-100, with 50 as neutral) to rate the motion as robotic or human-like. The generated trajectories achieved an average human-likeness score of 71.50 (SD=22.56), indicating that most trajectories were perceived as more human-like.

Participants identified geometric positioning and trajectory sequence as the most influential perceptual factors. They also reported positive attitudes towards human-like robot behavior.

The datasets are made publicly available as open-source resources to serve as a reproducible benchmark for developing and evaluating methods for generating human-like robot motion.

Key Findings:
- LfD framework for robots to learn human-like motor skills from demonstration.
- Human-like robot motion is crucial for building trust and enabling natural collaboration in HRI.
- Handwriting dataset collected (3,142 demonstrations).
- Framework incorporates force and normalized time for richer dynamics.
- User study showed generated trajectories perceived as significantly more human-like (71.50/100).
- Geometric positioning and trajectory sequence are key perceptual factors for human-likeness.
- Participants reported positive attitudes towards human-like robot behavior.
- Datasets are open-source for research benchmarking.