---
title: "AAAI.2026 - Humans and AI | Cool Papers - Immersive Paper Discovery"
source: "https://papers.cool/venue/AAAI.2026?group=Humans%20and%20AI"
author:
published:
created: 2026-06-07
description: "The list of accepted papers for AAAI.2026 - Humans and AI, including titles, authors, and abstracts, with support for paper interpretation based on Kimi AI."
tags:
  - "clippings"
---
## AAAI.2026 - Humans and AI

| Total: 87

## #1 Align When They Want, Complement When They Need! Human-Centered Ensembles for Adaptive Human-AI Collaboration \[PDF22\] \[Copy\] \[Kimi8\] \[REL\]

**Authors**: , ,

In human-AI decision making, designing AI that complements human expertise has been a natural strategy to enhance human-AI collaboration, yet it often comes at the cost of decreased AI performance in areas of human strengths. This can inadvertently erode human trust and cause them to ignore AI advice precisely when it is most needed. Conversely, an aligned AI fosters trust yet risks reinforcing suboptimal human behavior and lowering human-AI team performance. In this paper, we start by identifying this fundamental tension between performance-boosting (i.e., complementarity) and trust-building (i.e., alignment) as an inherent limitation of the traditional approach for training a single AI model to assist human decision making. To overcome this, we introduce a novel, human-centered adaptive AI ensemble that strategically toggles between two specialist AI models—the aligned model and the complementary model—based on contextual cues, using an elegantly simple yet provably near-optimal Rational Routing Shortcut mechanism. Comprehensive theoretical analyses elucidate why the adaptive AI ensemble is effective and when it yields maximum benefits. Moreover, experiments on both simulated and real-world data show that when humans are assisted by the adaptive AI ensemble in decision making, they can achieve significantly higher performance than when they are assisted by single AI models that are trained to either optimize for its independent performance or even the human-AI team performance.

**Subject**: [AAAI.2026 - Humans and AI](https://papers.cool/venue/AAAI.2026?group=Humans%20and%20AI)

---

## #2 Who Is Helping Whom? Analyzing Inter-Dependencies to Evaluate Cooperation in Human-AI Teaming \[PDF12\] \[Copy\] \[Kimi3\] \[REL\]

**Authors**: , , ,

State-of-the-art methods for Human-AI Teaming and Zero-shot Cooperation focus on task completion i.e. task rewards, as the sole evaluation metric while being agnostic to \`how' the two agents work with each other. Furthermore, subjective user studies only offer limited insight into the quality of cooperation existing within the team. Specifically, we are interested in understanding the cooperative behaviors arising within the team when trained agents are paired with humans - a problem that has been overlooked by the existing literature. To formally address this problem, we propose the concept of constructive interdependence - measuring how much agents rely on each other’s actions to achieve the shared goal - as a key metric for evaluating cooperation in human-agent teams. We measure interdependence in terms of action interactions in a STRIPS formalism, and define metrics that allow us to assess the degree of reliance between the agents' actions. We pair state-of-the-art agents with learned human models as well as human participants in a user study for the popular Overcooked domain, and evaluate the task reward and teaming performance for these human-agent teams. While prior work has claimed that state-of-the-art agents exhibit cooperative behavior based on their high task rewards, our results reveal that these agents often fail to induce cooperation, as evidenced by consistently low interdependence across teams. Furthermore, our analysis reveals that teaming performance is not necessarily correlated with task reward, highlighting that task reward alone cannot reliably measure cooperation arising in a human-agent team.

**Subject**: [AAAI.2026 - Humans and AI](https://papers.cool/venue/AAAI.2026?group=Humans%20and%20AI)

---

## #3 Explaining Decentralized Multi-Agent Reinforcement Learning Policies \[PDF9\] \[Copy\] \[Kimi2\] \[REL\]

**Authors**: , ,

Multi-Agent Reinforcement Learning (MARL) has gained significant interest in recent years, enabling sequential decision-making across multiple agents in various domains. However, most existing explanation methods focus on centralized MARL, failing to address the uncertainty and nondeterminism inherent in decentralized settings. We propose methods to generate policy summarizations that capture task ordering and agent cooperation in decentralized MARL policies, along with query-based explanations for “When,” “Why Not,” and “What” types of user queries about specific agent behaviors. We evaluate our approach across four MARL domains and two decentralized MARL algorithms, demonstrating its generalizability and computational efficiency. User studies show that our summarizations and explanations significantly improve user question-answering performance and enhance subjective ratings on metrics such as understanding and satisfaction.

**Subject**: [AAAI.2026 - Humans and AI](https://papers.cool/venue/AAAI.2026?group=Humans%20and%20AI)

---

## #4 EPIC: Explanation of Pretrained Image Classification Networks via Prototypes \[PDF4\] \[Copy\] \[Kimi2\] \[REL\]

**Authors**: , , , , , ,

Explainable AI (XAI) methods generally fall into two categories. Post-hoc approaches generate explanations for pre-trained models and are compatible with various neural network architectures. These methods often use feature importance visualizations, such as saliency maps, to indicate which input regions influenced the model’s prediction. Unfortunately, they typically offer a coarse understanding of the model’s decision-making process. In contrast, ante-hoc (inherently explainable) methods rely on specially designed model architectures trained from scratch. A notable subclass of these methods provides explanations through prototypes, representative patches extracted from the training data. However, prototype-based approaches require dedicated architectures, involve specialized training procedures, and perform well only on specific datasets. In this work, we propose EPIC (Explanation of Pretrained Image Classification), a novel approach that bridges the gap between these two paradigms. Like post-hoc methods, EPIC operates on pre-trained models without architectural modifications. Simultaneously, it delivers intuitive, prototype-based explanations inspired by ante-hoc techniques. To the best of our knowledge, EPIC is the first post-hoc method capable of fully replicating the core explanatory power of inherently interpretable models. We evaluate EPIC on benchmark datasets commonly used in prototype-based explanations, such as CUB-200-2011 and Stanford Cars, alongside large-scale datasets like ImageNet, typically employed by post-hoc methods. EPIC uses prototypes to explain model decisions, providing a flexible and easy-to-understand tool for creating clear, high-quality explanations.

**Subject**: [AAAI.2026 - Humans and AI](https://papers.cool/venue/AAAI.2026?group=Humans%20and%20AI)

---

## #5 HuiduRep: A Robust Self-Supervised Framework for Learning Neural Representations from Extracellular Recordings \[PDF4\] \[Copy\] \[Kimi1\] \[REL\]

**Authors**: , , ,

Extracellular recordings are transient voltage fluctuations in the vicinity of neurons, serving as a fundamental modality in neuroscience for decoding brain activity at single-neuron resolution. Spike sorting, the process of attributing each detected spike to its corresponding neuron, is a pivotal step in brain sensing pipelines. However, it remains challenging under low signal-to-noise ratio (SNR), electrode drift, and cross-session variability. In this paper, we propose HuiduRep, a robust self-supervised representation learning framework that extracts discriminative and generalizable features from extracellular recordings. By integrating contrastive learning with a denoising autoencoder, HuiduRep learns latent representations robust to noise and drift. With HuiduRep, we develop a spike sorting pipeline that clusters spike representations without ground truth labels. Experiments on hybrid and real-world datasets demonstrate that HuiduRep achieves strong robustness. Furthermore, the pipeline significantly outperforms state-of-the-art tools such as KiloSort4 and MountainSort5 on accuracy and precision on diverse datasets. These findings demonstrate the potential of self-supervised spike representation learning as a foundational tool for robust and generalizable processing of extracellular recordings.

**Subject**: [AAAI.2026 - Humans and AI](https://papers.cool/venue/AAAI.2026?group=Humans%20and%20AI)

---

## #6 Spontaneous Yet Predictable: Shapelet-Driven, Channel-Aware Intention Decoding from Multi-Region ECoG \[PDF3\] \[Copy\] \[Kimi\] \[REL\]

**Authors**: , , , , ,

Proactive intention decoding remains a critical yet underexplored challenge in brain–machine interfaces (BMIs), especially under naturalistic, self-initiated behavior. Existing systems rely on reactive decoding of motor cortex signals, resulting in substantial latency. To address this, we leverage the common marmoset’s spontaneous vocalizations and develop a high-resolution, dual-region ECoG recording paradigm targeting the prefrontal and auditory cortices and a neural decoding framework that integrates shapelet-based temporal encoding, position-aware attention, frequency-aware channel masking, contrastive clustering and a minimum error entropy-based robust loss. Our approach achieves 91.9% accuracy up to 200 ms before vocal onset—substantially outperforming 13 competitive baselines. Our model also uncovers a functional decoupling between auditory and prefrontal regions. Furthermore, joint modeling in time and frequency domains reveals novel preparatory neural signatures preceding volitional vocal output. Together, our findings bridge the gap between foundational neuroscience and applied BMI engineering, and establish a generalizable framework for intention decoding from ecologically valid, asynchronous behaviors.

**Subject**: [AAAI.2026 - Humans and AI](https://papers.cool/venue/AAAI.2026?group=Humans%20and%20AI)

---

## #7 Counterfactual eXplainable AI (XAI) Method for Deep Learning-Based Multivariate Time Series Classification \[PDF1\] \[Copy\] \[Kimi\] \[REL\]

**Authors**: , , ,

Recent advances in deep learning have improved multivariate time series (MTS) classification and regression by capturing complex patterns, but their lack of transparency hinders decision-making. Explainable AI (XAI) methods offer partial insights, yet often fall short of conveying the full decision space. Counterfactual Explanations (CE) provide a promising alternative, but current approaches typically prioritize either accuracy, proximity or sparsity -- rarely all -- limiting their practical value. To address this, we propose CONFETTI, a novel multi-objective CE method for MTS. CONFETTI identifies key MTS subsequences, locates a counterfactual target, and optimally modifies the time series to balance prediction confidence, proximity and sparsity. This method provides actionable insights with minimal changes, improving interpretability, and decision support. CONFETTI is evaluated on seven MTS datasets from the UEA archive, demonstrating its effectiveness in various domains. CONFETTI consistently outperforms state-of-the-art CE methods in its optimization objectives, and in six other metrics from the literature, achieving ≥ 10% higher confidence while improving sparsity in ≥ 40%.

**Subject**: [AAAI.2026 - Humans and AI](https://papers.cool/venue/AAAI.2026?group=Humans%20and%20AI)

---

## #8 Attribution Analysis-based Concept Alignment: A Human-in-the-loop Data Debugging Framework \[PDF5\] \[Copy\] \[Kimi1\] \[REL\]

**Authors**: , , , ,

Ensuring consistently high-quality training data is essential for developing reliable machine learning systems. Recent research demonstrates that incorporating human supervision into training set debugging effectively improves model performance, especially for text classification tasks. However, such methods often prove inapplicable to image understanding tasks, where inherently unstructured pixel data presents challenges in understanding and correcting biases. Inspired by human-AI alignment, we introduce AACA (Attribution Analysis-based Concept Alignment), a human-in-the-loop framework that mitigates bias in the training set by aligning the concepts used by humans and AI during the decision-making process. Specifically, AACA comprises two primary stages: interpretable data bug discovery and targeted data augmentation. During the data bug discovery stage, AACA identifies confounded and valid concepts to explain why prediction failure occurs and what concept the model should focus, using interpretability methods and human annotation. In the stage of targeted data augmentation, AACA adopts these concept-level attributions as clues to synthesize debugging instances via text-to-image generative model. The initial model is then retrained on the augmented set to correct prediction failures. Comparative experiments conducted on crowdsourced annotations and real-world datasets demonstrate that AACA can accurately identifies data bugs and effectively repairs prediction failures, thereby significantly improving prediction performance.

**Subject**: [AAAI.2026 - Humans and AI](https://papers.cool/venue/AAAI.2026?group=Humans%20and%20AI)

---

## #9 GazeInterpreter: Parsing Eye Gaze to Generate Eye-Body-Coordinated Narrations \[PDF2\] \[Copy\] \[Kimi\] \[REL\]

**Authors**: ,

Comprehensively interpreting human behavior is a core challenge in human-aware artificial intelligence. However, prior works typically focused on body behavior, neglecting the crucial role of eye gaze and its synergy with body motion. We present GazeInterpreter - a novel large language model-based (LLM-based) approach that parses eye gaze data to generate eye-body-coordinated narrations. Specifically, our method features 1) a symbolic gaze parser that translates raw gaze signals into symbolic gaze events; 2) a hierarchical structure that first uses an LLM to generate eye gaze narration at semantic level and then integrates gaze with body motion within the same observation window to produce integrated narration; and 3) a self-correcting loop that iteratively refines the modality match, temporal coherence, and completeness of the integrated narration. This hierarchical and iterative processing can effectively align physical values and semantic text in the temporal and spatial domains. We validated the effectiveness of our eye-body-coordinated narrations on the text-driven motion generation task in the large-scale Nymeria benchmark. Moreover, we report significant performance improvements for the sample downstream tasks of action anticipation and behavior summarization. Taken together, these results reveal the significant potential of parsing eye gaze to interpret human behavior and open up a new direction for human behavior understanding.

**Subject**: [AAAI.2026 - Humans and AI](https://papers.cool/venue/AAAI.2026?group=Humans%20and%20AI)

---

## #10 D-GARA: A Dynamic Benchmarking Framework for GUI Agent Robustness in Real-World Anomalies \[PDF3\] \[Copy\] \[Kimi\] \[REL\]

**Authors**: , , , , ,

Developing intelligent agents capable of operating a wide range of Graphical User Interfaces (GUIs) with human-level proficiency is a key milestone on the path toward Artificial General Intelligence. While most existing datasets and benchmarks for training and evaluating GUI agents are static and idealized, failing to reflect the complexity and unpredictability of real-world environments, particularly the presence of anomalies. To bridge this research gap, we propose D-GARA, a dynamic benchmarking framework, to evaluate Android GUI agent robustness in real-world anomalies. D-GARA introduces a diverse set of real-world anomalies that GUI agents commonly face in practice, including interruptions such as permission dialogs, battery warnings, and update prompts. Based on D-GARA framework, we construct and annotate a benchmark featuring commonly used Android applications with embedded anomalies to support broader community research. Comprehensive experiments and results demonstrate substantial performance degradation in state-of-the-art GUI agents when exposed to anomaly-rich environments, highlighting the need for robustness-aware learning. D-GARA is modular and extensible, supporting the seamless integration of new tasks, anomaly types, and interaction scenarios to meet specific evaluation goals.

**Subject**: [AAAI.2026 - Humans and AI](https://papers.cool/venue/AAAI.2026?group=Humans%20and%20AI)

---

## #11 EMOD: A Unified EEG Emotion Representation Framework Leveraging V-A Guided Contrastive Learning \[PDF4\] \[Copy\] \[Kimi\] \[REL\]

**Authors**: , , ,

Emotion recognition from EEG signals is essential for affective computing and has been widely explored using deep learning. While recent deep learning approaches have achieved strong performance on single EEG emotion datasets, their generalization across datasets remains limited due to the heterogeneity in annotation schemes and data formats. Existing models typically require dataset-specific architectures tailored to input structure and lack semantic alignment across diverse emotion labels. To address these challenges, we propose EMOD: A Unified EEG Emotion Representation Framework Leveraging Valence–Arousal (V–A) Guided Contrastive Learning. EMOD learns transferable and emotion-aware representations from heterogeneous datasets by bridging both semantic and structural gaps. Specifically, we project discrete and continuous emotion labels into a unified V–A space and formulate a soft-weighted supervised contrastive loss that encourages emotionally similar samples to cluster in the latent space. To accommodate variable EEG formats, EMOD employs a flexible backbone comprising a Triple-Domain Encoder followed by a Spatial-Temporal Transformer, enabling robust extraction and integration of temporal, spectral, and spatial features. We pretrain EMOD on 8 public EEG datasets and evaluate its performance on three benchmark datasets. Experimental results show that EMOD achieves the state-of-the-art performance, demonstrating strong adaptability and generalization across diverse EEG-based emotion recognition scenarios.

**Subject**: [AAAI.2026 - Humans and AI](https://papers.cool/venue/AAAI.2026?group=Humans%20and%20AI)

---

## #12 Intention-Guided Cognitive Reasoning for Egocentric Long-Term Action Anticipation \[PDF1\] \[Copy\] \[Kimi\] \[REL\]

**Authors**: , , , , ,

Long-term action anticipation from egocentric video is critical for applications such as human-computer interaction and assistive technologies, where anticipating user intent enables proactive and context-aware AI assistance. However, existing approaches suffer from three key limitations: 1) underutilization of fine-grained visual cues from hand-object interactions, 2) neglect of semantic dependencies between verbs and nouns, and 3) lack of explicit cognitive reasoning, limiting generalization and long-term forecasting ability. To overcome these challenges, we propose INSIGHT, a unified two-stage framework for egocentric action anticipation. In the first stage, INSIGHT focuses on extracting semantically rich features from hand-object interaction regions and enhances action representations using a verb-noun co-occurrence matrix. In the second stage, it introduces a reinforcement learning-based module that simulates explicit cognitive reasoning through a structured process: visual perception (think) → intention inference (reason) → action anticipation (answer). Extensive experiments on Ego4D, EPIC-Kitchens-55, and EGTEA Gaze+ benchmarks show that INSIGHT achieves state-of-the-art performance, demonstrating its effectiveness and strong generalization capability.

**Subject**: [AAAI.2026 - Humans and AI](https://papers.cool/venue/AAAI.2026?group=Humans%20and%20AI)

---

## #13 Too Sure for Our Own Good: A User Study on AI Confidence and Human Reliance \[PDF2\] \[Copy\] \[Kimi\] \[REL\]

**Authors**: , , ,

Achieving appropriate human reliance on Artificial Intelligence (AI) systems remains a central challenge in Human-Computer Interaction. Confidence scores—indicators of an AI system’s certainty in its recommendations—have been proposed as a means to help users calibrate their trust and reliance on AI Decision Support Systems (DSS). However, limited research has explored how well-calibrated versus miscalibrated confidence scores affect human decision-making. We report a study examining the effects of confidence calibration on user reliance, decision accuracy, and perceived utility of an AI DSS. In a within-subjects experiment involving 184 participants solving logic puzzles, we found that well-calibrated confidence scores significantly improved decision accuracy (+20%, 95% CI: \[0.18, 0.23\]), whereas miscalibrated scores yielded minimal accuracy gains (+2%, 95% CI: \[-0.00, 0.04\]) and increased vulnerability to automation bias and conservatism bias. Participants were more likely to accept AI recommendations when high confidence was expressed, even when those recommendations were incorrect, resulting in errors. Conversely, miscalibrated and low-confidence recommendations increased conservatism bias, leading users to reject even accurate AI suggestions. Perceived utility of the AI system was higher when confidence levels were high (p < 0.001) and when confidence was well-calibrated (p = 0.002). These findings underscore the importance of designing AI systems with properly calibrated confidence cues to improve human-AI collaboration and mitigate reliance-related biases.

**Subject**: [AAAI.2026 - Humans and AI](https://papers.cool/venue/AAAI.2026?group=Humans%20and%20AI)

---

## #14 ParetoHqD: Fast Offline Multiobjective Alignment of Large Language Models Using Pareto High-Quality Data \[PDF2\] \[Copy\] \[Kimi\] \[REL\]

**Authors**: , , , ,

Aligning large language models with multiple human expectations and values is crucial for ensuring that they adequately serve a variety of user needs. To this end, offline multiobjective alignment algorithms such as the Rewards-in-Context algorithm have shown strong performance and efficiency. However, inappropriate preference representations and training with imbalanced reward scores limit the performance of such algorithms. In this work, we introduce ParetoHqD that addresses the above issues by representing human preferences as preference directions in the objective space and regarding data near the Pareto front as ''high-quality'' data. For each preference, ParetoHqD follows a two-stage supervised fine-tuning process, where each stage uses an individual Pareto high-quality training set that best matches its preference direction. The experimental results have demonstrated the superiority of ParetoHqD over five baselines on two multiobjective alignment tasks.

**Subject**: [AAAI.2026 - Humans and AI](https://papers.cool/venue/AAAI.2026?group=Humans%20and%20AI)

---

## #15 Cross-modal Prompting for Balanced Incomplete Multi-modal Emotion Recognition \[PDF8\] \[Copy\] \[Kimi3\] \[REL\]

**Authors**: , ,

Incomplete multi-modal emotion recognition (IMER) aims at understanding human intentions and sentiments by comprehensively exploring the partially-observed multi-source data. Although the multi-modal data is expected to provide more abundant information, the performance gap and modality under-optimization problem hinder effective multi-modal learning in practice, and are exacerbated in the confrontation of the missing data. To address this issue, we devise a novel Cross-modal Prompting (ComP) method, which emphasizes coherent information by enhancing modality-specific features and improves the overall recognition accuracy by boosting each modality's performance. Specifically, a progressive prompt generation module with a dynamic gradient modulator is proposed to produce concise and consistent modality semantic cues. Meanwhile, cross-modal knowledge propagation selectively amplifies the consistent information in modality features with the delivered prompts to enhance the discrimination of the modality-specific output. Additionally, a coordinator is employed to dynamically re-weight the modality outputs as a complement to the balance strategy to improve the model's efficacy. Extensive experiments on 4 datasets with 7 SOTA methods under different missing rates validate the effectiveness of our proposed method.

**Subject**: [AAAI.2026 - Humans and AI](https://papers.cool/venue/AAAI.2026?group=Humans%20and%20AI)

---

## #16 Can Humans Teach Machines to Code? \[PDF3\] \[Copy\] \[Kimi\] \[REL\]

**Authors**: , , ,

The goal of inductive program synthesis is for a machine to automatically generate a program from user-supplied examples. A key underlying assumption is that humans can provide sufficient examples to teach a concept to a machine. To evaluate the validity of this assumption, we conduct a study where human participants provide examples for six programming concepts, such as finding the maximum element of a list. We evaluate the generalisation performance of five program synthesis systems trained on input-output examples (i) from a human group, (ii) from a gold standard set, and (iii) randomly sampled. Our results suggest that human-provided examples are typically insufficient for a program synthesis system to learn an accurate program.

**Subject**: [AAAI.2026 - Humans and AI](https://papers.cool/venue/AAAI.2026?group=Humans%20and%20AI)

---

## #17 Alfa: Attentive Low-Rank Filter Adaptation for Structure-Aware Cross-Domain Personalized Gaze Estimation \[PDF2\] \[Copy\] \[Kimi\] \[REL\]

**Authors**: , ,

Pre-trained gaze models learn to identify useful patterns commonly found across users, but subtle user-specific variations (i.e., eyelid shape or facial structure) can degrade model performance. Test-time personalization (TTP) adapts pre-trained models to these user-specific domain shifts using only a few unlabeled samples. Efficient fine-tuning is critical in performing this domain adaptation: data and computation resources can be limited-especially for on-device customization. While popular parameter-efficient fine-tuning (PEFT) methods address adaptation costs by updating only a small set of weights, they may not be taking full advantage of structures encoded in pre-trained filters. To more effectively leverage existing structures learned during pre-training, we reframe personalization as a process to reweight existing features rather than learning entirely new ones. We present Attentive Low-Rank Filter Adaptation (Alfa) to adapt gaze models by reweighting semantic patterns in pre-trained filters. With Alfa, singular value decomposition (SVD) extracts dominant spatial components that capture eye and facial characteristics across users. Via an attention mechanism, we need only a few unlabeled samples to adjust and reweight pre-trained structures, selectively amplifying those relevant to a target user. Alfa achieves the lowest average gaze errors across four cross-dataset gaze benchmarks, outperforming existing TTP methods and low-rank adaptation (LoRA)-based variants. We also show that Alfa's attentive low-rank methods can be applied to applications beyond vision, such as diffusion-based language models.

**Subject**: [AAAI.2026 - Humans and AI](https://papers.cool/venue/AAAI.2026?group=Humans%20and%20AI)

---

## #18 Graph Neural Field with Spatial-Correlation Augmentation for HRTF Personalization \[PDF1\] \[Copy\] \[Kimi\] \[REL\]

**Authors**: , ,

To achieve immersive spatial audio rendering on VR/AR devices, high-quality Head-Related Transfer Functions (HRTFs) are essential. In general, HRTFs are subject-dependent and position-dependent, and their measurement is time-consuming and tedious. To address this challenge, we propose the Graph Neural Field with Spatial-Correlation Augmentation (GraphNF-SCA) for HRTF personalization, which can be used to generate individual HRTFs for unseen subjects. The GraphNF-SCA consists of three key components: an HRTF personalization (HRTF-P) module, an HRTF upsampling (HRTF-U) module, and a fine-tuning stage. In the HRTF-P module, we predict HRTFs of the target subject via the Graph Neural Network (GNN) with an encoder-decoder architecture, where the encoder extracts universal features and the decoder incorporates the target-relevant features and produces individualized HRTFs. The HRTF-U module employs another GNN to model spatial correlations across HRTFs. This module is fine-tuned using the output of the HRTF-P module, thereby enhancing the spatial consistency of the predicted HRTFs. Unlike existing methods that estimate individual HRTFs position-by-position without spatial correlation modeling, the GraphNF-SCA effectively leverages inherent spatial correlations across HRTFs to enhance the performance of HRTF personalization. Experimental results demonstrate that the GraphNF-SCA achieves state-of-the-art results.

**Subject**: [AAAI.2026 - Humans and AI](https://papers.cool/venue/AAAI.2026?group=Humans%20and%20AI)

---

## #19 SSL-CST: Cell Segmentation for Single-Cell Spatial Transcriptome Based on Self-Supervised Learning \[PDF2\] \[Copy\] \[Kimi\] \[REL\]

**Authors**: , , ,

The continuous advancements in life science technology have enabled spatial transcriptome technology to achieve an impressive level of resolution at the single-cell level. This technology has emerged as a crucial method for studying the cellular composition and differentiation states of tissues, investigating cell-cell interactions, and unraveling the molecular mechanisms underlying diseases and developmental processes. A key component in this analysis is the accurate segmentation of cells. However, existing segmentation methods often fail to fully leverage the valuable information provided by spatial transcriptomics, leading to inaccurate cell segmentation. In this study, we introduce SSL-CST, a cell segmentation for single-cell spatial transcriptome method based on self-supervised learning. SSL-CST employs a pre-trained model for foundational contour segmentation. Following the denoising process, it utilizes a self-supervised neural network to correct the cell boundaries to obtain accurate cell boundaries. Through this approach, SSL-CST outperforms other state-of-the-art methods in various tests conducted on multiple datasets. The improved segmentation provided by SSL-CST further enhances the analysis of single-cell spatial expression, providing effective tools for biological discovery.

**Subject**: [AAAI.2026 - Humans and AI](https://papers.cool/venue/AAAI.2026?group=Humans%20and%20AI)

---

## #20 Whole-Field Action Sensing via Wearable Single-Channel EMG Sensors and Resource-Efficient Motion Network \[PDF1\] \[Copy\] \[Kimi1\] \[REL\]

**Authors**: , , , , , , , , ,

The proliferation of collaborative training and multi-person sports has underscored the necessity for concurrent whole-field action sensing. However, Electromyography (EMG) recognition, which plays a pivotal role in Wearable Human Activity Recognition (WHAR) for analyzing muscle activity and decoding action intent, still faces challenges in achieving a balance between performance, cost, and efficiency in multi-person scenarios. Unlike current channel-expansion solutions, we propose a wireless wearable Single-Dimensional Sparse EMG (2SEMG) Sensor for efficient personal sampling. These action-unaffected sensors leverage the proposed lightweight One-Dimensional Motion Network (OMONet) to facilitate concurrent action sensing. Experiments demonstrate that OMONet achieves leading performance and efficiency in action signal recognition, and two real-world badminton matches further confirm the performance, robustness, and real-time efficiency of the whole-field action sensing network constructed via 2SEMG Sensors and OMONet.

**Subject**: [AAAI.2026 - Humans and AI](https://papers.cool/venue/AAAI.2026?group=Humans%20and%20AI)

---

## #21 Mitigating Length Bias in RLHF Through a Causal Lens \[PDF1\] \[Copy\] \[Kimi\] \[REL\]

**Authors**: , ,

Reinforcement learning from human feedback (RLHF) is widely used to align large language models (LLMs) with human preferences. However, RLHF-trained reward models often exhibit length bias—a systematic tendency to favor longer responses by conflating verbosity with quality. We propose a causal framework for analyzing and mitigating length bias in RLHF reward modeling. Central to our approach is a counterfactual data augmentation method that generates response pairs designed to isolate content quality from verbosity. These counterfactual examples are then used to train the reward model, enabling it to assess responses based on content quality independently of verbosity. Specifically, we construct (1) length-divergent pairs with similar content and (2) content-divergent pairs of similar length. Empirical evaluations show that our method reduces length bias in reward assignment and leads to more concise, content-focused outputs from the policy model. These findings demonstrate that the proposed approach effectively reduces length bias and improves the robustness and content sensitivity of reward modeling in RLHF pipelines.

**Subject**: [AAAI.2026 - Humans and AI](https://papers.cool/venue/AAAI.2026?group=Humans%20and%20AI)

---

## #22 ESCA: An Emotional Support Conversation Agent for Enhancing Reasonable Strategy Planning and Effective Expression \[PDF1\] \[Copy\] \[Kimi\] \[REL\]

**Authors**: , , , , , ,

Emotional Support Conversation (ESC) aims to alleviate individuals’ negative emotions through multi-turn dialogues, where effective strategy planning and response generation are essential. However, existing methods often suffer from limitations in both planning reasonable support strategies and effectively expressing them in responses. To the end, we propose a novel LLM-based Emotional Support Conversation Agent (ESCA) with a plug-in strategy planner and a strategy-aligned prompt generator. The strategy planner cooperates with four aspects of the seeker’s state, including emotion intensity, trust degree, dialogue behavior, and stage of change, to enhance the rationality and effectiveness of the strategy prediction. To ensure that predicted strategies are better conveyed, the prompt generator integrates strategy-aligned instructions, knowledge, and context to generate the soft prompt for guiding the LLM to generate supportive responses. In addition to supervised fine-tuning, the prompt generator is further optimized by reinforcement learning. Experimental results demonstrate that ESCA significantly improves both response quality and the success rate of achieving the ESC task goal.

**Subject**: [AAAI.2026 - Humans and AI](https://papers.cool/venue/AAAI.2026?group=Humans%20and%20AI)

---

## #23 ViTE: Virtual Graph Trajectory Expert Router for Pedestrian Trajectory Prediction \[PDF\] \[Copy\] \[Kimi\] \[REL\]

**Authors**: , , ,

Pedestrian trajectory prediction is critical for ensuring safety in autonomous driving, surveillance systems, and urban planning applications. While early approaches primarily focus on one-hop pairwise relationships, recent studies attempt to capture high-order interactions by stacking multiple Graph Neural Network (GNN) layers. However, these approaches face a fundamental trade-off: insufficient layers may lead to under-reaching problems that limit the model's receptive field, while excessive depth can result in prohibitive computational costs. We argue that an effective model should be capable of adaptively modeling both explicit one-hop interactions and implicit high-order dependencies, rather than relying solely on architectural depth. To this end, we propose ViTE (Virtual graph Trajectory Expert router), a novel framework for pedestrian trajectory prediction. ViTE consists of two key modules: a Virtual Graph that introduces dynamic virtual nodes to model long-range and high-order interactions without deep GNN stacks, and an Expert Router that adaptively selects interaction experts based on social context using a Mixture-of-Experts design. This combination enables flexible and scalable reasoning across varying interaction patterns. Experiments on three benchmarks (ETH/UCY, NBA, and SDD) demonstrate that our method consistently achieves state-of-the-art performance, validating both its effectiveness and practical efficiency.

**Subject**: [AAAI.2026 - Humans and AI](https://papers.cool/venue/AAAI.2026?group=Humans%20and%20AI)

---

## #24 Belief-Driven Value Alignment for Human-Robot Collaboration \[PDF1\] \[Copy\] \[Kimi2\] \[REL\]

**Authors**: , , ,

As intelligent systems advance rapidly, human-robot collaboration is becoming increasingly important. Ensuring that the intelligent agent's behaviors match human intentions and value preferences is crucial for effective collaboration, which is termed the value alignment problem. Within the Reinforcement Learning (RL) paradigm, value alignment typically relies on pre-designed reward functions, and Cooperative Inverse Reinforcement Learning (CIRL) is often used to model value alignment as a human-robot game. However, existing works often assume that human is perfectly rational, and can fully obtain robot’s belief on human’s preference. To address this limitation, we propose a Particle Filter-based Hierarchical Dynamic Programming algorithm (PFHDP). By modeling the robot's belief state, this algorithm ensures the correct updates of human's estimate of the robot's belief. This allows human to adopt more targeted pedagogical behaviors to guide the robot based on her understanding of the robot's current belief, achieving belief alignment between human and robot and thereby promoting value alignment more effectively. Furthermore, we run experiments to evaluate the proposed method in two cooperative scenarios against some typical benchmark approaches. The experimental results show that our method can strengthen the alignment of belief states between human and robot, leading to enhanced value alignment.

**Subject**: [AAAI.2026 - Humans and AI](https://papers.cool/venue/AAAI.2026?group=Humans%20and%20AI)

---

## #25 GigaMoE: Sparsity-Guided Mixture of Experts for Efficient Gigapixel Object Detection \[PDF2\] \[Copy\] \[Kimi\] \[REL\]

**Authors**: , , , , , ,

Object detection in High-Resolution Wide (HRW) shots, or gigapixel images, presents unique challenges due to extreme object sparsity and vast scale variations. State-of-the-art methods like SparseFormer have pioneered sparse processing by selectively focusing on important regions, yet they apply a uniform computational model to all selected regions, overlooking their intrinsic complexity differences. This leads to a suboptimal trade-off between performance and efficiency. In this paper, we introduce GigaMoE, a novel backbone architecture that pioneers adaptive computation for this domain by replacing the standard Feed-Forward Networks (FFNs) with a Mixture-of-Experts (MoE) module. Our architecture first employs a shared expert to provide a robust feature baseline for all selected regions. Upon this foundation, our core innovation---a novel Sparsity-Guided Routing mechanism---insightfully repurposes importance scores from the sparse backbone to provide a "computational bonus,'' dynamically engaging a variable number of specialized experts based on content complexity. The entire system is trained efficiently via a loss-free load-balancing technique, eliminating the need for cumbersome auxiliary losses. Extensive experiments show that GigaMoE sets a new state-of-the-art on the PANDA benchmark, improving detection accuracy by 1.1% over SparseFormer while simultaneously reducing the computational cost (FLOPs) by a remarkable 32.3%.

**Subject**: [AAAI.2026 - Humans and AI](https://papers.cool/venue/AAAI.2026?group=Humans%20and%20AI)