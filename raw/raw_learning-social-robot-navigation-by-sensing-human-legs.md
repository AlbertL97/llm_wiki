# Learning Social Robot Navigation By Sensing Human Legs

**Authors:** Not specified in the provided description.
**Date:** Not specified in the provided description (assuming based on the arXiv URL format for a 2026 publication).

## Summary Details:

*   **Problem:** Existing learning-based robot navigation methods often simplify pedestrian representation (e.g., as circles) despite sensors like 2D LiDAR primarily detecting legs at ground level.
*   **Solution:** The paper proposes CALF (Convolutional Attention for Leg Features), an end-to-end neural architecture designed to interpret leg motion directly from LiDAR scans.
    *   CALF combines convolutional layers, attention mechanisms, and MLPs.
    *   It produces safe navigation commands based on leg movement analysis.
*   **Methodology:**
    *   The CALF policy is trained using deep reinforcement learning.
    *   Training occurs within a custom simulator called LegNav, which incorporates 2D LiDAR ray tracing and a novel pedestrian gait model.
*   **Evaluation:**
    *   Performance is compared against classical and other learning-based navigation baselines.
    *   Metrics include navigation performance and social compliance.
    *   The approach is validated through real-world experiments using a TurtleBot 4 in a zero-shot deployment scenario.
*   **Results:** The deployed CALF policy yielded smooth and socially compliant trajectories.
*   **Efficiency:** The LegNav simulator, written in JAX, allows for training a deployment-ready CALF policy in under an hour on a single consumer GPU.