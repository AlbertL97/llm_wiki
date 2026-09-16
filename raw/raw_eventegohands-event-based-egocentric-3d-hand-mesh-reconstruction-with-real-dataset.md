Authors: Hongkai Li, Xinyu Zhang, Yuan Huang, Kai Xu, Hujun Bao, Zhaopeng Cui
Date: 2026-09-16
Title: EventEgoHands++: Event-based Egocentric 3D Hand Mesh Reconstruction with Real Dataset

Summary:
3D hand mesh reconstruction is a critical task with applications in human-robot interaction and AR/VR. Traditional methods using conventional cameras face challenges in low-light and motion-blurred environments. Event-based cameras offer a solution due to their high dynamic range and temporal resolution. However, egocentric hand reconstruction with event cameras is complicated by dense background events caused by wearer's motion, which obscure hand signals. Previous methods, while attempting to segment hands, lacked instance-level information (distinguishing left/right hands), leading to inaccurate inter-hand relationships and degraded reconstruction.

EventEgoHands++ proposes a new framework to overcome these limitations. Key contributions include:

1.  **Hand Detector**: This component estimates instance-level bounding boxes and masks for both left and right hands, providing crucial distinction.
2.  **Adaptive Attention**: This mechanism dynamically adjusts attention based on hand detection results, enabling accurate learning of spatial relationships and interactions between hands.

To support training and evaluation, the authors extended the synthetic N-HOT3D dataset and created EEH-R, the largest real-world event-based egocentric hand dataset to date, containing approximately 1 million annotated frames captured in various conditions, including low light.

Experiments on both synthetic and real datasets show that EventEgoHands++ significantly outperforms existing baseline methods. The improved accuracy in hand detection and reconstruction is directly beneficial for applications requiring precise understanding of human hand gestures and poses, such as in human-robot collaboration and immersive virtual environments.