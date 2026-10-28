Authors: N/A (Source is an arXiv preprint, often author names are not included in initial abstract/description)
Date: 2026-10-28 (Assumed based on prompt)
Title: Penny for Your Prompts: A Measurement Study of Contextual Leakage in AI Chat Platforms
URL: http://arxiv.org/abs/2610.37467v1

Summary:
AI chatbot platforms are increasingly used for sharing personal and intimate information, with users expecting privacy. However, these platforms can embed third-party analytics, advertising, and session replay scripts that can lead to conversational data leakage. This study presents the first large-scale measurement of contextual leakage in AI chatbots, examining 42 platforms. The research instruments the browser at the JavaScript engine level to precisely attribute data flows to user actions and DOM capture mechanisms, offering a finer granularity than network-layer analysis alone. Key findings include:

*   21 out of 42 platforms leak conversation titles to third-party trackers.
*   9 platforms leak verbatim user prompts to third-party trackers.
*   A significant number of platforms send user emails to third-party trackers, allowing the association of conversational context with user identity.

These findings highlight significant privacy issues inherent in user interactions with modern AI chatbots, challenging traditional web privacy assumptions and impacting user trust and the perceived safety of these platforms.