# A Unified Fractal Impedance Control Framework

**Authors:** [Not specified in description]
**Date:** 2026-11-07 (based on URL v1 date)

## Abstract
Physical human--robot interaction requires controllers capable of maintaining intrinsically bounded interactions with the environment. The Fractal Impedance Controller (FIC) has been proven to guarantee these safety characteristics by design. This paper introduces the robotic implementation and experimental validation of its most advanced architecture: the Harmonic-Passive Motion Paradigm (H-PMP), an evolution of the Passive Motion Paradigm designed to mimic human-like interaction.

## Key Findings and Contributions

*   **Introduction of Harmonic-Passive Motion Paradigm (H-PMP):** An advanced architecture of the Fractal Impedance Controller (FIC).
*   **Mimics Human-like Interaction:** H-PMP is designed to emulate human-like interaction characteristics in physical human-robot scenarios.
*   **Robotic Implementation and Experimental Validation:** The paper presents the practical deployment and testing of the H-PMP on a Kinova Gen3 arm.
*   **Unified Framework for FIC Deployment:** A generalized framework for deploying FIC is presented, supported by an open-source software suite using ROS2, MuJoCo, and physical hardware integrations.
*   **Experimental Comparison:** Three experiments (trajectory tracking, wall press with sudden loss of contact, and learning-by-demonstration) were conducted to compare H-PMP against earlier FIC architectures.
*   **Seamless Trade-off between Admittance and Impedance:** Results demonstrate that H-PMP achieves a smooth transition between admittance and impedance behaviors.
*   **Ideal for Unstructured Environments:** This seamless transition capability makes H-PMP suitable for deployment in unstructured environments where robots need to adapt interaction modes dynamically.
*   **No Computational Overhead for Mode Transitions:** A significant advantage highlighted is the robot's ability to switch interaction modes without increased computational demands.

## Experiments

1.  **Trajectory Tracking:** Assessed the controller's ability to follow predefined paths.
2.  **Wall Press with Sudden Loss of Contact:** Evaluated the controller's response to unexpected changes in contact with the environment.
3.  **Learning-by-Demonstration:** Tested the controller's capability to learn from human demonstrations.

## Software and Hardware Used

*   **Software:** ROS2, MuJoCo
*   **Hardware:** Kinova Gen3 arm
