# Will AI mess my RTL? A snapshot-based approach to verifying AI-written RTL

**Authors:** Not specified in the provided text.
**Date:** 2026-11-10 (based on the provided URL structure and requested last updated date).

## Summary

With the increasing use of AI, particularly Large Language Models (LLMs), in Register-Transfer Level (RTL) hardware development, ensuring the correctness and reliability of AI-generated or modified RTL code is crucial for fostering trust in these AI-driven workflows. The paper introduces SVApshot, a fully automated framework designed to address this challenge. SVApshot employs LLMs to generate and systematically correct SystemVerilog Assertions (SVA) for RTL modules, aiming to eliminate human intervention in the generation loop. 

A core innovation of SVApshot is its novel snapshot methodology. This approach captures the current functionality of an RTL design as a comprehensive set of formal assertions, effectively creating a regression suite. This suite serves to validate any subsequent changes to the design, regardless of whether those changes are made by humans or by AI.

The framework incorporates several key features:

*   **Automated Duplicate Detection:** Identifies and removes redundant assertions.
*   **Assertion Set Expansion:** Broadens the scope and coverage of the assertion set.
*   **Iterative Repair:** Utilizes LLM-guided debugging, informed by formal verification feedback, to fix failing assertions.

Experimental evaluations across diverse RTL modules demonstrate SVApshot's high coverage capabilities, even for complex modules. The framework successfully detected both manually injected bugs and bugs introduced by AI. Furthermore, SVApshot paves the way for the automatic generation of formal testbenches, enabling more nuanced performance benchmarking of LLMs in hardware design beyond simple pass/fail metrics, moving towards assertion-based scoring.

This work directly relates to **human-AI interaction** by focusing on the verification and trustworthiness of AI-generated technical artifacts, which is a critical component for effective collaboration between humans and AI systems. The emphasis on preserving functionality and building trust is particularly relevant. 
