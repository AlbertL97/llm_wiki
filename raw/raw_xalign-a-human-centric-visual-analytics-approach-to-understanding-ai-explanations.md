Authors: Andreas Keil, Oliver Deussen, Florian Wörner, Kai Hornbstreiter, Tim Sünderhauf, Stefanie Schreiber
Date: 2026-10-25
Title: XALIGN: A Human-centric Visual Analytics Approach to Understanding AI Explanations
URL: http://arxiv.org/abs/2610.31015v1

Summary:
This paper introduces XALIGN, a visual analytics workflow designed to enhance human understanding of AI explanations, particularly in high-stakes domains. Current methods for evaluating Explainable AI (XAI) often focus on technical properties like faithfulness and robustness. However, domain experts need to verify AI predictions against established knowledge, which is challenging when different explanation methods yield conflicting results that are difficult to discern when inspected in isolation.

XALIGN addresses this by presenting rule-based explanations and feature attribution methods (TreeSHAP, KernelSHAP, LIME) in a side-by-side visual interface for the same model (Random Forest). This direct comparison makes agreements and contradictions between explanation methods apparent, enabling users to explore these signals and compare them with their domain expertise.

Two case studies were conducted using the German Credit dataset and a meteorological dataset derived from ICON model output and Cloudnet observations. In both instances, XALIGN revealed discrepancies between the rule-based explanation and the attribution methods that would have been missed by examining each method individually.

An expert evaluation involving three specialists was performed. Participants found XALIGN to be a valuable tool for identifying influential features and for mitigating over-trust in AI predictions. However, the study noted that linking rules to attributions was more challenging for participants lacking prior XAI experience.