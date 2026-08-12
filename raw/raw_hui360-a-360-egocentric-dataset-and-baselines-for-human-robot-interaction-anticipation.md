# HUI360: A 360° Egocentric Dataset and Baselines for Human-Robot Interaction Anticipation

**Authors:** Not specified in the provided text.
**Date:** arXiv version 1 released 2026-08-11.

## Summary Details:

As robots increasingly operate in human-populated environments, anticipating human intentions is essential for enabling proactive and socially aware behavior. Automatic anticipation of human-robot interactions is thus emerging as a crucial perception challenge for embodied agents.

To this end, the paper introduces **HUI360**, described as the largest dataset for human-robot interaction anticipation in the wild, along with its set of baselines.

**Dataset Characteristics:**
*   Collected from a mobile robot, in the wild, over multiple days within a 3-month period, and in several environments.
*   Captures natural, spontaneous behaviors from both passersby and users.
*   Encompasses a diverse range of individuals, enabling evaluation and improvement of generalization capabilities of interaction anticipation models.

**Annotation Pipeline and Tools:**
*   A pipeline and shared code for automatic interaction annotation in arbitrary 360-degree equirectangular videos.
*   Interfaces for manual refinement.
*   Release of the HUI360 open set with 1 million pre-processed annotations.
*   Annotations include detailed 2D poses, facial keypoints, and segmentation masks.
*   Obtained using state-of-the-art computer vision methods and manually curated for high-quality tracking and interaction annotation.
*   Raw panoptic 360-degree images are also available on demand (for research purposes, compliant with GDPR).

**Baselines and Benchmarking:**
*   Establishment of benchmark baselines for interaction anticipation.
*   Includes the first cross-dataset evaluations for this task.
*   Release of 6 million annotations for another existing in-the-wild outdoor dataset (SSUP-HRI).

**Availability:** Dataset and code can be found at https://hucebot.github.io/hui360.
