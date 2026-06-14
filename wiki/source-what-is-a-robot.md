# Source: What is a Robot?

**Summary**: A summary page for the Robots Guide article "What is a Robot?" by Erico Guizzo. It documents the definition of a robot, the sense-compute-act feedback loop, varying levels of autonomy, Boston Dynamics' BigDog balance loop, and the key hurdles of cost and complexity.

**Sources**:  
- What is a Robot_.md

**Last updated**: 2026-06-06

---

## Main content

This article explores the difficulty of defining a robot due to their extreme diversity in size, design, and capabilities, providing a baseline definition and detailing the core mechanics and challenges of robotics (source: What is a Robot_.md).

### 1. Definition and Engelberger's Heuristic
- **The Simple Definition**: A robot is defined as an autonomous machine capable of sensing its environment, carrying out computations to make decisions, and performing actions in the real world (source: What is a Robot_.md). 
- **The Heuristic**: Due to the limitations of any strict definition (which could also describe elevators, dishwashers, or thermostats), robotics pioneer Joseph Engelberger famously stated, *"I don't know how to define one, but I know one when I see one!"* (source: What is a Robot_.md).

### 2. The Sense-Compute-Act Cycle and Feedback
Robots typically execute three core functions in a continuous cycle (source: What is a Robot_.md):
1. **Sense**: Gathering environmental data using sensors ranging from simple sonars to cameras, gyroscopes, IMUs, and laser range finders (source: What is a Robot_.md).
2. **Compute**: Processing sensor measurements, which can involve small electronic circuits, multicore processors, or networked computer clusters (source: What is a Robot_.md).
3. **Act**: Executing physical responses, such as locomotion (moving around via wheels or legs) and manipulation (handling objects) (source: What is a Robot_.md).
- **The Feedback Loop**: Sensors continuously feed measurements to a controller, which processes them and sends signals to motors/actuators (source: What is a Robot_.md). This continuous feedback loop is the primary technique that makes machines "smart" (source: What is a Robot_.md).

### 3. Autonomy Levels
- **Non-Binary Autonomy**: The level of machine autonomy varies widely (source: What is a Robot_.md). Some robots operate under direct human remote control, others run fully autonomously without human intervention, and a large number combine both remote control and autonomous behaviors in hybrid models (source: What is a Robot_.md).

### 4. Boston Dynamics and BigDog
Boston Dynamics engineers studied animal locomotion and balance to develop agile robots (source: What is a Robot_.md):
- **BigDog Quadruped**: BigDog utilizes sensors to measure leg joint positions and forces, and gyroscopes and an inertial measurement unit (IMU) to monitor its orientation (source: What is a Robot_.md).
- **High-Frequency Loop**: BigDog's computer processes this data to update actuator signals several thousand times per second in a feedback loop (source: What is a Robot_.md). This allows the robot to autonomously walk, trot, climb hills, and maintain balance on ice or when kicked (source: What is a Robot_.md).
- **Atlas and Spot**: Boston Dynamics has pushed these balance and agility capabilities to new extremes in humanoids and smaller quadrupeds (source: What is a Robot_.md).

### 5. Challenges in Robotics: Cost and Complexity
Despite advances, practical home robots (such as for laundry) face severe commercialization hurdles (source: What is a Robot_.md):
- **Cost**: Robotics hardware components remain highly expensive, especially specialized sensors, processors, and the actuators needed to power wheels or arms (source: What is a Robot_.md).
- **Complexity**: Integrating sensors, actuators, computers, software, and UIs in real-world environments is incredibly complex (source: What is a Robot_.md). This frequently results in slow or unsafe behaviors, or complete instability (e.g. robots face-planting during the DARPA Robotics Challenge) (source: What is a Robot_.md).

### 6. Software Standardization
- **Standardizing Software Platforms**: Historically, researchers had to build custom software, limiting progress (source: What is a Robot_.md). Today, major robot manufacturers utilize open software platforms like ROS (Robot Operating System), enabling a global user community to collaborate and share capabilities (source: What is a Robot_.md).

## Related pages

- [[human-ai-interaction]]
- [[trust]]
