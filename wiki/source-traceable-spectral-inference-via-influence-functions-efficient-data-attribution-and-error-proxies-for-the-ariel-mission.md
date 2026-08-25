# Traceable Spectral Inference via Influence Functions: Efficient Data Attribution and Error Proxies for the Ariel Mission

## Overview

This paper addresses the critical need for **explainability** in machine learning models used in scientific space missions, such as ESA's Ariel mission. Direct assessment of ground truth is often impossible during operations, making interpretability crucial for evaluating physical plausibility and reliability. The research focuses on **data attribution**—understanding which training data points most influence a model's prediction—as a key aspect of explainability.

## Key Findings & Contributions

*   **Data Attribution via Influence Functions:** The study introduces a novel method for attributing model predictions to specific training data points using influence functions. This moves beyond typical feature attribution methods.
*   **Prediction-Based Influence:** Influence is reformulated from a loss-based perspective to a prediction-based one. This is a significant advancement as it enables the method to be deployed without requiring ground truth labels during operation.
*   **Efficient Influence Computation:** By employing the closed-form ridge solution of an Extreme Learning Machine (ELM), the paper achieves efficient computation of infinitesimal prediction influence. This makes the method practical for real-world applications.
*   **Influence-Based Error Proxy:** A conservative error proxy is derived by propagating training residuals through the computed influence sensitivities. This proxy is designed to estimate the model's error and was found to correlate strongly with actual spectral errors (both scale and shape) in simulations.
*   **Identification of Influential/Harmful Samples:** The influence functions enable the identification of training samples that have the most significant impact on predictions, including approximation of samples that might be detrimental to performance.

## Implications

The proposed framework offers a powerful tool for scientific machine learning applications. It enhances **trust** in AI models by providing traceable explanations rooted in the training data and offers a mechanism for robust error estimation, which is vital in high-stakes environments like space exploration.

## Sources

*   Traceable Spectral Inference via Influence Functions: Efficient Data Attribution and Error Proxies for the Ariel Mission. http://arxiv.org/abs/2608.23458v1

## Last updated

2026-08-25

## Related pages

*   [[explainability]]
*   [[trust]]