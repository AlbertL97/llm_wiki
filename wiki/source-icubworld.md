# Source: iCubWorld

**Summary**: A summary page for the iCubWorld project benchmark dataset, detailing interactive HRI data collection, human tracking and robot kinematics acquisition modes, visual transformations, and publications.

**Sources**:  
- iCubWorld.md

**Last updated**: 2026-06-06

---

## Main content

This source describes the iCubWorld benchmarking project, designed to evaluate and improve the visual recognition capabilities of the iCub humanoid robot (source: iCubWorld.md).

### 1. Visual Recognition Benchmarking
- **Visual Recognition Goal**: Developed as a collaboration between the Istituto Italiano di Tecnologia (IIT), University of Genoa, and MIT, the project aims to benchmark visual object recognition systems under realistic conditions (source: iCubWorld.md).
- **Interactive Annotation Setup**: Rather than using static databases, the project employs a natural Human-Robot Interaction (HRI) setup where a human teacher verbally provides object labels and shows objects directly to the robot (source: iCubWorld.md).

### 2. Dual Acquisition Modes
The acquisition framework supports two distinct modalities to collect training images from the robot's cameras (source: iCubWorld.md):
- **Human Mode**: The teacher holds and moves the object in their hand. The iCub robot tracks the object dynamically using motion and depth cues (source: iCubWorld.md).
- **Robot Mode**: The robot takes the object in its own hand. Using knowledge of its own joint kinematics and self-supervision, the robot focuses on the object to capture varying perspectives (source: iCubWorld.md).

### 3. Dataset Releases & Research Aims
iCubWorld image collections study specific aspects of robotic vision (source: iCubWorld.md):
- **iCubWorld Transformations**: Features 200 objects in 20 categories. Each object is captured undergoing isolated visual transformations (e.g., scale, rotation, lighting changes) to train models to achieve invariance to real-world nuisances (source: iCubWorld.md).
- **iCubWorld28**: Features 28 objects in 7 categories. Objects are acquired over 4 different days to evaluate incremental learning and model updates over time (source: iCubWorld.md).
- **iCubWorld 1.0**: Focuses on model generalization across different background settings and environments (source: iCubWorld.md).

## Related pages

- [[human-robot-interaction]]
- [[human-ai-interaction]]
