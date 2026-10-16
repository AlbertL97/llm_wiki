# Sub-Millisecond Reflexes for Continuous Physical Human-Robot Interaction

**Authors:** Not specified in the provided text.
**Date:** Not specified in the provided text (arXiv submission date: 2026-10-16).

## Main Findings:

*   **Problem:** Existing ROS 2 control architectures for continuous physical human-robot interaction suffer from substantial delays due to "stop-to-switch" mechanisms, interrupting task execution and compromising safety during rapid adaptation needs.
*   **Solution:** The paper presents an open-source, sub-millisecond reflex engine that enhances ROS 2-compatible multimode controllers.
*   **Key Features:**
    *   Enables deterministic switching between control modalities.
    *   Integrates reflex behaviors for mitigating contact hazards and kinematic limit violations.
    *   Achieves switching delays below 0.1 ms, significantly faster than conventional ros2_control (more than four orders of magnitude).
    *   Maintains continuous operation during safety-critical events.
*   **Experimental Results:**
    *   Demonstrated on a Franka Robotics manipulator.
    *   Reduced execution time by 3.5% in a multi-stage manipulation task.
    *   Reduced peak trajectory jerk by more than threefold.
*   **Technical Approach:** Eliminates runtime middleware overhead by implementing controller transitions as lock-free pointer operations, enabling reflex-level responsiveness within an open-source framework.