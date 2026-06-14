# Source: Humanity's Last Exam

**Summary**: A summary page for "Humanity's Last Exam" (HLE), an advanced multimodal academic benchmark published in *Nature* (2026) that evaluates frontier large language models on expert-level academic questions and calibration error.

**Sources**:  
- Humanity's Last Exam.md

**Last updated**: 2026-06-04

---

## Main content

This source presents the **Humanity's Last Exam (HLE)** dataset and benchmark, which was published in *Nature* (Nature 649, 1139–1146, 2026) (source: Humanity's Last Exam.md). HLE is designed as a highly challenging, closed-ended academic benchmark to track LLM progress at the frontier of human knowledge, addressing the saturation of older benchmarks like MMLU.

Key facts and metrics extracted from the source include:
- **Dataset Scale**: Consists of 2,500 multimodal questions across more than a hundred academic subjects, compiled by nearly 1,000 subject matter expert contributors from over 500 institutions across 50 countries (source: Humanity's Last Exam.md).
- **Overfitting Safeguards**: The public dataset is released openly, but the benchmark maintains a private test set of held-out questions to evaluate model overfitting (source: Humanity's Last Exam.md).
- **Frontier LLM Benchmarks (as of April 3rd, 2025)**:
  - Models perform poorly on accuracy while exhibiting very high confidence calibration errors (source: Humanity's Last Exam.md):
    - **Gemini 3 Pro**: 38.3% Accuracy | 57.2% Calibration Error
    - **GPT-5**: 25.3% Accuracy | 50.0% Calibration Error
    - **Grok 4**: 24.5% Accuracy | 56.4% Calibration Error
    - **Gemini 2.5 Pro**: 21.6% Accuracy | 72.0% Calibration Error
    - **GPT-5-mini**: 19.4% Accuracy | 65.0% Calibration Error
    - **Claude 4.5 Sonnet**: 13.7% Accuracy | 65.0% Calibration Error
    - **Gemini 2.5 Flash**: 12.1% Accuracy | 80.0% Calibration Error
    - **DeepSeek-R1 (text-only subset)**: 8.5% Accuracy | 73.0% Calibration Error
    - **o1**: 8.0% Accuracy | 83.0% Calibration Error
    - **GPT-4o**: 2.7% Accuracy | 89.0% Calibration Error
- **Miscalibration Definition**: Measures the discrepancy between the model's self-reported confidence (from 0% to 100%) and its actual accuracy (source: Humanity's Last Exam.md).

The extremely low accuracy and high calibration errors across all frontier models highlight a substantial gap between LLMs and expert-level academic performance.

## Related pages

- [[trust]]
- [[measurement-tools]]
