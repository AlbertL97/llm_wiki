# When Robots Rate Their Own Interactions: Engagement Validity and the Strangeness Failure

**Authors:** None provided in the prompt.
**Date:** 2026-06-23 (based on URL version and prompt date)

## Abstract
Human-robot interaction (HRI) evaluation relies almost exclusively on human-completed questionnaires, leaving the robot's perspective unexamined. We propose an \textit{inverted evaluation}, in which LLM-powered robots complete the same standardized instruments from their own perspective, and test whether these ratings agree with human ground truth.

## Study 1
*   Five LLMs completed HRI-CUES, Godspeed, and RoSAS questionnaires for 25 interactions (N = 1,522 evaluations) from the HRI-CUES dataset.
*   LLMs achieved moderate-to-strong agreement on engagement dimensions (satisfaction r up to .65 and enjoyment r up to .72) with excellent test-retest reliability (ICC \geq .82).
*   LLMs *systematically inverted* the comfort/strangeness dimension (r = -.44 to -.67, all p < .05), conflating engagement with comfort.

## Study 2
*   A Nao robot running Claude Sonnet 4.5 replicated these patterns in live interactions (N = 4), including real-time turn-by-turn assessment.
*   The strangeness failure persisted across five models, synthetic controls, and embodied deployment for two participants.

## Discussion & Conclusion
*   Current LLM-based robots lack access to the internal affective states needed to assess constructs like strangeness.
*   Inverted evaluation requires supplementary modalities (e.g., physiological signals, gaze, proxemics) to move beyond behavioral proxies.
*   These findings establish boundary conditions for using LLMs as interaction evaluators in HRI.
