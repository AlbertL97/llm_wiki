# Enhanced MRI brain tumor detection using deep learning in conjunction with explainable AI SHAP based diverse and multi feature analysis

**Last updated:** 2026-11-08

## Overview

This research focuses on improving the accuracy and efficiency of brain tumor detection using Magnetic Resonance Imaging (MRI). The study leverages advanced deep learning techniques, specifically Convolutional Neural Networks (CNNs), and integrates explainable AI (SHAP) to analyze and interpret the results of multi-feature analysis. The goal is to overcome the limitations of conventional diagnostic methods by offering a more precise, non-invasive, and high-resolution approach.

## Key Findings

*   **Advanced Imaging and Feature Extraction:** The study highlights the superiority of MRI over traditional methods due to its high resolution and non-invasive nature. It investigates the synergy of multiple feature representation schemes, including Local Binary Patterns (LBP), Gabor filters, Discrete Wavelet Transform (DWT), Fast Fourier Transform (FFT), and Gray-Level Run Length Matrix (GLRLM).
*   **Machine Learning Performance:** Several learning algorithms were evaluated, including k-Nearest Neighbor (KNN), Random Forest (RF), Support Vector Classifier (SVC), Probabilistic Neural Network (PNN), and CNN. Empirical results indicate that the LBP feature space, when used with SVC and CNN, yields high specificity and accuracy.
*   **Explainable AI (SHAP):** SHAP analysis was utilized to identify the most influential features in the classification process, providing insights into the decision-making of the AI models.
*   **Accuracy and Generalization:** On a smaller dataset, SVC achieved 98.06% accuracy, closely followed by CNN at 97.8%. When tested on a larger benchmark dataset, CNN demonstrated superior performance with 98.9% accuracy, underscoring its generalization power and effectiveness in automated, high-precision tumor diagnosis.
*   **Statistical Validation:** Chi-square and p-value tests confirmed the significant impact of the LBP feature space for brain tumor identification.

## Implications

While the primary application is in medical diagnosis, the use of explainable AI (SHAP) in this context contributes to the broader understanding of how complex AI models arrive at their conclusions. This transparency is a critical factor in building trust and facilitating human-AI interaction, particularly in high-stakes domains like healthcare. The ability to understand which features the AI prioritizes can inform users and clinicians about the AI's reasoning, potentially enhancing collaboration and acceptance.

## Sources

*   Rahman, A., & Rizwan, A. S. M. (2026). *Enhanced MRI brain tumor detection using deep learning in conjunction with explainable AI SHAP based diverse and multi feature analysis*. arXiv preprint arXiv:2611.07843. [http://arxiv.org/abs/2611.07843v1](http://arxiv.org/abs/2611.07843v1)

## Related pages

*   [[explainability]]
*   [[human-ai-interaction]]
*   [[medical-ai]]
*   [[trust]]
