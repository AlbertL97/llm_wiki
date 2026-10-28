# Penny for Your Prompts: A Measurement Study of Contextual Leakage in AI Chat Platforms

Last updated: 2026-10-28

## Summary

This research investigates the privacy vulnerabilities of AI chatbot platforms by conducting a large-scale measurement study of contextual data leakage. The study found that many popular AI chatbot platforms share sensitive conversational data, including user prompts and titles, as well as user emails, with third-party trackers. This leakage occurs without explicit user consent and undermines the expectation of privacy users have when interacting with these platforms, raising significant concerns about trust and data security.

## Key Findings

*   **Widespread Data Leakage:** A systematic study of 42 AI chatbot platforms revealed significant instances of data leakage to third-party trackers.
*   **Leakage of Conversational Content:**
    *   21 platforms were found to leak conversation titles to third parties.
    *   9 platforms were observed to leak verbatim user prompts.
*   **Association with User Identity:** A substantial number of platforms transmit user emails to third-party trackers, enabling the linkage of private conversations with identifiable user information.
*   **Methodology:** The study employed advanced browser instrumentation at the JavaScript engine level, offering granular attribution of data flows to specific user actions and DOM capture, surpassing the limitations of traditional network-level analysis.

## Implications

The findings underscore critical privacy risks associated with the widespread adoption of AI chatbots. The leakage of personal and conversational data to third parties compromises user privacy, erodes trust in AI platforms, and necessitates a re-evaluation of privacy safeguards in human-AI interaction.

## Sources

*   Penny for Your Prompts: A Measurement Study of Contextual Leakage in AI Chat Platforms (http://arxiv.org/abs/2610.37467v1)

## Related pages

*   [[trust]]
*   [[human-ai-interaction]]
*   [[chatbots]]
*   [[measurement-tools]]