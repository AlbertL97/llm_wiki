# Post-Training Zero-Shot TTS for Fine-Grained Emotion and Duration Control via Natural Language

**Authors:** [Not specified in the provided text]
**Date:** 2026-09-12

## Abstract
Audiobook narration, conversational agents, and audiovisual dubbing require speech that conveys changing emotions and adapts its pacing within a single utterance. But most existing TTS systems typically rely on utterance-level style conditioning, making such fine-grained control difficult to achieve. In light of this, and inspired by the success of post-training in large language models, we propose a unified post-training framework that equips pretrained text-to-speech models with natural-language control over segment-level emotion and duration. Supervised fine-tuning establishes instruction-conditioned speech generation, while reinforcement learning with group relative policy optimization refines control accuracy using emotion and duration rewards alongside content and speaker preservation objectives. By reusing the pretrained architecture, our approach avoids additional inference-time control modules. Experiments demonstrate significantly improved fine-grained controllability while maintaining speech intelligibility and speaker identity, highlighting post-training as a practical approach to extending existing speech synthesis models.

## Key Findings and Contributions

*   **Problem:** Existing Text-to-Speech (TTS) systems struggle with fine-grained control over emotion and speech duration within a single utterance, limiting applications requiring nuanced vocal expression.
*   **Proposed Solution:** A novel post-training framework for TTS models that allows for natural language control over segment-level emotion and duration.
*   **Methodology:**
    *   Leverages post-training techniques, similar to large language models.
    *   Employs supervised fine-tuning to achieve instruction-conditioned speech generation.
    *   Utilizes reinforcement learning with group relative policy optimization for refinement, incorporating rewards for emotion and duration alongside content and speaker preservation.
*   **Benefits:**
    *   Enables fine-grained control over emotion and duration via natural language.
    *   Reuses pretrained TTS architectures, avoiding complex inference-time modules.
    *   Maintains speech intelligibility and speaker identity.
*   **Significance:** Demonstrates the practical utility of post-training for enhancing existing TTS models, making them more adaptable for expressive speech synthesis in various applications.
