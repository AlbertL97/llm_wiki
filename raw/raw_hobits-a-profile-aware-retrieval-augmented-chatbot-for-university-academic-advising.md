Authors: [Not Specified in provided text]
Date: [Not Specified in provided text]

Title: hoBIT: A Profile-Aware Retrieval-Augmented Chatbot for University Academic Advising

Description: In university academic advising, identical questions can require different answers depending on a student's department, admission cohort, and degree program, causing profile-blind retrievers to surface plausible but inapplicable evidence. We present proFILL, a method for transforming hoBIT, our college's current rule-based advising chatbot, into a profile-aware retrieval-augmented generation (RAG) system. Rather than requiring a complete user profile upfront, proFILL progressively acquires only the profile attributes needed for each query, guided by both the query intent and the initially retrieved evidence, and uses them to condition retrieval over a profile-aware index. Extensive experiments and a human preference study show that proFILL outperforms diverse RAG baselines, is preferred by target users, and remains effective with open-weight models for cost-effective on-premise deployment.

URL: http://arxiv.org/abs/2608.26604v1

Key Findings:
- Traditional advising chatbots struggle with context-dependent queries due to profile blindness.
- proFILL is a method to make chatbots like hoBIT profile-aware in a progressive manner.
- The system acquires profile attributes incrementally based on query intent and retrieved evidence.
- This profile-aware indexing improves the accuracy and relevance of retrieved information.
- Human preference studies indicate users prefer the proFILL system over baseline RAG models.
- The system demonstrates effectiveness with open-weight models for on-premise deployment.