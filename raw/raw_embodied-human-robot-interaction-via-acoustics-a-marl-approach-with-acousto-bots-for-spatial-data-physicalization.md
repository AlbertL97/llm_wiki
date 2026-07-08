# Embodied Human-Robot Interaction via Acoustics: A MARL Approach with AcoustoBots for Spatial Data Physicalization

**Authors:** Not specified in the provided text.
**Date:** Not specified in the provided text (arXiv date: 2026-07-08).

## Comprehensive Summary:

This research addresses the limitations of traditional static data physicalization by introducing **AcoustoBots**, a platform for embodied human-robot interaction that uses acoustics to represent spatial data.

**Key Features and Findings:**

*   **Problem:** Static data physicalization disconnects from real environments, limiting its ability to convey embodied spatial dynamics and user engagement.
*   **Solution:** AcoustoBots utilize mobile robots (TurtleBot3) equipped with ultrasonic phased arrays. These arrays levitate particles, with the height of the levitated particle (1-10 cm) encoding local urban scalar values (e.g., population density, noise, traffic).
*   **Technology:**
    *   **Acoustic Levitation:** Upward-facing 8x8 ultrasonic phased arrays levitate particles.
    *   **Data Encoding:** Particle height represents scalar data values.
    *   **Navigation Control:** A Multi-Agent Reinforcement Learning (MARL) policy, specifically the Multi-Agent Deep Deterministic Policy Gradient (MADDPG) algorithm (centralized training, decentralized execution), is used for collision-aware navigation.
    *   **Acoustic Controller:** A high-rate Gerchberg-Saxton-Phased Array of Transducers (GS-PAT) acoustic controller ensures trap stability and maintains commanded particle height during robot motion.
*   **System Loop:** Achieves a closed perception-display-action loop.
*   **Evaluation:**
    *   **Scenarios:** Single-robot city-to-city traversal and dual-robot cooperative coverage on a scaled UK map (4m x 3m).
    *   **Localization:** PhaseSpace-based localization for repeatable multi-robot trials.
    *   **Performance:** Demonstrated stable in-motion levitation and consistent, location-dependent height rendering.
    *   **Success Rates:** 90% for single-robot regime, 80% for dual-robot regime over 10 trials each.
    *   **Efficiency:** Low collision counts observed.
*   **Contribution:** Acoustophoretic levitation is proposed as a simple, glanceable, robot-mediated communication cue for embodied human-robot interaction in spatial analytics.