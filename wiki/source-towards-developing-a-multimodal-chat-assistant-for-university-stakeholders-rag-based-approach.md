# Towards Developing a Multimodal Chat Assistant for University Stakeholders: RAG-based Approach

**Last updated:** 2026-07-02

## Overview
This paper presents a novel multimodal chat assistant designed to enhance information access for university stakeholders. It addresses the limitations of existing chatbots in handling complex, domain-specific queries and adapting to evolving institutional policies. The proposed solution utilizes a retrieval-augmented generation (RAG) approach, integrating a large language model with semantic retrieval from institutional resources.

## Key Findings

*   **Enhanced Information Access:** The RAG-based system effectively retrieves and synthesizes information from university handbooks and other institution-centric resources.
*   **Multimodal Capabilities:** The chatbot supports both text and image queries through a vision-language model, offering a more versatile user experience.
*   **Reduced Hallucinations:** The retrieval grounding significantly decreases the rate of inaccurate or fabricated responses, with hallucinations reduced from 31.7% to 6.6%.
*   **User Satisfaction:** Evaluations indicate high satisfaction levels among users for both text and image interactions, demonstrating the system's practical utility.
*   **Technical Implementation:** The system features a scalable backend (FastAPI) and responsive frontend (Next.js), with quantized inference enabling efficient deployment on hardware with limited resources.

## Limitations

*   Slightly increased response time for visual inputs compared to text-based queries.

## Sources

*   [raw_file_content](./raw/towards-developing-a-multimodal-chat-assistant-for-university-stakeholders-rag-based-approach.md)

## Related pages

*   [[chatbots]]
*   [[human-ai-interaction]]
*   [[explainability]]