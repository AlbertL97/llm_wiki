# Physics-Informed Diffusion for Biomechanically Plausible 3D Sign Language Generation

**Authors:** Anonymous

**Date:** 2026-07-19

**Abstract:** Sign language production, which generates continuous 3D skeletal motion from spoken language input, must simultaneously satisfy two constraints: semantic fidelity, so that a deaf viewer can recognize the intended sequence of glosses, and biomechanical plausibility, so that the generated skeleton respects anatomical constraints. Existing approaches optimize semantic reconstruction through coordinate-based objectives that treat the skeleton as an unstructured vector, thus allowing for bone length drift, joint angle violations, and temporarily locked fingers. We introduce PIDiffSign, a physics-informed diffusion model for gloss-to-pose translation that incorporates anatomical constraints into both the architecture and training objective. The model uses a Transformer encoder-decoder, where the decoder is conditioned on the diffusion time step through adaptive zero-initialized layer normalization and cross-attends to gloss representations. A differentiable geometry module enforces bone length consistency and biologically valid joint angles throughout generation. Training combines anthropomorphic, kinematic, angular, and finger-joint constraints with a contrastive gloss-pose alignment loss and classifier-free guidance for semantically conditioned sampling. Experiments on the PHOENIX14T and CSL-Daily benchmarks show consistent improvements over a strong diffusion baseline in pose accuracy, joint-angle correctness, distributional realism, and back-translation quality. These results demonstrate that physics-informed diffusion improves both motion realism and semantic fidelity for sign language generation.

## Key Findings:

*   **Problem:** Existing sign language generation models often produce biomechanically implausible motions due to treating skeletal data as unstructured vectors, leading to issues like bone length drift and incorrect joint angles.
*   **Solution:** The paper proposes PIDiffSign, a physics-informed diffusion model that integrates anatomical constraints directly into the model's architecture and training process.
*   **Methodology:** PIDiffSign employs a Transformer encoder-decoder architecture with a differentiable geometry module to enforce bone length consistency and valid joint angles. Training incorporates various biomechanical constraints and a contrastive gloss-pose alignment loss.
*   **Results:** Experiments demonstrate that PIDiffSign achieves superior performance compared to baseline diffusion models in terms of pose accuracy, joint-angle correctness, distributional realism, and overall motion quality for sign language generation.
*   **Impact:** This work significantly advances the realism and semantic fidelity of AI-generated sign language, with potential implications for accessibility tools and human-AI communication in diverse modalities.
