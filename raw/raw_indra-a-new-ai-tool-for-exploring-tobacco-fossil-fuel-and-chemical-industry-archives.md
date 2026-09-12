# INDRA: A New AI Tool for Exploring Tobacco, Fossil Fuel, and Chemical Industry Archives

**Authors:** Not specified in the provided text.
**Date:** 2026-09-12 (based on URL structure)

## Overview

This paper introduces INDRA, a research platform developed to overcome the limitations of general-purpose Large Language Models (LLMs) when accessing and analyzing large, historical business archives, such as those from the tobacco, fossil fuel, and chemical industries. These archives, containing hundreds of millions of pages of formerly secret business records, have been largely inaccessible to LLMs due to a lack of compilation into LLM-readable corpora. Existing chatbots, while potentially familiar with some of the information, are prone to hallucination and other defects when lacking direct access to these documents.

## Key Features and Safeguards

INDRA is designed to embed the conventions of archival historiography directly into its system-level protocol. It federates multiple siloed collections, including UCSF's Industry Documents Library, Columbia and CUNY's ToxicDocs, and Stanford's SRITA. The platform incorporates three interlinked safeguards:

1.  **Closed Evidentiary Sandbox:** This feature confines the LLM's operations to a user-selected corpus, preventing retrieval from external sources that could introduce bias or inaccurate information.
2.  **Real-time Provenance Tagging:** This mechanism clearly demarcates the boundary between archival evidence and the model's parametric inferences, ensuring transparency.
3.  **System-level Protocol (Deterministic Scripts):** Enforced by deterministic scripts, this protocol guides the structure of every output, ensuring consistency and auditability.

## Benefits and Outcomes

These safeguards collectively prevent the LLM from conflating factual statements derived from documents with its own generated inferences or prior training data. The result is an LLM-powered research partner that facilitates massive multi-archival investigations. INDRA's outputs are designed to be checked rather than blindly trusted, and its architecture makes the conditions of knowledge production visible and auditable.

## Case Studies and Limitations

The paper presents three case studies to demonstrate the method's analytical value and limitations. These studies highlight phenomena such as the "Heraclitus effect," the "steppingstone dilemma," and the "gullibility (or mafia) problem."