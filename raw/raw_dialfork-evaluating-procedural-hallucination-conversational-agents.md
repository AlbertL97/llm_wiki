Authors: No authors listed in the provided text.
Date: 2026-10-17 (based on URL structure)

Summary:
This paper addresses a critical failure mode in conversational agents, termed 'procedural hallucination,' which has been overlooked compared to factual hallucination. Procedural hallucination occurs when an agent's utterances are linguistically coherent and factually accurate but deviate from the intended conversational flow or procedure.

The authors introduce 'DialFork,' the first benchmark designed to specifically measure this procedural hallucination using raw dialogue text. DialFork is constructed by creating variations of conformant dialogues by injecting specific types of procedural deviations at controlled points. The benchmark comprises 36,278 dialogues across 24 tasks in 12 domains and was validated by 30 human annotators.

DialFork supports three evaluation tasks targeting different granularities of procedural deviation:
1.  **Monitoring deployed agents:** Assessing how much a set of dialogues deviates from conformant ones.
2.  **Procedural retrieval:** Evaluating the deviation of a single dialogue.
3.  **Real-time guardrails:** Identifying the exact turn at which a dialogue first deviates from the intended process.

To address the challenge of evaluating procedural similarity, the paper proposes two new dialog-flow-aware metrics: FlowKL and FlowScore. These metrics focus on the unfolding of dialogues rather than just their content. Experimental results demonstrate that FlowScore significantly outperforms existing baselines across various encoders, proving that semantic similarity is insufficient for capturing procedural similarity in conversational agents.

The DialFork benchmark and its associated metrics are released under the MIT license to encourage the research community to consider conversational process alongside content in their evaluations.