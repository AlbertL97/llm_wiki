## Joint-decoupled iterative CBCT reconstruction with hybrid scatter estimation and voxel-adaptive beam hardening correction

**Authors:** Not explicitly mentioned in the provided text.

**Date:** 2026-07-20 (based on the provided URL format).

**Summary:**

Cone-beam computed tomography (CBCT) is plagued by scatter and beam hardening artifacts, which are intertwined and degrade image quality. This paper introduces a physics-driven iterative reconstruction framework that addresses these issues by decoupling them through an optimization loop. The approach utilizes a hybrid scatter estimation strategy, combining analytical derivation for the first-order component and a convolution module for the multiple scattering component. For beam-hardening correction, a voxel-adaptive mechanism refines the relative electron density (RED) directly by solving linearized, scatter-corrected polychromatic equations without manual parameter tuning.

**Key Findings:**

*   **Problem Addressed:** CBCT reconstruction is severely compromised by coupled scatter and beam hardening artifacts.
*   **Proposed Solution:** A joint-decoupled iterative framework rooted in the polychromatic Polyquant attenuation model.
*   **Scatter Estimation:** Hybrid strategy with analytical first-order scattering and object-adaptive convolution for multiple scattering.
*   **Beam Hardening Correction:** Voxel-adaptive update mechanism for direct RED refinement.
*   **Validation:** Tested on biomedical phantoms using Monte Carlo simulations and physical experiments.
*   **Performance:** Demonstrated significant improvement over state-of-the-art techniques, reducing mean relative error from 11.96% to 1.27% (anthropomorphic head phantom) and 12.55% to 5.46% (Yin-Yang phantom).

**Significance:** The proposed method offers a robust and accurate solution for high-precision CBCT imaging, with direct implications for medical imaging applications.