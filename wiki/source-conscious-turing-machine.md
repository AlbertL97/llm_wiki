# Source: The Conscious Turing Machine (CTM), a formally defined Theoretical model of Consciousness

**Summary**: A summary page for Manuel Blum's Simons Institute lecture on the Conscious Turing Machine (CTM). It outlines the LTM/STM architecture, the randomized winner-take-all tournament, Brainish language, the sleeping experts algorithm, and the computational model of suffering and pain asymbolia.

**Sources**:  
- The Conscious Turing Machine (CTM), a formally defined Theoretical model of Consciousness.md

**Last updated**: 2026-06-06

---

## Main content

This lecture transcript outlines Manuel Blum and Lenore Blum's formal, computer science-based model of consciousness, designed to define consciousness mathematically and investigate how physical suffering arises in a deterministic or probabilistic machine (source: The Conscious Turing Machine (CTM), a formally defined Theoretical model of Consciousness.md).

### 1. The CTM Architecture and Metaphor
The Conscious Turing Machine (CTM) is designed to understand consciousness the way the classical Turing machine was designed to understand computability (source: The Conscious Turing Machine (CTM), a formally defined Theoretical model of Consciousness.md):
- **Occam's Razor Simple**: The model is kept as simple as possible. It has no central executive (which the Blums argue is a flaw in other models, as a central executive cannot manage millions of processors' capabilities).
- **Short-Term Memory (STM)**: The stage in Bernard Baars' Global Workspace Theory. It is a buffer that holds exactly one chunk at a time. The CTM is conscious only of the chunk currently broadcast from the stage.
- **Long-Term Memory (LTM)**: The audience of $2^H$ processors (where $H=24$, representing roughly 10 million processors).
- **Up-Tree (Competition)**: A binary tree structure that hosts a competition 10 times per second (ticks representing the alpha rhythm) to select the winning chunk.
- **Down-Tree (Broadcast)**: Fast broadcast of the winning chunk from STM to all LTM processors simultaneously.
- **Indirect World Awareness**: The CTM is not conscious of the physical world directly. Input processors translate sensory stimuli (vision, sound, pain) into short phrases in a self-defined language called **Brainish**. The CTM is conscious only of these Brainish chunks.
- **Links**: Two-way communication links between processors. No links exist at birth; they are established through conversations conducted via STM. Only 1 in 1,000 potential links can exist due to physical neural constraints.

### 2. Winner-Take-All Tournament Theorem
The CTM utilizes a randomized tournament structure to select the stage speaker (source: The Conscious Turing Machine (CTM), a formally defined Theoretical model of Consciousness.md):
- **Proportional Win Probability**: The theorem states that in the CTM's binary competition tree, the probability of any processor's chunk winning the tournament is exactly its weight divided by the sum of all weights ($W_i / \sum W_j$), regardless of the processor's location in the tree.
- **Mathematical Cancellation**: The proof relies on intermediate node sums canceling out at each level of the binary tree (e.g., $(W_A / (W_A + W_B)) \times ((W_A + W_B) / \sum W) = W_A / \sum W$).
- **Anti-Monopoly Safeguard**: A deterministic "maximum weight wins" algorithm would allow a slightly heavier processor to permanently hog the stage. The randomized tournament ensures that every processor has a chance to speak proportional to its weight, allowing alternative thoughts to enter consciousness.

### 3. The Sleeping Experts Weight Calibration
To ensure processors remain "honest" and do not inflate their weights to dominate the stage, the CTM integrates a learning mechanism (source: The Conscious Turing Machine (CTM), a formally defined Theoretical model of Consciousness.md):
- **Sleeping Experts Algorithm**: Derived from the machine learning work of Avrim Blum, Nina Balcan, and others.
- **Decentralized Calibration**: Because the CTM has no central teacher or executive to evaluate answers, each processor has a sleeping expert that monitors its contributions. The algorithm tamps down the weights of over-eager/inaccurate processors and raises under-eager/accurate ones, converging to correct weights over time.

### 4. Suffering, Brainish Labels, and Pain Asymbolia
The Blums distinguish the "easy problem" of detecting damage from the "hard problem" of actual suffering (source: The Conscious Turing Machine (CTM), a formally defined Theoretical model of Consciousness.md):
- **Primal Subjective Experience**: Evoked when CTM inspects a chunk `(Processor, Time, Gist, Weight)` with a `Gist` of `nil`. The experience is determined by the specific processor and time, creating the first Brainish words for `pain` (from oxygen gauges during flailing birth) and `self`.
- **The Suffering Mechanism**: Suffering occurs when a chunk with a high negative weight ($W < \theta$) wins and is broadcast. This extreme weight dominates STM, making it mathematically impossible for other chunks to win the tournament. All processors are forced to stop what they are doing to resolve the pain, rendering the machine incapable of normal thought.
- **Pain Asymbolia**: A clinical disorder where a patient knows they have pain but does not suffer. The CTM explains this by the attachment of Brainish labels in the world model:
  1. *Missing `pain` label*: The patient is conscious of self and damage but not pain (Nikola Grahek's view).
  2. *Missing `self` label*: The patient is conscious of pain but detached from it, feeling as if it belongs to someone else (Colin Klein's view).
  The CTM predicts that neuroscientists will confirm the existence of these two distinct forms of pain asymbolia.

### 5. Resolution of the Homunculus Problem
Introspection often creates the illusion of a "homunculus" (a little person looking out through the eyes). The CTM resolves this: because all LTM processors receive the identical broadcasted chunk at the exact same tick, they are all synchronized. This **simultaneous reception** creates a unified, unitary conscious experience without requiring a physical central observer.

## Related pages

- [[mind-perception]]
- [[introspective-awareness]]
- [[chatbots]]
- [[anthropomorphism]]
- [[source-hinton-consciousness]]
- [[source-sejnowski-consciousness]]
- [[source-bees-chatgpt-consciousness]]
