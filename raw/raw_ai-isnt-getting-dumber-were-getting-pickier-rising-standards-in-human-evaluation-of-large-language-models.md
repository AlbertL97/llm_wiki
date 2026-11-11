# AI Isn't Getting Dumber, We're Getting Pickier: Rising Standards in Human Evaluation of Large Language Models

**Authors:** Andrew M. Dai, Yi Zhang, Yiqing Xie, Anya Qiu, Long Ouyang, Yuandong Tian, Yordanos Geros, Jiawei Li, Chenghao Guo, Yangyang Wu, Xiaoman Qin, Ting Chen, Jian Tang, Yuan Cao, D_A_L_I_A_L_a_m, Jianfeng Gao, Hang Li

**Date:** 2026-11-11 (based on arXiv version date)

## Findings

*   **Problem:** Users frequently report that AI assistants, such as ChatGPT, are degrading in performance. This perception raises questions about whether the AI itself is worsening or if user expectations are shifting.

*   **Methodology:** The study analyzes 1,260,967 blind votes from May 2023 to August 2024 on Chatbot Arena, a platform where users compare answers from two anonymous, fixed versions of Large Language Models (LLMs) and choose the better one or flag both as bad.

*   **Key Finding 1: Rising User Standards:** For unchanged pairs of LLMs, the proportion of votes indicating 'both are bad' has increased significantly over time (by 1.71 percentage points per month on average in 2023, and 1.91 points per month in 2024). This trend was observed consistently across various LLM pairs, languages, model types (vendor snapshots, open weights), and even interface changes.

*   **Key Finding 2: Stable Relative Comparisons:** Despite the rise in absolute negative judgments, the relative rankings of LLMs have remained stable. The stronger model's share of decisive votes did not trend upwards, suggesting that users are still able to differentiate between better and worse models, but their threshold for accepting an answer as "good enough" has increased.

*   **Key Finding 3: Evaluation Drift:** The observed pattern aligns with a phenomenon where standards increase in line with category progress. As LLMs improve overall, users' expectations rise, and models that remain static are perceived as declining even if their absolute performance hasn't changed.

*   **Implications:** This evaluation drift has significant implications for LLM leaderboards, which rely on human feedback. It also impacts the process of training models, as the human feedback used may reflect these shifting standards rather than absolute performance changes.