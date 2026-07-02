Authors: Not specified in the provided text.
Date: 2026-07-01 (based on arXiv submission date)

Summary:
This paper addresses the challenge of providing timely and reliable information to university stakeholders, particularly in regions with limited intelligent support systems. The authors propose a multimodal university chatbot that utilizes a retrieval-augmented generation (RAG) approach. This system combines a large language model (LLM) with semantic retrieval, drawing information from institution-specific resources like the university handbook to generate context-aware responses.

Key Features and Findings:
- **Multimodal Input:** The chatbot accepts both text and image queries, leveraging a vision-language model.
- **RAG Approach:** Retrieval-augmented generation significantly reduces hallucinations by grounding responses in factual institutional data. Hallucination rates dropped from 31.7% to 6.6%.
- **Scalability and Deployment:** The system is built with a FastAPI backend and Next.js frontend for real-time usability, and quantized inference allows for deployment on constrained hardware.
- **User Satisfaction:** Evaluations show strong satisfaction scores for both text and image queries, despite a slight increase in response time for visual inputs.
- **Problem Addressed:** Aims to overcome limitations of rule-based chatbots in handling complex, domain-specific, and evolving institutional information.

This work highlights advancements in creating more effective and reliable AI assistants for educational contexts, with implications for user experience and information accuracy.