**Authors:** Jianing Zhu, Chen Qian, Yifei Zhang, Rui Zhao, Jing Du, Bo Li, Jiaming Zhang, Xingjian Zhao, Rui Zhang, Yifan Ding, Linjun Zhang, Yongming Tang, Guohao Li, Jiayu Chen, Li Dong, Furu Wei
**Date:** 2026-11-21
**Title:** EvoLink-Bench: A Benchmark for Evaluating Self-Evolving Agents in Long-Horizon Interdependent Task Streams

**Description:**
Large language model (LLM) agents are transitioning from simple chatbots to autonomous systems capable of continuous operation in dynamic environments. A key challenge for these agents is the ability to learn from past interactions to enhance future performance, especially when tasks are interdependent over extended periods. Existing benchmarks often fall short by focusing on short or independent task sequences, providing insufficient insight into an agent's capacity for experience reuse in dependent task streams.

**EvoLink-Bench Introduction:**
To address this gap, the authors introduce EvoLink-Bench, a benchmark specifically designed for evaluating self-evolving agents operating within long-horizon, interdependent task streams. The benchmark encompasses a variety of real-world scenarios, including daily office work, multi-turn dialogue, and AutoResearch-style workflows, featuring persistent workspaces and dependencies between tasks.

**Benchmark Levels:**
EvoLink-Bench comprises two complementary evaluation levels:
*   **L1 (Knowledge Acquisition and Revision):** Assesses how agents acquire and revise language-expressible knowledge.
*   **L2 (Task-Level Capability Development):** Evaluates the development of task-specific capabilities through execution and feedback.

**Evaluation Distinctions:**
The evaluation methodology further distinguishes between:
*   Within-task recovery (recovering from immediate failures).
*   Persistent-state updates (updating internal states across tasks).
*   Experience reuse (applying lessons learned from earlier tasks to later ones).

**Experimental Setup and Findings:**
The study evaluates five distinct agent frameworks across three different backbone configurations and under three persistence conditions. This comprehensive evaluation covers 19,635 scored task slots from selected cohorts.

**Key Findings:**
*   **No Single Best Framework:** No single agent framework consistently outperformed others across both L1 (knowledge) and L2 (capability) levels. This suggests that different architectures or learning strategies might be required for different aspects of agent evolution.
*   **Limited Impact of Retries:** Retries (re-attempting failed tasks) were only able to recover a limited proportion of tasks, indicating that simple recovery mechanisms are insufficient for robust performance.
*   **State Updates vs. Performance:** Persistent-state updates did not necessarily lead to improved performance on subsequent tasks. This implies that the way information is stored, accessed, and utilized from previous states is crucial, rather than just the persistence itself.
*   **Divergent Evolution Types:** The effects of agent evolution differed significantly between knowledge-level tasks (L1) and capability-level tasks (L2). This suggests that the underlying learning mechanisms for acquiring knowledge and developing task skills are distinct and may need separate attention.
*   **Domain and Task Specificity:** Performance gains and the effectiveness of evolution varied across different domains and task streams. Improvements observed in one set of tasks did not automatically generalize to others, highlighting the challenge of creating broadly capable and adaptable agents.

**Implications:**
The findings underscore the complexity of developing truly self-evolving AI agents. They point to the need for more sophisticated learning mechanisms that can effectively manage interdependent tasks, integrate knowledge and skills, and generalize learning across diverse domains.