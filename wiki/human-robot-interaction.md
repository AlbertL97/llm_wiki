# Human-Robot Interaction

**Summary**: The core concept hub for the study of communication, collaboration, and psychological dynamics between humans and robots. It details emergency response applications, the mind-motor-machine nexus, exoskeleton interactions, robotic visual benchmarking, customizable social interfaces, advanced turn-taking capabilities for natural multiparty interactions, developmental motor learning through bidirectional tutoring, and novel methods for embodied spatial data physicalization using acoustics. The success of Physical AI, particularly humanoid robots, hinges on robust data standards for capturing and sharing embodied experiences. This also includes understanding the impact of security and privacy controls on user engagement, particularly for AI chatbots used for emotional support. Furthermore, the quality of a robot's movement significantly influences user comfort and acceptance, beyond its visual appearance. The integration of Automatic Speech Recognition (ASR) is identified as crucial for enabling intuitive, natural human-robot interaction, with a growing interest in localized ASR solutions as an alternative to cloud-based APIs, exploring various deployment strategies like ROS-based, cloud-based, and hybrid approaches. Recent advancements include robotic systems for assessing physical frailty and fall-risk indicators in older adults, offering objective biomechanical insights. New research also focuses on enabling robots to participate in physical activities with humans, such as synchronized juggling, showcasing advancements in real-time planning for dynamic object exchange and shared autonomy. A recent development addresses the fragmentation in the Human-Robot Interaction (HRI) layer of Generative AI (GenAI) powered robotic systems by proposing the Agent-Client Protocol (ACP) as a unified communication standard for seamless, real-time human-in-the-loop collaboration. This approach structures GenAI robotic architectures into three layers: human interaction, deliberative orchestration (using GenAI agents), and physical execution, enabling interoperability, easier robot upgrades, and native support for collaborative HRI features.

**Sources**:
- Human Robot Interactions.md
- iCubWorld.md
- Welcome to Furhat Robotics.md
- Humans are starting to grow emotionally attached to robots.md
- On What Emotional Attachment to Robots Might Mean for the Future.md
- (1) (PDF) Comparing Objective and Subjective Measures of Usability in a Human-Robot Dialogue System.md
- Capturing Mental Workload Through Physiological Sensors in Human-Robot Collaboration_ A Systematic Literature Review.md
- Physiological sensing for situational awareness_ a theory-driven integrative review of multimodal and unsupervised approaches for visual search and human-autonomy teaming.md
- The Godspeed Questionnaire Series in the Assessment of the Social Robot TIAGo by Older Individuals.md
- Active interaction strategy generation for human-robot collaboration based on trust.md
- Trust in Autonomous Human-Robot Collaboration_ Effects of Responsive Interaction Policies.md
- Beyond Usability - Withdrawal Design in Social Robotics.md
- raw_muvap-turn-taking-prediction.md
- raw_data-standards-for-humanoid-robotics-the-missing-infrastructure-for-physical-ai.md
- raw_bidirectional-tutoring-for-developmental-motor-learning-in-robots.md
- raw_llm-mediated-human-ai-interaction-in-search-and-rescue-impact-of-expertise-on-attentional-allocation.md
- raw_seeing-through-occlusion-deterministic-arm-kinematic-correction-for-robot-teleoperation.md
- raw_toward-personalized-social-robots-for-child-well-being-data-requirement-principles-from-a-recommender-system-perspective.md
- raw_embodied-human-robot-interaction-via-acoustics-a-marl-approach-with-acousto-bots-for-spatial-data-physicalization.md
- raw_the-impact-of-security-and-privacy-controls-on-users-emotional-engagement-with-generative-ai-chatbots.md
- raw_a-new-human-likeness-and-comfort-index-for-robot-movements-along-prescribed-paths.md
- raw_casting-everything-to-online-api-services-a-survey-of-integrating-localized-speech-recognition-models-in-robotic-systems.md
- raw_assessing-physical-frailty-and-fall-risk-indicators-with-social-robots.md
- raw_catch-throw-repeat-planning-for-human-robot-partner-juggling.md
- raw_human-robot-interaction-in-genai-architectures-via-the-agent-client-protocol.md
- raw_physics-informed-diffusion-biomechanically-plausible-3d-sign-language-generation.md

**Last updated**: 2026-07-19

---

## Main content

**Human-Robot Interaction (HRI)** is an interdisciplinary field dedicated to understanding, designing, and evaluating robotic systems for use by or with humans. While human-AI interaction often focuses on virtual, disembodied agents, HRI is characterized by physical embodiment, real-world agency, and co-present spatial collaboration (sources: Human Robot Interactions.md; iCubWorld.md). The evolution towards "Physical AI," where robots interact directly with the physical world, necessitates the development of robust data standards to facilitate the accumulation and sharing of embodied experiences across diverse robotic systems and tasks (source: raw_data-standards-for-humanoid-robotics-the-missing-infrastructure-for-physical-ai.md). Furthermore, understanding user engagement with AI systems, particularly those offering emotional support or companionship like generative AI chatbots, is crucial. The effectiveness of security and privacy (S&P) controls in these systems significantly impacts users' willingness to engage in emotionally sensitive disclosure, with deletion controls showing the most positive impact due to their clarity (source: raw_the-impact-of-security-and-privacy-controls-on-users-emotional-engagement-with-generative-ai-chatbots.md). Conversely, more technical controls like local-only processing are less effective due to comprehension challenges, highlighting the fragility of user trust which requires credible assurances and appropriate communication (source: raw_the-impact-of-security-and-privacy-controls-on-users-emotional-engagement-with-generative-ai-chatbots.md).

A significant challenge in integrating Generative AI (GenAI) into robotic systems lies in the fragmentation of the human-robot interaction (HRI) layer. To address this, the Agent-Client Protocol (ACP) is proposed as a unified communication standard. This standard facilitates seamless, real-time human-in-the-loop collaboration by establishing a clear communication contract, alongside the Model Context Protocol (MCP) for agent-execution (source: raw_human-robot-interaction-in-genai-architectures-via-the-agent-client-protocol.md). This approach enables a fully decoupled three-layer architecture: one for heterogeneous human interaction UIs, a second for deliberative orchestration using GenAI agents, and a third for physical execution by the robot (source: raw_human-robot-interaction-in-genai-architectures-via-the-agent-client-protocol.md). The benefits include interoperability across different user interfaces, simplified robot platform upgrades without affecting client-specific code, and native support for critical collaborative HRI features such as real-time observability, human authorization, and task interruption (source: raw_human-robot-interaction-in-genai-architectures-via-the-agent-client-protocol.md). Experimental validation on physical mobile robots has confirmed this architecture's interoperability and its effectiveness in supporting real-time human-in-the-loop workflows with minimal latency (source: raw_human-robot-interaction-in-genai-architectures-via-the-agent-client-protocol.md).

Beyond visual appearance, the quality of a robot's movement plays a critical role in its acceptance and perceived comfort during physical interaction. A novel "human-likeness index" quantifies the similarity of robot movements to human motion, based on the temporal characteristics of movements along prescribed paths and the principle of lognormality in human motion (source: raw_a-new-human-likeness-and-comfort-index-for-robot-movements-along-prescribed-paths.md). This index serves as an a priori tool to evaluate trajectory generation algorithms and predict their potential to produce human-like movements before physical implementation. Experimental validation has shown a strong correlation between user preference for comfort and this human-likeness index, suggesting that designing robots with human-like movement patterns can significantly enhance user comfort and acceptance in interactive scenarios (source: raw_a-new-human-likeness-and-comfort-index-for-robot-movements-along-prescribed-paths.md).

The integration of Automatic Speech Recognition (ASR) is a critical technology for enabling natural human-robot interaction (HRI) (source: raw_casting-everything-to-online-api-services-a-survey-of-integrating-localized-speech-recognition-models-in-robotic-systems.md). As an alternative or complement to cloud-based API services, localized ASR models are being explored for their benefits and feasibility (source: raw_casting-everything-to-online-api-services-a-survey-of-integrating-localized-speech-recognition-models-in-robotic-systems.md). This involves an overview of ASR technologies, including deep learning models like OpenAI's Whisper, and their deployment in intelligent robots via ROS-based, cloud-based, or hybrid approaches (source: raw_casting-everything-to-online-api-services-a-survey-of-integrating-localized-speech-recognition-models-in-robotic-systems.md).

Furthermore, social robots are being developed to assist in healthcare settings, particularly for the assessment of physical frailty and fall-risk indicators in older adults (source: raw_assessing-physical-frailty-and-fall-risk-indicators-with-social-robots.md). These systems guide older adults through standardized tests, capturing enhanced biomechanical data with high reliability and agreement compared to traditional clinical assessments and wearable sensors (source: raw_assessing-physical-frailty-and-fall-risk-indicators-with-social-robots.md). Such robotic frameworks demonstrate significant clinical utility for objective frailty assessments and collecting valuable mobility indicators in healthcare environments (source: raw_assessing-physical-frailty-and-fall-risk-indicators-with-social-robots.md).

A significant advancement in physical HRI involves enabling robots to participate actively in physical tasks with humans, such as synchronized juggling. A new real-time planning and control system has been developed to allow robots to reliably catch and throw balls in synchronized multi-ball patterns with human partners (source: raw_catch-throw-repeat-planning-for-human-robot-partner-juggling.md). This system integrates predictive ball tracking, adaptive online trajectory optimization, and state-machine-based coordination logic. User studies have demonstrated its effectiveness, with participants achieving record-breaking performance in three-ball cascade juggling, highlighting the potential for advancing physical human-robot interaction and shared autonomy (source: raw_catch-throw-repeat-planning-for-human-robot-partner-juggling.md).

Recent research in AI-driven motion generation for embodied agents is also contributing to more realistic and human-like interactions. A novel physics-informed diffusion model, PIDiffSign, has been introduced to generate biomechanically plausible 3D sign language motions from spoken language input (source: raw_physics-informed-diffusion-biomechanically-plausible-3d-sign-language-generation.md). This model addresses the limitations of previous methods that often produced anatomically incorrect movements by directly incorporating anatomical constraints into its architecture and training objectives. Through a differentiable geometry module, PIDiffSign enforces bone length consistency and biologically valid joint angles, leading to enhanced motion realism and improved semantic fidelity in generated sign language (source: raw_physics-informed-diffusion-biomechanically-plausible-3d-sign-language-generation.md). This advancement suggests a growing trend towards incorporating physical realism in AI-generated human-like motion, which has direct implications for HRI systems that rely on accurate and naturalistic human-like movements for effective communication and interaction.

### 1. HRI in Emergency and Disaster Response
Emergency response (ER) and disaster recovery settings represent high-stress environments that stress-test human-robot cooperation:
- **Augmentation Systems (LEARNER)**: The NSF-funded LEARNER framework explores context-sensitive combinations of collaborative ground robots, powered exoskeletons, and augmented reality (source: Human Robot Interactions.md). These tools augment human physical capacity and cognition while preserving human decision-making autonomy (source: Human Robot Interactions.md).
- **Operator States Under Stress**: Disaster recovery operations suffer from extreme fatigue, stress, and insufficient training (source: Human Robot Interactions.md). Collecting physiological and cognitive data from operators during crisis events (e.g. Hurricanes Harvey/Michael, Kilauea Volcano) helps construct robust HRI models that adapt system behaviors to degraded human states (source: Human Robot Interactions.md).
- **LLM Mediation in Search and Rescue (SAR)**: In simulated SAR environments, Large Language Model (LLM) guidance significantly enhanced task efficiency, leading to higher rewards and more victims found per step (source: raw_llm-mediated-human-ai-interaction-in-search-and-rescue-impact-of-expertise-on-attentional-allocation.md). However, this efficiency did not translate to an overall increase in saved victims (source: raw_llm-mediated-human-ai-interaction-in-search-and-rescue-impact-of-expertise-on-attentional-allocation.md). Eye-tracking revealed an "attention-guidance trade-off," with participants dedicating more visual attention to the chat interface and showing increased pupil size variability, suggesting cognitive shifts or load (source: raw_llm-mediated-human-ai-interaction-in-search-and-rescue-impact-of-expertise-on-attentional-allocation.md). The impact of LLM guidance was moderated by user expertise: novice users tended towards passive reliance, while expert users maintained an active "verification loop" by cross-referencing AI recommendations with their own observations (source: raw_llm-mediated-human-ai-interaction-in-search-and-rescue-impact-of-expertise-on-attentional-allocation.md). This highlights the importance of operators' capacity to critically evaluate AI guidance for maintaining situational awareness in critical tasks (source: raw_llm-mediated-human-ai-interaction-in-search-and-rescue-impact-of-expertise-on-attentional-allocation.md).

### 2. The AMELIA Work 4.0 Architecture (Mind-Motor-Machine Nexus)
To ensure safety and efficiency during collaborative work, HRI systems must monitor and adjust to the human user's state (source: Human Robot Interactions.md):
- **AMELIA Architecture**: Augments human cognition by classifying HRI tasks vulnerable to system failures and mapping the "mind motor machine nexus" (source: Human Robot Interactions.md).
- **Neurophysiological Capability Models**: The system monitors workload, cognitive load, fatigue, stress, and trust in real time (source: Human Robot Interactions.md).
- **AR Mutual Learning**: AMELIA integrates an augmented reality (AR) layer that allows humans and collaborative robots to mutually communicate and learn current states, modifying the robot's autonomy or the human's task load to prevent safety violations (source: Human Robot Interactions.md).

### 3. Human-Exoskeleton Neuroergonomic Fit
- **Biomechanical Joint Offloading**: Exoskeletons (passive or powered) reduce occupational injury risks by transferring biomechanical loading away from targeted joints (source: Human Robot Interactions.md).
- **Motor-Mind-Machine Mismatch**: Improving safety requires evaluating the "neuroergonomic fit" of exoskeletons during fatiguing tasks (source: Human Robot Interactions.md). Unsynchronized movements between human motor intentions, cognitive planning, and exoskeleton actuator response cause strain, reducing learnability, usability, and task productivity.

### 4. Robotic Visual Recognition Benchmarking (iCubWorld)
To cooperate effectively with humans, robots must possess reliable, real-world visual perception (source: iCubWorld.md):
- **Benchmarking Visual Vision**: Humanoid vision systems must recognize objects under varying conditions. The iCubWorld project benchmarks vision algorithms using images captured from the iCub humanoid robot's cameras (source: iCubWorld.md).
- **Natural HRI Data Collection**: Rather than relying on static internet datasets, iCubWorld utilizes an interactive HRI application (source: iCubWorld.md). A human teacher verbally labels objects and shows the robot in real time (source: iCubWorld.md).
- **Dual Acquisition Modalities**:
  - *Human Mode*: The teacher holds and moves the object; the robot tracks it using motion and depth cues (source: iCubWorld.md).
  - *Robot Mode*: The robot takes the object in its own hand, focusing on it using joint kinematics knowledge and self-supervision (source: iCubWorld.md).
- **Transformation Invariance**: To operate in complex human environments, models are trained on datasets representing isolated visual transformations (variations in rotation, scale, and illumination) to build invariance to real-world nuisances (source: iCubWorld.md).

### 5. Customizable Social Humanoids (Furhat)
Social robotics studies how physical embodiment and conversation cues trigger human social responses:
- **Physical Head Projection**: The Furhat social robot utilizes a back-projected 3D face engine combined with voice synthesis libraries (source: Welcome to Furhat Robotics.md). This allows developers to project real-time face textures of any age, ethnicity, or gender onto the physical head unit (source: Welcome to Furhat Robotics.md).
  - *Multi-Party Interaction*: Camera-based face tracking allows the robot to track multiple individuals simultaneously in real time (source: Welcome to Furhat Robotics.md). This enables multi-party interactions, where the robot can shift its gaze, distribute its attention, and direct conversation to different people in a shared space.

### 6. Usability and Dialogue in Collaborative Assembly (JAST)
Task-based collaborative HRI (such as wooden toy building using the JAST robot dialogue system) requires coordinating speech, facial displays, and manipulator gestures. Usability in these systems is evaluated by correlating objective metrics with subjective satisfaction:
- **Dialogue Repetitions**: Having to ask the robot to repeat instructions has a significant negative correlation with user satisfaction, indicating that speech recognition errors or unclear descriptions severely degrade HRI usability.
- **Dialogue Length**: Total dialogue turns correlate positively with satisfaction, showing that users do not mind longer, highly interactive sessions if the collaboration is productive (source: (1) (PDF) Comparing Objective and Subjective Measures of Usability in a Human-Robot Dialogue System.md).

### 7. Multimodal Multiparty Turn-Taking Prediction (MuVAP)
Achieving fluid and psychologically comfortable human-robot interaction in group settings requires sophisticated turn-taking prediction:
- **Efficient Multimodal Prediction (MuVAP)**: MuVAP is a causal framework that improves turn-taking prediction in multiparty conversations, using minimal sensor requirements like monaural audio and single-camera video for real-time operation (source: raw_muvap-turn-taking-prediction.md). This reduces hardware complexity, making it practical for real-world HRI applications (source: raw_muvap-turn-taking-prediction.md).
- **Speaker-Aware Grounding**: The framework grounds acoustic predictions in face tracks, enabling speaker-specific turn-taking decisions essential for natural group dynamics (source: raw_muvap-turn-taking-prediction.md).
- **Role-Relative Projection**: To simplify the combinatorial complexity of multiparty interactions, MuVAP maps N-speaker dynamics onto a fixed 'current vs. next floor-holder' state (source: raw_muvap-turn-taking-prediction.md).
- **Improved Performance**: MuVAP significantly outperforms existing baselines in predicting shift-hold and next-speaker turns in both two- and three-speaker conversations (source: raw_muvap-turn-taking-prediction.md).
- **Psychological Implications**: Robots and AI companions capable of seamless turn-taking are perceived as more intelligent, socially competent, and trustworthy, which enhances interaction quality and reduces user frustration (source: raw_muvap-turn-taking-prediction.md). A new Audio-Visual Conversation Corpus, a 31-hour dataset, supports training and evaluating these causal models (source: raw_muvap-turn-taking-prediction.md).

### 8. Physiological Workload and Situational Awareness Sensing
Continuous physiological monitoring helps adjust robot autonomy to the operator's mental and physical states without disruptive manual questionnaires:
- **Cognitive Workload**: Operator mental workload can be continuously indexed during HRC tasks. Neural (EEG theta/alpha ratios), ocular (fixation duration and pupil dilation), and autonomic (ECG heart rate variability and EDA skin conductance) metrics provide non-disruptive, real-time measurements of cognitive fatigue and stress (source: Capturing Mental Workload Through Physiological Sensors in Human-Robot Collaboration_ A Systematic Literature Review.md).
- **Situational Awareness (SA)**: Fusing multimodal ocular, neural, and autonomic features using unsupervised deep representation learning allows continuous estimation of operator SA (Perception, Comprehension, and Projection) in Human-Autonomy Teaming (HAT) configurations (source: Physiological sensing for situational awareness_ a theory-driven integrative review of multimodal and unsupervised approaches for visual search and human-autonomy teaming.md).

### 9. Acceptance and the GQS Evaluation (TIAGo Robot)
Polish validation studies of the Godspeed Questionnaire Series (GQS) evaluating older adults' perception of the TIAGo social robot in care facilities demonstrate key acceptance dynamics:
- **Acceptance Independence**: Perceived likeability and perceived intelligence scored significantly higher than perceived anthropomorphism and animacy.
- **Utility Over Appearance**: Older adults' acceptance of social robots is driven by perceived utility, safety, and cognitive intelligence, showing **no correlation** with the robot's physical human-likeness (anthropomorphism) or lifelikeness (animacy) (source: The Godspeed Questionnaire Series in the Assessment of the Social Robot TIAGo by Older Individuals.md).

### 10. Dynamic Trust Strategies and Dialogue Policies
Implementing dynamic trust calibration optimizes collaboration efficiency and protects trust during in-person interactions:
- **Active HRC Strategy Selection**: By evaluating workspace subscenes (successful grasps, collisions, drops) using a Visual Language Model (VLM), the system estimates the human's dynamic trust level in real time. Decision-tree strategy generation then adjusts the robot's actions: prioritizing cooperative trust-building tasks when trust is low, and independent high-efficiency tasks when trust is high (source: Active interaction strategy generation for human-robot collaboration based on trust.md).
- **Responsive vs. Reactive Dialogue Policies**: Robots utilizing a responsive policy (proactively adapting dialogue and task support based on the user's affect and workspace states) achieve significantly higher post-interaction trust than those using a reactive policy (only responding to direct prompts). However, this trust advantage completely collapses under language communication breakdowns (speech recognition errors), which trigger erratic user trust ratings (source: Trust in Autonomous Human-Robot Collaboration_ Effects of Responsive Interaction Policies.md).

### 11. Withdrawal Design and Usability Limits
In social HRI, especially for vulnerable populations (e.g. child development and autism), standard metrics like system usability and engagement can be misleading:
- **Usability Masking Ecological Downsides**: An 8-week home-based randomized controlled trial (N=40) using the Qrobot social robot showed that children with continued access suffered from lower social motivation (SMS) and weaker emotion recognition gains (RMET) compared to children from whom the robot was withdrawn, despite exceptionally high usability scores (SUS) (source: Beyond Usability - Withdrawal Design in Social Robotics.md).
- **The Scaffold & Designed Separation**: Continued robot use kept social behavior siloed within the child-robot dyad. Actively implementing a "withdrawal design"—designed separation—is necessary to break this siloing and prompt users to seek out and bridge back to human-to-human relationships (source: Beyond Usability - Withdrawal Design in Social Robotics.md).

### 12. Data Standards for Physical AI
The scalable deployment of humanoid robots and the advancement of "Physical AI" depend on the establishment of robust data standards that can capture and share embodied physical interaction experiences (source: raw_data-standards-for-humanoid-robotics-the-missing-infrastructure-for-physical-ai.md).
- **Embodied Data Requirements**: Data generated by humanoid robots must capture the holistic context of physical interaction, including the robot's body, actions, the task, environment, event sequences, and outcomes. Isolated data points are insufficient (source: raw_data-standards-for-humanoid-robotics-the-missing-infrastructure-for-physical-ai.md).
- **Physical Coherence is Crucial**: For data to be reusable across different systems, it must possess physically coherence, with consistently defined and inspectable elements like timing, coordinate systems, calibration, kinematic models, units, and synchronization (source: raw_data-standards-for-humanoid-robotics-the-missing-infrastructure-for-physical-ai.md).
- **Addressing Data Cumulativeness**: Current challenges in humanoid robot development stem from non-cumulative data due to high collection costs, data silos, and inconsistent evaluation methods. Data standards are proposed to overcome these bottlenecks, enabling collective learning and improvement (source: raw_data-standards-for-humanoid-robotics-the-missing-infrastructure-for-physical-ai.md).
- **Scope of Standards**: Standards should cover general infrastructure (lifecycle management, metadata, provenance, quality, versioning, traceability) and domain-specific grammars for manipulation, locomotion, HRI, and cognition (source: raw_data-standards-for-humanoid-robotics-the-missing-infrastructure-for-physical-ai.md).

### 13. Bidirectional Tutoring for Developmental Motor Learning
The learning of motor skills in robots can be significantly enhanced through a reciprocal, developmental approach mirroring infant learning. This contrasts with traditional unidirectional demonstration methods.
- **Reciprocal Interaction for Skill Acquisition**: Robots learning through bidirectional tutoring, where both the tutor (human or AI) and the robot dynamically adapt to each other, demonstrate more effective motor skill acquisition compared to passive reception of demonstrations (source: raw_bidirectional-tutoring-for-developmental-motor-learning-in-robots.md).
- **Stable Learning Dynamics Through Co-Development**: The co-developed interaction dynamic in bidirectional tutoring creates constraints that foster consistent behavioral patterns and stable learning (source: raw_bidirectional-tutoring-for-developmental-motor-learning-in-robots.md).
- **Enhanced Generalization**: Robots trained bidirectionally show improved stage-wise generalization of learned motor skills, indicating a more robust understanding of the task (source: raw_bidirectional-tutoring-for-developmental-motor-learning-in-robots.md).
- **Reduced Tutor Dependency**: Over time, robots employing bidirectional tutoring require progressively less guidance, suggesting increased learning autonomy (source: raw_bidirectional-tutoring-for-developmental-motor-learning-in-robots.md).
- **Tutor Agnosticism**: This framework is effective with both human and AI tutors, highlighting its broad applicability in embodied AI development (source: raw_bidirectional-tutoring-for-developmental-motor-learning-in-robots.md).

### 14. Enhancing Robot Teleoperation with Arm Kinematic Correction
Improving the accuracy of robot teleoperation is crucial for tasks requiring precise manipulation, especially when human operators are remotely controlling robotic systems. Markerless motion capture systems, while convenient, often struggle with depth estimation errors, particularly when self-occlusion occurs during complex arm movements.
- **Arm Kinematic Correction (AKC)**: A novel method, Arm Kinematic Correction (AKC), addresses the degradation of depth estimation in markerless motion capture due to self-occlusion. AKC enforces geometric constraints, such as the constant length of arm segments, to reconstruct accurate joint depths even when occluded (source: raw_seeing-through-occlusion-deterministic-arm-kinematic-correction-for-robot-teleoperation.md).
- **Deterministic Formulation**: The AKC method utilizes known wrist positions and predefined arm lengths in a deterministic approach, based on geometric principles, to calculate missing joint depths. This avoids the need for complex probabilistic models and reduces the burden of extensive parameter tuning (source: raw_seeing-through-occlusion-deterministic-arm-kinematic-correction-for-robot-teleoperation.md).
- **Validation and Application**: Experiments have validated AKC against high-precision reference systems, demonstrating its reliability for both static and dynamic joint motions. Its effectiveness has been shown in motion-mapping teleoperation within both simulated and physical robot environments, significantly enhancing the robustness and anatomical consistency of motion tracking under challenging occlusion conditions, making it a practical solution for real-time HRI applications (source: raw_seeing-through-occlusion-deterministic-arm-kinematic-correction-for-robot-teleoperation.md).

### 15. Personalized Social Robots for Child Well-being
Personalizing social robots for children's well-being, especially in clinical settings, presents unique challenges in data collection and interpretation. Framing personalization as a recommendation problem requires robust data to profile children and understand the effectiveness of robot interventions (source: raw_toward-personalized-social-robots-for-child-well-being-data-requirement-principles-from-a-recommender-system-perspective.md). Key data challenges include the dynamic nature of children's states, weak effectiveness signals from interventions, difficulties in linking sessions due to infrequent visits and anonymization, and biases inherent in observational data collection (source: raw_toward-personalized-social-robots-for-child-well-being-data-requirement-principles-from-a-recommender-system-perspective.md). To address these, a recommender-system perspective advocates for:
- **Integrated Profiles**: Developing holistic and dynamic user profiles that capture evolving child needs and states (source: raw_toward-personalized-social-robots-for-child-well-being-data-requirement-principles-from-a-recommender-system-perspective.md).
- **Robust Effectiveness Signals**: Collecting strong indicators of how robot actions impact children (source: raw_toward-personalized-social-robots-for-child-well-being-data-requirement-principles-from-a-recommender-system-perspective.md).
- **Linkable Coverage**: Ensuring that data from different interactions can be connected to maintain a continuous history (source: raw_toward-personalized-social-robots-for-child-well-being-data-requirement-principles-from-a-recommender-system-perspective.md).
- **Exposure Records**: Logging detailed records of robot actions and their context at the time of data collection (source: raw_toward-personalized-social-robots-for-child-well-being-data-requirement-principles-from-a-recommender-system-perspective.md).
These principles translate into practical guidelines for designing data collection strategies for social robots in child well-being applications (source: raw_toward-personalized-social-robots-for-child-well-being-data-requirement-principles-from-a-recommender-system-perspective.md).

### 16. Embodied Spatial Data Physicalization via Acoustics
Novel approaches to human-robot interaction are exploring how robots can physically represent and communicate complex spatial data in real-time. AcoustoBots, a system built upon mobile robots equipped with ultrasonic phased arrays, achieve this by levitating small particles to represent scalar values (e.g., population density, noise levels) (source: raw_embodied-human-robot-interaction-via-acoustics-a-marl-approach-with-acousto-bots-for-spatial-data-physicalization.md).
- **Acoustic Levitation for Data Display**: The height of levitated particles, controlled by ultrasonic phased arrays, directly encodes spatial data, offering a glanceable and dynamic physical representation (source: raw_embodied-human-robot-interaction-via-acoustics-a-marl-approach-with-acousto-bots-for-spatial-data-physicalization.md).
- **MARL for Navigation and Stability**: A Multi-Agent Reinforcement Learning (MARL) algorithm (MADDPG) is employed for intelligent, collision-aware navigation of these mobile robots. Specialized controllers maintain acoustic stability and dynamic particle height adjustment during robot movement, ensuring consistent data rendering even when the robot is in motion (source: raw_embodied-human-robot-interaction-via-acoustics-a-marl-approach-with-acousto-bots-for-spatial-data-physicalization.md).
- **Embodied Interaction Loop**: This system creates a closed loop of perception, data display through levitation, and robot action, fostering embodied HRI and offering a new paradigm for spatial analytics (source: raw_embodied-human-robot-interaction-via-acoustics-a-marl-approach-with-acousto-bots-for-spatial-data-physicalization.md).
- **Performance**: AcoustoBots demonstrated stable levitation during motion and consistent, data-dependent height rendering, achieving high success rates in single- and dual-robot traversal tasks (source: raw_embodied-human-robot-interaction-via-acoustics-a-marl-approach-with-acousto-bots-for-spatial-data-physicalization.md).

## Related pages

- [[human-ai-interaction]]
- [[trust]]
- [[anthropomorphism]]
- [[ai-companions]]
- [[source-human-robot-interactions]]
- [[source-icubworld]]
- [[source-furhat-robotics]]
- [[source-attachment-to-robots]]
- [[source-emotional-attachment-robots-future]]
- [[explainability]]
- [[source-comparing-usability-measures]]
- [[source-capturing-mental-workload]]
- [[source-attitudes-social-robots-scale]]
- [[source-trust-layers-state-anxiety]]
- [[source-physiological-sensing-situational-awareness]]
- [[source-godspeed-questionnaire-tiago]]
- [[source-trust-autonomous-hrc-responsive-policies]]
- [[source-active-interaction-strategy]]
- [[source-muvap-turn-taking-prediction]]
- [[source-data-standards-for-humanoid-robotics-the-missing-infrastructure-for-physical-ai]]
- [[source-bidirectional-tutoring-for-developmental-motor-learning-in-robots]]
- [[source-llm-mediated-human-ai-interaction-in-search-and-rescue-impact-of-expertise-on-attentional-allocation]]
- [[source-seeing-through-occlusion-deterministic-arm-kinematic-correction-for-robot-teleoperation]]
- [[source-toward-personalized-social-robots-for-child-well-being-data-requirement-principles-from-a-recommender-system-perspective]]
- [[measurement-tools]]
- [[mental-health]]
- [[medical-ai]]
- [[source-embodied-human-robot-interaction-via-acoustics-a-marl-approach-with-acousto-bots-for-spatial-data-physicalization]]
- [[source-the-impact-of-security-and-privacy-controls-on-users-emotional-engagement-with-generative-ai-chatbots]]
- [[source-a-new-human-likeness-and-comfort-index-for-robot-movements-along-prescribed-paths]]
- [[source-casting-everything-to-online-api-services-a-survey-of-integrating-localized-speech-recognition-models-in-robotic-systems]]
- [[source-assessing-physical-frailty-and-fall-risk-indicators-with-social-robots]]
- [[source-catch-throw-repeat-planning-for-human-robot-partner-juggling]]
- [[metacognitive-agent-architectures]]
- [[chatbots]]
- [[source-human-robot-interaction-in-genai-architectures-via-the-agent-client-protocol]]
- [[source-physics-informed-diffusion-biomechanically-plausible-3d-sign-language-generation]]