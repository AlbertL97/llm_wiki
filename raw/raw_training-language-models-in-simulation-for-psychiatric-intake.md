# Training language models in simulation for psychiatric intake

**Authors:** N/A (Based on provided URL format, authors are typically listed on the arXiv page)
**Date:** 2026-10-25 (Derived from the URL's date component)

## Summary of Findings:

This paper explores the use of multi-turn reinforcement learning (RL) in simulation environments to enhance the performance of language models (LMs) in structured text-based psychiatric intake interviews. The primary goal was to improve the LM's ability to perform tasks such as history-taking, differential diagnosis, and initial management planning.

### Key Experiments and Results:

*   **Training Methodology:** Language models were trained using multi-turn reinforcement learning (RL) within simulated environments specifically designed for psychiatric intake.
*   **Comparison Study:** A randomized, double-blind crossover study ($N = 60$ matched scenario pairs, 120 encounters) was conducted. An RL-trained agent was compared against its identically prompted base model.
*   **Participants:** 32 board-certified psychiatrists acted as standardized patients, and 15 independent board-certified psychiatrists scored the de-identified transcripts.
*   **Performance Gains:**
    *   The RL-trained agent outperformed the base model in 76.7% of matched scenario pairs ($p < 0.0001$).
    *   Significant improvements were observed on an adapted clinical-examination rubric ($d_z = 0.77$, $p < 0.0001$).
    *   Patient-centered communication scores were higher for the trained agent (82.0% vs. 65.2%, $p < 0.001$).
    *   Differential diagnosis appropriateness was also significantly better (68.3% vs. 33.3%, $p < 0.001$).
*   **Overall Clinical Rubric Score:** The trained agent nearly doubled the base model's clinical rubric score (0.706 vs. 0.379) and composite reward (0.564 vs. 0.294) across 127 psychiatrist-validated scenarios ($p < 0.0001$).
*   **Conversational Safety:**
    *   Two Delphi-consensus taxonomies for clinical safety risks and relational competencies were established.
    *   256 challenging adversarial presentations were derived from these taxonomies.
    *   Training in simulation environments more than halved the under-triage of acute safety risks (12.9% vs. 30.5%, $p < 0.0001$).

### Conclusion:

Simulation environments serve as a valuable controlled testbed for training and stress-testing psychiatric conversational agents. The RL-trained agents showed improved clinical performance and safety in simulated psychiatric intake encounters, with gains that transferred to psychiatrist-enacted scenarios. However, residual gaps necessitate the implementation of safeguards and continued clinician oversight.