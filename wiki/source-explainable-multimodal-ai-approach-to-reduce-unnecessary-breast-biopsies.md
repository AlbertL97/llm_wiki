# Explainable Multimodal AI Approach to Reduce Unnecessary Breast Biopsies

## Summary

This paper introduces an explainable multimodal AI framework designed to improve the accuracy of breast cancer diagnosis and reduce the number of unnecessary biopsies. By integrating image analysis (mammography) with textual data (radiology reports) and employing Explainable AI (XAI) techniques like Grad-CAM, the model provides interpretable insights into its predictions. This approach aims to identify benign tumors with greater confidence, thereby alleviating patient anxiety and reducing healthcare costs associated with unneeded procedures.

## Key Findings

*   **Multimodal Approach:** Developed a novel framework combining Vision Transformer (ViT) for image features and DeBERTa-V3-Large for text embeddings.
*   **Explainability:** Incorporated Grad-CAM to generate visual explanations, highlighting regions influencing model decisions.
*   **Performance:** The multimodal model achieved an AUC of 0.72, outperforming image-only (0.66) and text-only (0.68) baselines.
*   **Sensitivity & Specificity:** Demonstrated high sensitivity (up to 100%) with varying specificities for different BI-RADS categories.
*   **Impact:** Potential to significantly reduce unnecessary breast biopsies, decrease patient anxiety, and lower healthcare expenses by offering interpretable diagnostic assistance.

## Dataset

*   1,632 patients with four mammography views and corresponding radiology reports.

## Methodology

*   Independent feature extraction from imaging and text modalities.
*   Late fusion for combining features before classification.
*   Grad-CAM for generating visual explanations.

## Sources

*   [http://arxiv.org/abs/2610.35704v1](http://arxiv.org/abs/2610.35704v1)

## Last updated

2026-10-27

## Related pages

*   [[explainability]]
*   [[medical-ai]]
*   [[human-ai-interaction]]
*   [[mental-health]]