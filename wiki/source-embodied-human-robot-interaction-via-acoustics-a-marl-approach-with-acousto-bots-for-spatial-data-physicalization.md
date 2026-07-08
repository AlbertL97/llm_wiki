# Embodied Human-Robot Interaction via Acoustics: A MARL Approach with AcoustoBots for Spatial Data Physicalization

## Introduction
This paper introduces AcoustoBots, a novel system designed to enhance data physicalization and human-robot interaction by enabling robots to dynamically represent spatial data through acoustic levitation. Traditional methods are often static and lack the embodied, real-time qualities needed for conveying complex spatial dynamics.

## System Description
AcoustoBots are built upon mobile robots (TurtleBot3) fitted with ultrasonic phased arrays. These arrays are capable of levitating small particles, with the vertical position of each particle serving as a direct representation of a local scalar value, such as population density or noise levels.

## Technical Approach
*   **Acoustic Levitation:** Utilizes upward-facing 8x8 ultrasonic phased arrays to levitate particles at heights ranging from 1 to 10 cm.
*   **Data Encoding:** The height of the levitated particle physically encodes real-world scalar data.
*   **Navigation and Control:** A Multi-Agent Reinforcement Learning (MARL) algorithm, specifically MADDPG, is employed for intelligent, collision-aware navigation. This system features centralized training and decentralized execution.
*   **Acoustic Stability:** A specialized Gerchberg-Saxton-Phased Array of Transducers (GS-PAT) controller maintains the stability of the acoustic traps and adjusts particle height dynamically during robot movement.
*   **Embodied Interaction:** The system creates a closed loop involving perception, data display (via levitation), and robot action, facilitating embodied interaction.

## Evaluation and Results
The system was evaluated in two primary scenarios: single-robot traversal and dual-robot cooperative coverage on a scaled map. PhaseSpace-based localization was used for precise tracking in multi-robot trials.

*   **Performance Metrics:** The AcoustoBots demonstrated stable levitation even while in motion and consistent, data-dependent height rendering.
*   **Task Success Rates:** Achieved success rates of 90% for single-robot tasks and 80% for dual-robot tasks over multiple trials.
*   **Collision Avoidance:** The MARL-based navigation policy resulted in low collision counts.

## Conclusion and Impact
The findings suggest that acoustophoretic levitation offers a simple, glanceable, and effective method for robot-mediated communication of spatial data. This approach holds potential for advancing embodied human-robot interaction in the field of spatial analytics.

## Sources
*   Embodied Human-Robot Interaction via Acoustics: A MARL Approach with AcoustoBots for Spatial Data Physicalization (arXiv:2607.06563v1)

## Last updated
2026-07-08

## Related pages
*   [[human-robot-interaction]]
*   [[human-ai-interaction]]
*   [[measurement-tools]]