# Sub-Millisecond Reflexes for Continuous Physical Human-Robot Interaction

**Last updated:** 2026-10-16

## Introduction

Continuous physical human-robot interaction (pHRI) demands robots that can rapidly adapt their control strategies without disrupting ongoing tasks. Current control architectures, particularly those based on ROS 2, often employ "stop-to-switch" mechanisms that introduce significant delays, hindering seamless adaptation and potentially compromising safety during critical events.

## Key Findings

*   **Novel Reflex Engine:** The paper introduces an open-source reflex engine designed for sub-millisecond responsiveness in pHRI.
*   **Enhanced Control Architecture:** This engine is built upon an enhanced ROS 2-compatible multimode controller, facilitating deterministic and rapid switching between different control modalities.
*   **Safety Mechanisms:** The system integrates reflex behaviors to proactively mitigate potential hazards and violations of kinematic limits, thereby improving the safety of human-robot collaboration.
*   **Performance Improvements:** Experimental validation on a Franka Robotics manipulator demonstrated switching delays under 0.1 ms, representing a substantial improvement (over four orders of magnitude) compared to traditional ros2_control implementations. This rapid response capability ensures continuous operation even during safety-critical situations.
*   **Task Efficiency:** In a multi-stage manipulation task, the proposed framework led to a 3.5% reduction in execution time and a threefold decrease in peak trajectory jerk, indicating enhanced operational efficiency and smoother robot movement.
*   **Technical Innovation:** The core innovation lies in eliminating runtime middleware overhead by implementing controller transitions as lock-free pointer operations, achieving reflex-level responsiveness within an open-source robotics ecosystem.

## Sources

*   Sub-Millisecond Reflexes for Continuous Physical Human-Robot Interaction (http://arxiv.org/abs/2610.21913v1)

## Related pages

*   [[human-robot-interaction]]
*   [[trust]]
*   [[human-ai-interaction]]