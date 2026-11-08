# Enhanced MRI brain tumor detection using deep learning in conjunction with explainable AI SHAP based diverse and multi feature analysis

**Authors:** Asif Rahman, A. S. M. Rizwan
**Date:** 2026-11-08
**URL:** http://arxiv.org/abs/2611.07843v1
**Code:** https://github.com/asifrahman557/BrainTumorDetection

## Summary

Recent innovations in medical imaging have markedly improved brain tumor identification, surpassing conventional diagnostic approaches that suffer from low resolution, radiation exposure, and limited contrast. Magnetic Resonance Imaging (MRI) is pivotal in precise and accurate tumor characterization owing to its high-resolution, non-invasive nature. This study investigates the synergy among multiple feature representation schemes such as local Binary Patterns (LBP), Gabor filters, Discrete Wavelet Transform, Fast Fourier Transform, Convolutional Neural Networks (CNN), and Gray-Level Run Length Matrix alongside five learning algorithms namely: k-nearest Neighbor, Random Forest, Support Vector Classifier (SVC), and probabilistic neural network (PNN), and CNN.

Empirical findings indicate that LBP in conjunction with SVC and CNN obtained high specificity and accuracy, rendering it a promising method for MRI-based tumor diagnosis. Further to investigate the contribution of LBP, Statistical analysis chi-square and p-value tests are used to confirm the significant impact of LBP feature space for identification of brain Tumor. In addition, The SHAP analysis was used to identify the most important features in classification. In a small dataset, CNN obtained 97.8% accuracy while SVC yielded 98.06% accuracy. In subsequent analysis, a large benchmark dataset is also utilized to evaluate the performance of learning algorithms in order to investigate the generalization power of the proposed model. CNN achieves the highest accuracy of 98.9%, followed by SVC at 96.7%. These results highlight CNN's effectiveness in automated, high-precision tumor diagnosis.

## Key Findings

*   MRI is a crucial non-invasive imaging technique for accurate brain tumor characterization.
*   The study explored various feature extraction methods (LBP, Gabor filters, DWT, FFT, GLRLM) and machine learning algorithms (KNN, RF, SVC, PNN, CNN).
*   LBP combined with SVC and CNN showed high specificity and accuracy for MRI-based tumor diagnosis.
*   SHAP analysis was employed to identify the most important features contributing to classification.
*   CNN achieved the highest accuracy (98.9%) on a large benchmark dataset, demonstrating its effectiveness in automated tumor diagnosis.
