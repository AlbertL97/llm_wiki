# TokWatt: an open, boundary-annotated database of AI inference energy, from chat answers to agents

**Authors:** Araouf Bhuiyan, Jonathan Stines, Joshua P. Smith, R. Stuart Geiger

**Date:** 2026-10-24

**Abstract:**
Electricity supply is becoming a binding constraint on the deployment of artificial intelligence (AI), yet public evidence on the energy used by a single AI task is scattered and hard to compare. Published figures for one chatbot answer differ by two orders of magnitude, largely because studies count different parts of the system and measure different units of work. We present TokWatt, an open database of 134 published estimates of AI inference energy drawn from 13 sources (2023-2026) and covering 20 tasks, from classic machine-learning inferences to chat answers, reasoning answers, long-document queries, image and video generation, and coding agents. Each estimate records its functional unit, five measurement-boundary components, method, reported interval, and the location of the value in its source. A reproducible procedure scales estimates to a common server-plus-facility boundary and derives per-task reference values with ranges. The reference values span six orders of magnitude: 0.34 Wh for a short chat answer (range 0.16-0.99 Wh), 4.7 Wh for a reasoning answer, 124 Wh for a short video clip, and 150 Wh for one task delegated to a coding agent. Five independent estimates for default production chat systems agree within a factor of 1.8, and the reference values shift by at most 12% under alternative harmonization parameters. A simple identity links personal use to grid load: E watt-hours per person per day across one billion people corresponds to an average draw of E/24 gigawatts. Data and code are released at https://github.com/AraoufBh/tokwatt, and an online calculator at https://araoufbh.github.io/tokwatt/.

**Key Findings:**

*   **Problem:** The energy consumption of AI tasks is highly variable and difficult to compare due to differing measurement boundaries and units.
*   **Solution:** TokWatt is an open database of 134 published AI inference energy estimates from 13 sources, covering 20 different AI tasks.
*   **Scope:** Includes estimates for chat answers, reasoning, document queries, image/video generation, and coding agents.
*   **Methodology:** Each estimate includes functional unit, measurement boundary components, method, and source location. TokWatt harmonizes estimates to a common server-plus-facility boundary.
*   **Results:** Reference values for AI tasks span six orders of magnitude.
    *   Short chat answer: 0.34 Wh (range 0.16-0.99 Wh)
    *   Reasoning answer: 4.7 Wh
    *   Short video clip: 124 Wh
    *   Coding agent task: 150 Wh
*   **Consistency:** Independent estimates for default production chat systems agree within a factor of 1.8.
*   **Implications:** A simple formula relates personal AI energy use to grid load (E Wh/person/day across 1 billion people ≈ E/24 GW average draw).
*   **Accessibility:** Data, code, and an online calculator are publicly available.

**Data Availability:** https://github.com/AraoufBh/tokwatt
**Online Calculator:** https://araoufbh.github.io/tokwatt/