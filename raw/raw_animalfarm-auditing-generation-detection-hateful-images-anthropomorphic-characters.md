# AnimalFarm: Auditing the Generation and Detection of Hateful Images Featuring Anthropomorphic Characters

**Authors:** [Authors not specified in the provided text]

**Date:** 2026-11-18 (v1)

**Abstract:** Anthropomorphic non-human characters have long been used to convey hateful messages targeting human groups, from Nazi-era propaganda to recent AI-generated imagery on social media. However, the safety risks posed by such imagery remain largely unexplored. We thus conduct the first systematic study of hateful image generation and detection involving anthropomorphic non-human characters. We construct a benchmark from conservatively screened source scenes, covering five character types and three image generation tasks: text-to-image generation, image editing, and conversational image generation. Across 14,250 scheduled queries, image generation systems produce images for 92.1% of queries, of which 95.9% contain hateful content. We further collect 4,370 hateful images and evaluate five popular hateful-content detectors. Even the strongest detector, GPT-5.5, identifies only 73.9% of hateful images, while most detect fewer than 58%. Our analysis reveals that existing detectors often misclassify hateful images as benign when their main subjects are non-human characters. We explore two effective mitigation approaches: a training-free pipeline that maps non-human characters back to human representations before classification and a detector fine-tuned for this type of hateful content. These approaches achieve F1 scores of 0.962 and 0.979, respectively. Our findings expose significant safety gaps in both image generation and hateful-content detection.

**Key Findings:**

*   Anthropomorphic non-human characters are frequently used in AI-generated hateful imagery.
*   Existing hateful-content detectors exhibit significant limitations in identifying such imagery, often misclassifying them when non-human characters are the primary subjects.
*   Image generation systems produce a high percentage of hateful content when prompted with anthropomorphic characters.
*   Two mitigation approaches, a mapping pipeline and a fine-tuned detector, demonstrate high effectiveness (F1 scores of 0.962 and 0.979) in detecting hateful images featuring anthropomorphic characters.
*   The study highlights critical safety gaps in both AI image generation and content detection systems.

**Disclaimer:** This paper contains hateful text and imagery.