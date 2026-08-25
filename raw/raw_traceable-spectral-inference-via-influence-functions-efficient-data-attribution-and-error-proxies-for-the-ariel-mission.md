# Traceable Spectral Inference via Influence Functions: Efficient Data Attribution and Error Proxies for the Ariel Mission

**Authors:** (Not provided in the prompt)
**Date:** 2026-08-23 (derived from URL)

## Summary

This work addresses the critical need for interpretability in machine learning models deployed in scientific space missions, particularly for ESA's Ariel mission where ground truth is inaccessible during operations and physical plausibility assessments are paramount. The research moves beyond traditional feature attribution to investigate training data attribution using influence functions.

### Key Contributions:

1.  **Reformulation of Influence:** Influence is redefined in terms of prediction rather than the loss function, allowing for label-free deployment in operational settings.
2.  **Efficient Computation:** Leveraging the closed-form ridge solution of an Extreme Learning Machine (ELM), the paper enables efficient computation of infinitesimal prediction influence.
3.  **Error Proxy Derivation:** An influence-based conservative error proxy is developed by propagating training residuals through influence sensitivities. This proxy is shown to correlate strongly with spectral errors (scale and shape-based) in simulations.

### Findings:

*   The proposed influence function method allows for the identification of the most influential training samples.
*   It can approximate the most harmful training samples.
*   The approach offers an operational framework for scientific machine learning by providing mechanisms for data attribution and error estimation.

## Evaluation

The proposed proxy correlates strongly with scale and shape-based spectral errors when evaluated against simulated spectra.