Authors: Not specified
Date: 2026-07-26 (v1)

Title: Image Quality Dependent Degradation for AI Systems

Description:
Perception is one of the primary applications where neural networks outperform conventional algorithms. One example is AI systems for automated driving, which can detect pedestrians based on image data and avoid them accordingly. A substantial challenge with these AI systems is that their output depends heavily on the quality of the input images. For example, if an image is of inferior quality due to heavy contamination, such as noise or darkness, accurate predictions are hardly feasible. Additionally, various types of errors can occur, each with varying relevance to the trustworthiness of the underlying AI system. In particular, it may be more critical not to detect an existing person than to detect a person where there is none. Therefore, we want to show that we can still avoid the most critical errors in situations of inferior image quality.

Key Contributions:
- Proposes a fail-degraded system for AI systems that lowers the network's confidence threshold based on estimated image quality.
- Enables AI to detect objects more cautiously in uncertain situations, thereby avoiding critical errors.
- Introduces a novel method for estimating image quality using normalizing flows by comparing incoming images to training data.
- Conducts experiments applying the method to state-of-the-art object detection.
- Presents a design strategy for AI-based systems in automated driving that can deal with poor-quality input data without resorting to fallback solutions.

Impact:
- Enhances trust in AI-based systems.
- Leads to increased provision of the AI component.

URL: http://arxiv.org/abs/2607.25736v1