## Compaction, decay and reinforcement in a two-tier conversational memory: a paired evaluation against retrieval-augmented generation

**Authors:** Not specified in the provided text.
**Date:** 2026-11-09

### Abstract
A conversational agent that remembers has to decide what to keep. Retrieval-augmented generation keeps the transcript and searches it; the alternative is to compact each turn into atomic facts and search those. We compare the two on LoCoMo, with both arms answering all 1,985 questions in one window, against the same stores, with the same generator and judge, and both predictions on one row, which licenses McNemar's exact test on the 512 questions where they disagree. On the four categories comparable work reports, compaction scores 71.4 per cent against 64.6, a lead of 6.8 points (p = 5.5e-08) at 34 per cent fewer prompt tokens. On all five, including the adversarial set comparable work drops, the lead falls to 2.0 and stops being significant, because the baseline leads adversarial by 14.6. That loss has a structure. Our lead falls as the reference answer demands more source wording, 9.6 points ahead at one or two reference words and 3.1 behind past eight, with token overlap moving the same way, so the judge is not the cause. Compaction keeps what a fact asserts and discards how it was said, so it wins where the answer is a value and loses where it is a phrasing. We also report four negative results with their power calculations.

### Key Findings

*   **Compaction vs. Retrieval-Augmented Generation (RAG):** The study evaluates a novel compaction method for conversational memory against the standard RAG approach.
*   **Performance Metrics:** The compaction method achieved a higher accuracy score (71.4%) compared to RAG (64.6%) in comparable work reports, with a statistically significant lead (p = 5.5e-08) and 34% fewer prompt tokens.
*   **Impact of Answer Type:** The advantage of compaction diminishes on an adversarial set, especially when answers require more verbatim source wording. Compaction excels when the answer is a specific value but struggles when the answer is a phrasing.
*   **Memory Strategy:** Compaction prioritizes the asserted fact over the exact wording, while RAG retains the full transcript for searching.
*   **Negative Results:** Four negative results with their power calculations are also reported, though details are not provided in the abstract.