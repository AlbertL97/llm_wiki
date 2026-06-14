# Source: When AI builds itself

**Summary**: A summary page for Anthropic's "When AI builds itself" article. It documents the empirical evidence and metrics of recursive self-improvement within Anthropic, detailing agent evolution stages, software development metrics (80% code contribution, 8x developer volume, automated reviews), superhuman optimization loops, weak-to-strong supervision experiments, and pause verification policy proposals.

**Sources**:  
- When AI builds itself.md

**Last updated**: 2026-06-06

---

## Main content

This article outlines Anthropic's transition toward delegating AI development to AI systems themselves, detailing capability trajectories, internal lab productivity metrics, and the governance requirements for recursive self-improvement (source: When AI builds itself.md).

### 1. Definitions and Agent Evolution Timeline
Anthropic outlines the path toward **recursive self-improvement**—an AI system capable of fully autonomously designing and developing its own successor—tracking a five-stage evolution timeline (source: When AI builds itself.md):
1. **2021–2023 (Early Claude Development)**: Work was characterized by traditional software workflows: human engineers writing code and documentation on laptops (source: When AI builds itself.md).
2. **2023–2025 (Chatbots)**: Engineers used early chatbots to assist with coding tasks, generating short code snippets for humans to copy and paste into text editors (source: When AI builds itself.md).
3. **2025–2026 (Coding Agents)**: More capable agent systems began writing and editing code autonomously, editing and creating entire files (source: When AI builds itself.md).
4. **Today (Autonomous Agents)**: Agents can run code themselves, debug errors, and delegate hours of work to other agents (source: When AI builds itself.md).
5. **Future (Closing the Loop)**: Future agents could become capable enough to build and train models themselves, enabling Claude to be continuously improved by Claude (source: When AI builds itself.md).

### 2. dışsal Hızlanma Kanıtları (Public Benchmarks)
Model capability trajectories show rapid acceleration (source: When AI builds itself.md):
- **Task Horizons**: The time horizon of software tasks a model can reliably complete on its own is doubling roughly every four months (down from a seven-month doubling rate in 2025). Claude Opus 3 (March 2024) completed 4-minute human tasks; Claude Sonnet 3.7 (March 2025) completed 1.5-hour tasks; and Claude Opus 4.6 (March 2026) managed 12-hour tasks. Tasks taking days or weeks are projected to fall within range in 2026 and 2027 (source: When AI builds itself.md).
- **Benchmark Saturation**: Standard tests of software engineering (SWE-bench, bugs fixing on open-source codebases) and paper replication (CORE-bench, reproducing code and data of published papers) have gone from low single-digit success rates to near 100% saturation in under two years (source: When AI builds itself.md).

### 3. Internal Engineering Metrics at Anthropic
Internal data from Anthropic demonstrates the concrete acceleration of model development (source: When AI builds itself.md):
- **Claude Code Contribution**: As of May 2026, **more than 80%** of code merged into Anthropic's production codebase is authored by Claude (CFO estimates exceed 90% if scripts and experimental code are included) (source: When AI builds itself.md).
- **8x Developer Output**: Due to Claude writing the code and humans shifting to steering/reviewing, the typical Anthropic engineer was merging 8× as much code per day in Q2 2026 compared to the 2021-2024 baseline.
- **GitHub Infrastructure Strain**: The surge in AI-generated code has strained global version-control infrastructure. GitHub commits climbed from 1 billion in 2025 to a projected 14 billion in 2026 (275 million commits per week by mid-2026), forcing capacity upgrades (source: When AI builds itself.md).
- **Exploratory Tooling and Cleanup**: Claude excels at painstaking, context-heavy code cleanup. In April 2026, Claude shipped 800+ fixes that reduced a class of API errors 1000x—a task estimated to take a human developer four years to complete (source: When AI builds itself.md).
- **Automated Reviews**: Proposed changes at Anthropic are analyzed by an automated Claude reviewer that checks for bugs and security flaws. Retrospective analysis showed this automated audit would have caught one-third ($33\%$) of past production defects on claude.ai before release (source: When AI builds itself.md).

### 4. Internal Research and Optimization Metrics
AI assistance has extended into optimization and research direction (source: When AI builds itself.md):
- **Superhuman Code Optimization**: Tested on making small model-training runs execute as fast as possible, Claude Mythos Preview achieved a **52x speedup** in April 2026 (compared to Claude Opus 4's 3x in May 2025). A skilled human researcher requires four to eight hours to achieve a 4x speedup on the same code (source: When AI builds itself.md).
- **End-to-End Safety Research**: In an open-ended research project on weak-to-strong supervision (recovering the performance gap between a weak supervisor and a strong model), Claude-powered agents were left to run the project. Human researchers closed 23% of the gap over a week; Claude agents closed 97% of the gap over 800 cumulative hours ($18,000 compute), designing all experiments themselves (source: When AI builds itself.md).
- **Research Next-Step Judgement**: When tested on proposing the right next step in open-ended investigations (where humans had made suboptimal detours), Claude Mythos Preview beat the human choice 64% of the time, compared to Opus 4.5's 51% (source: When AI builds itself.md).

### 5. Organizational Amdahl's Law
Speeding up code writing and experiment running shifts bottlenecks to other areas of the pipeline (source: When AI builds itself.md):
- **Friction Shifts**: Amdahl's Law dictates that overall development speed is capped by the slowest un-automated parts. At Anthropic, human code review has become the new bottleneck, alongside the explosion of new initiatives and simulations that exceed human capacity to process.
- **Human Comparative Advantage**: The comparative advantage of humans is narrowing to research taste, direction-setting, evaluating which problems matter, and deciding which results to trust (source: When AI builds itself.md).

### 6. Pause Verification Regimes
If full recursive self-improvement poses existential risks of human control loss, coordination is required (source: When AI builds itself.md):
- **Verification Challenges**: Pausing or slowing down AI development requires global coordination and verification. Verification is highly challenging compared to nuclear arms control because training runs are easy to conceal, hardware inputs are general-purpose, and the incentive to defect quietly is enormous (source: When AI builds itself.md).
- **Coordination**: Unilateral pauses only change which lab holds the lead. The Anthropic Institute is actively researching verification systems that would allow labs to confirm that others have paused, enabling coordination under competitive and geopolitical pressures (source: When AI builds itself.md).

## Related pages

- [[metacognitive-agent-architectures]]
- [[trust]]
- [[human-ai-interaction]]

