# Image Quality Dependent Degradation for AI Systems

## Summary
This paper addresses the challenge of AI system reliability when faced with degraded input data, particularly in applications like automated driving. The authors propose a "fail-degraded" system that dynamically adjusts the AI's confidence threshold based on the estimated quality of incoming images. By lowering this threshold in situations with poor image quality (e.g., noise, darkness), the AI can operate more cautiously, prioritizing the avoidance of critical errors, such as failing to detect a pedestrian. The system utilizes a novel method involving normalizing flows to estimate image quality by comparing it to the training dataset. The strategy aims to maintain functionality and enhance user trust in AI systems even under adverse input conditions, without requiring complete fallback mechanisms.

## Key Findings

*   **Image Quality Impacts AI Performance:** The accuracy and reliability of AI systems, especially in perception tasks, are significantly influenced by the quality of input images.
*   **Error Criticality:** Different types of AI errors have varying degrees of criticality (e.g., missing a pedestrian is more critical than falsely detecting one).
*   **Fail-Degraded System:** A "fail-degraded" approach is introduced, where the AI's confidence threshold is lowered based on estimated image quality.
*   **Cautious Detection:** This approach enables more cautious object detection in uncertain or low-quality image scenarios, reducing the likelihood of critical failures.
*   **Image Quality Estimation:** A new method using normalizing flows is proposed to estimate image quality by comparing input images against the distribution of training data.
*   **Enhanced Trust:** By managing performance under degraded conditions, the system aims to build greater trust in AI applications.
*   **No Fallback Needed:** The proposed strategy allows AI systems to handle poor data without resorting to complete fallback solutions.

## Sources

*   Image Quality Dependent Degradation for AI Systems (arXiv:2607.25736v1)

## Last updated

2026-07-29

## Related pages

*   [[human-ai-interaction]]
*   [[trust]]
*   [[human-robot-interaction]]