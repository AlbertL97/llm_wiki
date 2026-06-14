---
title: "The Persuasion Paradox: When LLM Explanations Fail to Improve Human-AI Team Performance"
source: "https://arxiv.org/html/2604.03237v1"
author:
published:
created: 2026-06-07
description:
tags:
  - "clippings"
---
Ruth Cohen Bar-Ilan UniversityIsrael [ruticohen770@gmail.com](https://arxiv.org/html/2604.03237v1/mailto:ruticohen770@gmail.com), Lu Feng University of VirginiaUSA [lu.feng@virginia.edu](https://arxiv.org/html/2604.03237v1/mailto:lu.feng@virginia.edu), Ayala Bloch Department of Psychology, Ariel UniversityIsrael [ayalablo@ariel.ac.il](https://arxiv.org/html/2604.03237v1/mailto:ayalablo@ariel.ac.il) and Sarit Kraus Bar-Ilan UniversityIsrael [sarit@cs.biu.ac.il](https://arxiv.org/html/2604.03237v1/mailto:sarit@cs.biu.ac.il)

###### Abstract.

While natural-language explanations from large language models (LLMs) are widely adopted to improve transparency and trust, their impact on objective human–AI team performance remains poorly understood. We identify a Persuasion Paradox: fluent explanations systematically increase user confidence and reliance on AI without reliably improving, and in some cases undermining, task accuracy. Across three controlled human-subject studies spanning abstract visual reasoning (RAVEN matrices) and deductive logical reasoning (LSAT problems), we disentangle the effects of AI predictions and explanations using a multi-stage reveal design and between-subjects comparisons. In visual reasoning, LLM explanations increase confidence but do not improve accuracy beyond the AI prediction alone, and substantially suppress users’ ability to recover from model errors. Interfaces exposing model uncertainty via predicted probabilities, as well as a selective automation policy that defers uncertain cases to humans, achieve significantly higher accuracy and error recovery than explanation-based interfaces. In contrast, for language-based logical reasoning tasks, LLM explanations yield the highest accuracy and recovery rates, outperforming both expert-written explanations and probability-based support. This divergence reveals that the effectiveness of narrative explanations is strongly task-dependent and mediated by cognitive modality. Our findings demonstrate that commonly used subjective metrics such as trust, confidence, and perceived clarity are poor predictors of human–AI team performance. Rather than treating explanations as a universal solution, we argue for a shift toward interaction designs that prioritize calibrated reliance and effective error recovery over persuasive fluency.

Human–AI collaboration, Explainable AI, Large Language Models

## 1\. Introduction

The rapid integration of Large Language Models (LLMs) into professional workflows has transformed Explainable AI (XAI) from a technical niche into a ubiquitous interface feature. Historically, the XAI field was dominated by post-hoc interpretability methods such as LIME [^16] and SHAP [^9], or visual perturbation methods like Occlusion Sensitivity (OS) [^23]. While these tools provided insights for developers, they often required significant domain expertise to interpret. In contrast, modern generative agents can now provide natural language explanations that are fluent, human-sounding, and accessible to non-experts [^13].

This newfound fluency has sparked a rapid shift toward narrative-based transparency. Designers increasingly rely on LLMs to build user trust and reduce the perceived black-box nature of AI [^11]. However, as AI transitions from a backend tool to an active collaborative partner, a critical evaluative gap has emerged. While users overwhelmingly prefer narrative explanations for their clarity and helpfulness [^8] [^21], empirical evidence regarding their impact on actual task performance remains limited.

Prior research suggests that human–AI teams rarely outperform their strongest individual component [^2]. In many tasks, the largest gains in team performance stem from the AI’s initial prediction alone, while adding an explanation can be neutral or even counterproductive, leading to over-reliance and automation bias [^14] [^5]. This risk is particularly acute with LLMs, where the misinformation effect of a fluent but incorrect rationale can mask underlying AI errors [^17] [^19].

More broadly, the field has struggled to achieve *complementary performance*, the ideal state in which a human–AI team outperforms both the solo human and the solo AI [^18]. Much of current XAI evaluation focuses on proxy measures such as user satisfaction, trust, or perceived understanding [^6], which often fail to predict how users will behave in high-stakes or real-world settings [^3]. Recent findings suggest that simple indicators of model uncertainty or predicted probabilities may sometimes better support calibrated reliance than complex narrative justifications [^15] [^2].

In this article, we investigate the *Persuasion Paradox*, the phenomenon in which increased trust driven by explanation fluency becomes decoupled from objective task performance. We move beyond subjective ratings to measure how different forms of AI support affect accuracy, reliance, and error recovery across two distinct cognitive domains: abstract visual reasoning using RAVEN matrices [^24] and deductive logical reasoning using LSAT questions [^22]. By decomposing the interaction into multi-stage reveals, we identify where and how explanations influence human decision-making, and when they fail to support effective human–AI collaboration.

### 1.1. Key Insights

- LLM explanations are increasingly used to convey fluency and build user trust as AI systems move from backend tools to collaborative partners.
- While users overwhelmingly prefer LLM explanations, commonly used subjective measures such as confidence and trust are poor predictors of objective human–AI task performance.
- Across both visual and logical reasoning tasks, participants exhibit a strong tendency to rely on AI predictions, and error recovery remains challenging even when explanations are provided.
- The impact of narrative explanations is task-dependent: fluent explanations can hinder performance in visual reasoning while improving accuracy in language-based reasoning tasks.

## 2\. The Anatomy of a Human-AI Decision

To understand the role of generative explanations in human–AI collaboration, we first disentangle the value of an AI system’s prediction from the value of its explanation. Explanations are often added to AI outputs with the assumption that greater transparency improves decision-making. However, it remains unclear whether LLM-based explanations improve task performance beyond the AI prediction itself or primarily increase users’ confidence. To answer this question, our first study uses a multi-stage reveal design that isolates the effects of predictions and explanations within the same decision process.

### 2.1. Study Design: Within-Subjects Multi-Stage Reveal

This study examines abstract visual reasoning using the RAVEN dataset [^24], which consists of $3\times 3$ matrices with one missing panel that must be inferred through relational reasoning. These problems require multi-step logic, making them well suited for examining how different forms of AI assistance influence human decision-making.

Participants ($n=27$) solved up to 16 RAVEN puzzles organized into two blocks of eight. In each block, the AI’s predicted answer was accompanied by one of two explanation types: a visual occlusion sensitivity (OS) heatmap or a natural-language rationale generated by an LLM. These modalities represent two common approaches to explanation, contrasting visual feature attribution with fluent narrative reasoning.

To isolate the contribution of each layer of AI support, participants completed each puzzle using a multi-stage reveal procedure:

- Stage 1 (Before AI): Participants selected an answer and reported confidence on a 1–5 Likert scale without AI assistance.
- Stage 2 (After Prediction): The AI’s predicted answer was revealed, allowing participants to revise their answer and confidence.
- Stage 3 (After Explanation): An LLM-generated explanation or an OS heatmap was presented, followed by a final opportunity to update the answer and confidence.

In addition to self-reported confidence, we measured *objective accuracy* at each stage, defined as whether a participant’s selected answer matched the ground-truth solution for the puzzle.

Figure 1 illustrates this multi-stage human–AI decision process, which enables a direct comparison of how predictions and explanations separately affect accuracy and confidence within the same task context. Participants were informed that the AI system’s overall historical accuracy was approximately 76%, reflecting prior evaluations of the underlying CNN model for prediction [^24] and the LLM used for explanation (Claude 3.7). This information was provided to establish realistic expectations of AI capability while reinforcing that the system was fallible.

![Refer to caption](https://arxiv.org/html/2604.03237v1/figs/multi-stage.png)

Figure 1. The multi-stage human–AI decision process used to separate the effects of the AI prediction and its explanation on user decisions.

### 2.2. Results: Accuracy–Confidence Decoupling

We first report overall accuracy and confidence aggregated across explanation conditions to characterize the general effect of introducing explanations.

Figure 2 shows a clear divergence between objective accuracy and subjective confidence across the three reveal stages. Participants’ baseline accuracy in Stage 1 was low (37.0%), reflecting the difficulty of the task without assistance. Accuracy increased substantially after the AI’s predicted answer was revealed in Stage 2 (49.8%), but explanations did not yield additional gains in Stage 3 (48.8%). In contrast, confidence remained largely unchanged after the prediction stage and increased only after explanations were presented (mean confidence: 3.66 in Stage 1, 3.61 in Stage 2, and 3.81 in Stage 3). Despite this increase in confidence, explanations did not improve task accuracy beyond what was achieved by the AI prediction alone, capturing the core phenomenon we describe as the *Persuasion Paradox*.

These effects were supported by Friedman tests across stages for both accuracy and confidence (accuracy: $\chi^{2}(2)=37.98$, $p<.001$, Kendall’s $W=0.70$; confidence: $\chi^{2}(2)=7.10$, $p=.029$, $W=0.13$). Post hoc Wilcoxon signed-rank tests with Holm correction showed a significant improvement in accuracy from Stage 1 to Stage 2 ($p<.001$), but no difference between the prediction and explanation stages ($p=.960$). In contrast, confidence increased significantly from Stage 2 to Stage 3 following the introduction of explanations ($p=.010$).

We also observed an order-dependent priming effect. Participants who began with LLM-generated explanations achieved higher accuracy early in the task than those who began with visual explanations (43.1% vs. 20.0%). Although exploratory, this pattern suggests that early exposure to a particular form of AI support can shape users’ reasoning strategies over time, motivating the more controlled, between-subjects comparisons in the following study.

![Refer to caption](https://arxiv.org/html/2604.03237v1/x1.png)

Figure 2. Overall accuracy and self-reported confidence across the three reveal stages in the multi-stage RAVEN study. Accuracy improves after the AI prediction but plateaus once explanations are introduced, while confidence increases only after explanations are presented.

## 3\. Comparing Forms of AI Support

Following the discovery of the *Persuasion Paradox*, we conducted a single-stage, between-subjects study to evaluate which forms of AI support most effectively improve objective task performance. This study moves beyond isolating the effects of explanations to directly compare alternative support strategies under identical task conditions.

### 3.1. Study Design: Between-Subjects Comparison

Participants ($n=100$) were randomly assigned to one of five human–AI support conditions (20 per condition):

- Human Only: Participants solved puzzles without any AI support.
- Prediction Only: Participants viewed the AI’s predicted answer.
- Prediction + LLM Explanation: Participants viewed the AI’s prediction accompanied by a natural-language explanation generated by an LLM.
- Prediction + OS Heatmap: Participants viewed the AI’s prediction accompanied by a visual OS heatmap.
- Prediction + Probability: Participants viewed the AI’s prediction along with the model’s predicted probability distribution across all answer options.

Each participant solved 10 challenging RAVEN puzzles. To ensure a fair comparison across conditions, participants were exposed to a fixed mix of AI outcomes consisting of six correct and four incorrect AI predictions, yielding a model accuracy of 60%. For each puzzle, participants selected an answer, with objective accuracy recorded at the trial level, and reported subjective ratings of perceived understanding, clarity, and trust using five-point Likert scales. Additionally, we analyze two complementary decision-level measures that capture how participants interact with AI outputs. *Agreement with correct AI predictions* is defined as the proportion of trials in which a participant selected the AI’s answer when the AI prediction was correct. *Error recovery rate* is defined as the proportion of trials in which a participant rejected the AI’s answer and selected the correct solution when the AI prediction was incorrect.

In addition to these participant conditions, we report results for a *selective automation* policy derived post hoc from the study data. This policy automatically accepts the AI’s prediction when the probability gap between the top two answer options exceeds a predefined threshold; otherwise, it defers to the human participant’s choice. We include this hybrid policy as a reference point for comparing alternative ways of combining human judgments and model predictions.

![Refer to caption](https://arxiv.org/html/2604.03237v1/x2.png)

Figure 3. Relationship between agreement with correct AI predictions and recovery from incorrect AI predictions across support conditions in the RAVEN task. The highlighted lower-right region indicates high agreement paired with low recovery, reflecting error masking behavior.

### 3.2. Results: Explanations Can Mask AI Errors

#### Explanations Increase Reliance but Limit Error Recovery.

Figure 3 plots agreement with correct AI predictions (x-axis) against error recovery from incorrect AI predictions (y-axis), capturing a trade-off between reliance and the ability to detect and override AI errors. The lower-right region of the figure highlights the *Persuasion Paradox*, where high agreement coincides with low recovery from AI errors. All conditions fall within this region, indicating a general tendency for AI support to promote reliance more strongly than error correction. Overall recovery rates differed significantly across support conditions (Kruskal–Wallis $H(5)=50.55$, $p<.001$, $\varepsilon^{2}=0.40$). LLM explanations exemplify this effect most strongly, exhibiting the lowest recovery rate (16.2%) alongside a high agreement rate (84.2%), suggesting that fluent explanations substantially increase deference to the AI even when the model is incorrect. In contrast, the predicted probability condition achieves the highest error recovery rate (37.5%) while maintaining comparable agreement (75.8%), indicating that explicit probability information supports more calibrated use of the model. The selective automation policy provides a contrasting reference point, combining very high agreement (95.0%) with improved recovery (31.2%) by deferring to human judgment only when model uncertainty is high.

#### Explanations Do Not Yield the Highest Task Accuracy.

Figure 4 compares objective task accuracy across support conditions, with overall differences confirmed by a Kruskal–Wallis test ($H(5)=50.553$, $p<.001$, $\varepsilon^{2}=0.400$). Providing the AI prediction alone improves accuracy relative to unaided human decisions (24.6%), while adding explanations yields only modest additional gains. LLM explanations (57.0%) and OS heatmaps (55.0%) slightly outperform prediction-only support (53.5%), yet both remain below the model’s standalone accuracy (60.0%). Exposing the model’s predicted probability distribution enables participants to match model-level performance (60.5%), consistent with the higher recovery rates observed in the agreement–recovery analysis. The selective automation policy achieves the highest accuracy (69.5%), outperforming all participant conditions in post hoc comparisons (Dunn tests with Holm correction, $p<.001$). These results show that explanation-based interfaces do not yield the strongest performance improvements; instead, accuracy gains are driven by mechanisms that support calibrated use of model uncertainty and effective error recovery.

![Refer to caption](https://arxiv.org/html/2604.03237v1/x3.png)

Figure 4. Objective accuracy across human–AI support conditions in the RAVEN task, including a derived selective automation policy for comparison.

#### Probability Interfaces Are Rated Most Favorably.

Table 1 (left) reports participants’ subjective ratings of perceived understanding, clarity, and trust, collected only for conditions that supplemented the AI prediction with additional information. Ratings differed significantly across support conditions for perceived clarity (Kruskal–Wallis $H(2)=7.53$, $p=.023$, $\varepsilon^{2}=0.097$), but not for understanding or trust. The predicted probability interface received the highest ratings across understanding, clarity, and trust, with post hoc Dunn tests using Holm correction confirming higher clarity ratings than explanation-based interfaces ($p=.034$, Cliff’s $\delta=0.45$). These subjective ratings align with the objective results, with the probability condition also supporting higher accuracy and better error recovery than explanation-based alternatives.

Table 1. Mean subjective ratings (1–5 Likert scale) of perceived understanding, clarity, and trust in the RAVEN and LSAT studies. Ratings are reported only for conditions that provided additional information beyond the AI prediction.

<table><thead><tr><th></th><th colspan="3">RAVEN Study</th><th colspan="3">LSAT Study</th></tr><tr><th></th><th>LLM</th><th>OS</th><th>Probability</th><th>LLM</th><th>Expert</th><th>Probability</th></tr></thead><tbody><tr><th>Understanding</th><td>4.10</td><td>3.52</td><td>4.21</td><td>4.40</td><td>3.85</td><td>3.26</td></tr><tr><th>Clarity</th><td>3.50</td><td>3.43</td><td>4.42</td><td>4.40</td><td>3.70</td><td>3.74</td></tr><tr><th>Trust</th><td>3.95</td><td>3.67</td><td>4.54</td><td>4.45</td><td>3.80</td><td>4.00</td></tr></tbody></table>

## 4\. The LSAT Study

To examine whether the Persuasion Paradox generalizes beyond visual reasoning, we conducted a study using logical reasoning questions drawn from the LSAT [^22]. Unlike RAVEN matrices, these LSAT problems rely on verbal logic and structured argumentation, providing a complementary domain in which narrative explanations may play a different role in human–AI collaboration.

![Refer to caption](https://arxiv.org/html/2604.03237v1/figs/LSAT_LLM.jpeg)

(a) Prediction + LLM Explanation

### 4.1. Study Design: Between-Subjects Comparison

Participants ($n=80$) were recruited and randomly assigned to one of four between-subjects conditions (20 per condition):

- Prediction Only: Participants viewed only the AI’s predicted answer.
- Prediction + LLM Explanation: Participants viewed the AI’s prediction accompanied by a natural-language rationale generated by an LLM.
- Prediction + Expert Explanation: Participants viewed the AI’s prediction accompanied by a rationale written by LSAT experts.
- Prediction + Probability: Participants viewed the AI’s prediction along with the model’s predicted probability distribution over the answer options.

Figure 5 illustrates the study user interfaces across explanation and probability conditions.

Each participant solved ten LSAT questions. As in the RAVEN study described in Section 3, model accuracy was held constant at 60% across conditions, and participants selected an answer for each question, with objective accuracy and subjective ratings recorded for each trial.

![Refer to caption](https://arxiv.org/html/2604.03237v1/x4.png)

Figure 6. Relationship between agreement with correct AI predictions and recovery from incorrect AI predictions across support conditions in the LSAT task. The highlighted lower-right region indicates high agreement paired with low recovery, reflecting error masking behavior.

### 4.2. Results: The Dominance of Narrative Fluency

#### Narrative Explanations Increase Both Reliance and Error Recovery.

Figure 6 plots agreement with correct AI predictions against recovery from incorrect AI predictions across support conditions in the LSAT task. Overall recovery rates differed significantly across conditions (Kruskal–Wallis $H(3)=22.30$, $p<.001$, $\varepsilon^{2}=0.254$).

The LLM explanation condition exhibited both the highest agreement with correct AI predictions (89.2%) and the highest recovery rate from incorrect AI predictions (47.5%), indicating that fluent rationales supported effective use of correct model outputs while also aiding error detection. Expert explanations showed lower agreement (68.3%) and recovery (36.2%) than LLM explanations, but still outperformed prediction-only support (agreement: 62.5%, recovery: 27.5%) and predicted probabilities (agreement: 55.0%, recovery: 35.0%). However, despite achieving the highest recovery rate, the LLM explanation condition still falls within the lower-right region of the plot, where high agreement is paired with comparatively limited recovery from AI errors, indicating a residual error-masking effect.

#### LLM Explanations Yield the Highest Task Accuracy.

Figure 7 compares objective task accuracy across support conditions, with overall differences confirmed by a Kruskal–Wallis test ($H(3)=22.30$, $p<.001$, $\varepsilon^{2}=0.254$). The LLM explanation condition achieved the highest accuracy (72.5%), substantially outperforming prediction-only support (48.5%), expert explanations (55.5%), and predicted probabilities (47.0%), with post hoc Dunn tests using Holm correction confirming significant advantages over all other participant-facing conditions ($p<.001$, Cliff’s $\delta=0.70$ – $0.74$). Notably, the LLM explanation condition was the only participant-facing condition to exceed the model’s standalone accuracy (60%).

![Refer to caption](https://arxiv.org/html/2604.03237v1/x5.png)

Figure 7. Objective accuracy across human–AI support conditions in the LSAT task.

#### LLM Explanations Are Rated Most Favorably.

Table 1 (right) reports participants’ subjective ratings of perceived understanding, clarity, and trust on the LSAT task. Ratings differed significantly across conditions for perceived understanding (Kruskal–Wallis $H(3)=11.32$, $p=.010$, $\varepsilon^{2}=0.110$) and clarity ($H(3)=10.76$, $p=.013$, $\varepsilon^{2}=0.102$), but not for trust. The LLM explanation condition received the highest ratings across perceived understanding, clarity, and trust (4.40, 4.40, and 4.45, respectively), with post hoc Dunn tests using Holm correction confirming higher clarity ratings than both expert explanations and prediction-only support ($p=.012$, Cliff’s $\delta=0.50$). These subjective ratings align with the objective results, with the LLM explanation condition also achieving higher accuracy and stronger error recovery than alternative forms of AI support.

## 5\. Discussion

### 5.1. The Persuasion Paradox and Error Masking

The persuasion paradox emerges clearly in the multi-stage RAVEN study, where explanations increase participants’ confidence without improving objective accuracy. Subsequent analyses show that this effect extends beyond confidence to decision dynamics around error correction. Across both the between-subjects RAVEN and LSAT studies, all support conditions occupy the lower-right region of the agreement–recovery space, where high agreement with correct AI predictions coexists with limited recovery from incorrect ones. Although the degree of recovery varies substantially by task and interface, no condition fully escapes this region. Even when explanations relative improve accuracy, as in the LSAT task, they remain associated with strong agreement and residual error masking. The persuasion paradox therefore reflects a deeper asymmetry in human–AI collaboration: AI support more readily promotes acceptance of correct outputs than it enables users to detect and override AI errors.

### 5.2. Task-Dependent Effects of Narrative Explanations

Across tasks, narrative explanations exhibit sharply different effects on human–AI collaboration. In the LSAT task, LLM-generated explanations achieve the strongest objective accuracy, error recovery, and subjective ratings, whereas in the RAVEN task they underperform probability-based support in both accuracy and subjective ratings and yield the lowest error recovery among all conditions.

This divergence can be explained by differences in cognitive modality and working memory constraints. RAVEN reasoning primarily engages visuospatial processing, relying on coordinated activity between parietal and frontal regions for relational integration [^4] [^7]. When explanations are delivered in natural language, users must translate sequential descriptions into spatial representations, increasing extraneous cognitive load and taxing visuospatial working memory resources [^20] [^1]. This translation cost limits the effectiveness of narrative explanations.

By contrast, LSAT reasoning tasks operate primarily within a language-based symbolic modality. These tasks rely on syntactic parsing, symbolic manipulation, and deductive reasoning supported by the phonological loop [^1]. In this setting, LLM explanations operate within the same representational format as the task itself. By decomposing arguments into explicit logical steps, LLMs reduce structural reasoning demands, allowing users to focus on validation rather than reconstruction. This modality alignment helps explain why LLM-generated rationales outperform other conditions, including expert-written explanations and probability-based interfaces, in the LSAT task.

### 5.3. The Case for Selective Automation

Selective automation, which accepts high-probability AI predictions while delegating uncertain cases to human judgment, achieves the highest overall accuracy in the RAVEN study by aligning reliance with model reliability rather than user perceptions. This approach is rooted in the framework of learning to defer [^10] [^12], which leverages calibrated predicted probabilities to determine when human oversight is most valuable. Predicted probability information plays a supporting role in this framework by revealing when deferral is warranted, but is insufficient on its own. In the LSAT task, selective automation was not evaluated because probability distributions were typically sharply peaked, leaving little opportunity for meaningful deferral to human judgment.

More broadly, differences in the effectiveness of probability-based support across tasks reflect differences in the characteristics of the probability distributions produced by the model. In the LSAT task, the LLM frequently assigned very high probability to its selected answer regardless of correctness, limiting the diagnostic value of probability information for distinguishing correct from incorrect outputs. In contrast, in the RAVEN task, predicted probabilities were often more dispersed across answer options and more closely tracked model accuracy, making probability information informative for calibrating reliance and supporting error recovery.

## 6\. Conclusion

The Persuasion Paradox highlights a critical challenge for the future of human–AI collaboration. As AI systems become more fluent, the risk of misplaced trust increases. Our findings show that narrative explanations can strengthen user confidence and reliance on AI without improving, and in some cases undermining, objective human–AI team performance.

Rather than attempting to explain every model decision, these results point to the need for more nuanced approaches to human–AI collaboration that emphasize calibrated reliance and effective error recovery. Selective automation represents one promising direction, but it is unlikely to be a universal solution. A central challenge for the research community is to develop and evaluate new interaction paradigms that determine what information to present, when to present it, and when to defer decisions altogether, in order to support reliable human judgment rather than the mere illusion of understanding.

###### Acknowledgements.

This research has been partially supported by the Israel Ministry of Innovation, Science & Technology grant 1001818511

[^1]: The episodic buffer: a new component of working memory?. Trends in cognitive sciences 4 (11), pp. 417–423. Cited by: §5.2, §5.2.

[^2]: Does the whole exceed its parts? The effect of AI explanations on complementary team performance. In Proceedings of the 2021 CHI conference on human factors in computing systems, pp. 1–16. Cited by: §1, §1.

[^3]: Proxy tasks and subjective measures can be misleading in evaluating explainable AI systems. In Proceedings of the 25th international conference on intelligent user interfaces, pp. 454–464. Cited by: §1.

[^4]: What one intelligence test measures: a theoretical account of the processing in the raven progressive matrices test.. Psychological review 97 (3), pp. 404. Cited by: §5.2.

[^5]: Automation bias in intelligent time critical decision support systems. In Decision making in aviation, pp. 289–294. Cited by: §1.

[^6]: Metrics for explainable AI: challenges and prospects. arXiv preprint arXiv:1812.04608. Cited by: §1.

[^7]: The parieto-frontal integration theory (p-fit) of intelligence: converging neuroimaging evidence. Behavioral and brain sciences 30 (2), pp. 135–154. Cited by: §5.2.

[^8]: Questioning the AI: informing design practices for explainable AI user experiences. In Proceedings of the 2020 CHI conference on human factors in computing systems, pp. 1–15. Cited by: §1.

[^9]: A unified approach to interpreting model predictions. Advances in neural information processing systems 30. Cited by: §1.

[^10]: Predict responsibly: improving fairness and accuracy by learning to defer. Advances in neural information processing systems 31. Cited by: §5.3.

[^11]: Explanation in artificial intelligence: insights from the social sciences. Artificial intelligence 267, pp. 1–38. Cited by: §1.

[^12]: Consistent estimators for learning to defer to an expert. In International conference on machine learning, pp. 7076–7087. Cited by: §5.3.

[^13]: An overview of the empirical evaluation of explainable AI: a comprehensive guideline for user-centered evaluation in XAI. Applied Sciences 14 (23), pp. 11288. Cited by: §1.

[^14]: Humans and automation: use, misuse, disuse, abuse. Human factors 39 (2), pp. 230–253. Cited by: §1.

[^15]: When confidence meets accuracy: exploring the effects of multiple performance indicators on trust in machine learning models. In Proceedings of the 2022 CHI conference on human factors in computing systems, pp. 1–14. Cited by: §1.

[^16]: “Why should I trust you?” Explaining the predictions of any classifier. In Proceedings of the 22nd ACM SIGKDD international conference on knowledge discovery and data mining, pp. 1135–1144. Cited by: §1.

[^17]: Don’t be fooled: the misinformation effect of explanations in human–AI collaboration. International Journal of Human–Computer Interaction, pp. 1–29. Cited by: §1.

[^18]: Bayesian modeling of human–ai complementarity. Proceedings of the National Academy of Sciences 119 (11), pp. e2111547119. Cited by: §1.

[^19]: Teaching people LLM’s errors and getting it right. arXiv preprint arXiv:2512.21422. Cited by: §1.

[^20]: Cognitive load during problem solving: effects on learning. Cognitive science 12 (2), pp. 257–285. Cited by: §5.2.

[^21]: Trust in AI-assisted decision making: perspectives from those behind the system and those for whom the decision is made. In Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems, pp. 1–14. Cited by: §1.

[^22]: Reclor: a reading comprehension dataset requiring logical reasoning. arXiv preprint arXiv:2002.04326. Cited by: §1, §4.

[^23]: Visualizing and understanding convolutional networks. In European conference on computer vision, pp. 818–833. Cited by: §1.

[^24]: Raven: a dataset for relational and analogical visual reasoning. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, pp. 5317–5327. Cited by: §1, §2.1, §2.1.