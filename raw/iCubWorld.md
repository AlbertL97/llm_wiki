---
title: "iCubWorld"
source: "https://robotology.github.io/iCubWorld/#"
author:
published:
created: 2026-06-06
description:
tags:
  - "clippings"
---
## Welcome to iCubWorld

**How many objects can iCub recognize?** This question led us in 2013 to start the iCubWorld project, with the main goal of benchmarking the development of the visual recognition capabilities of the iCub robot. The project is the result of a collaboration between the [Istituto Italiano di Tecnologia (IIT) - iCub Facility](https://www.iit.it/lines/humanoid-sensing-and-perception), the [University of Genoa - DIBRIS - SlipGURU](http://slipguru.unige.it/) research group, and the [Laboratory for Computational and Statistical Learning](http://lcsl.mit.edu/#/home).

iCubWorld datasets are collections of images recording the visual experience of iCub while observing objects in its typical environment, a laboratory or an office. The acquisition setting is devised to allow a natural human-robot interaction, where a teacher verbally provides the label of the object of interest and shows it to the robot, by holding it in the hand; the iCub can either track the object while the teacher moves it, or take it in its hand.

Since 2013, we published four iCubWorld releases of increasing size, aimed at investigating complementary aspects of robotic visual recognition. These image collections allow for extensive analysis of the behaviour of recognition systems when trained in different conditions, offering a faithful and reproducible benchmark for the performance that we can expect from the real system.

### Acquisition Setup

Images in iCubWorld datasets are annotated with the label of the object represented and a bounding box around it. We developed a Human-Robot-Interaction application to acquire annotated images by exploiting the real-world context and the interaction with the robot. This setup allows to build large annotated datasets in a fast and natural way.

The only external supervision is in the form of a human teacher providing verbally the label of the object that is going to be acquired. The teacher approaches the robot and shows the object in his/her hand; during the acquisition, localization of the object in the visual field of the robot is performed by exploting self-supervision techniques.

Two acquisition modalities are possible: human or robot mode.

- ##### HUMAN MODE
	The teacher moves the object holding it in the hand and the robot tracks it by exploiting either motion or depth cues.
- ##### ROBOT MODE
	The robot takes the object in the hand and focuses on it by using knowledge of its own kinematics.

We record incoming frames from the robot cameras, togheter with the information on the bounding box.

Shot from an acquisition session in human mode: a teacher shows an object to the robot while providing verbal annotation.

## Datasets

iCubWorld is an ongoing project. Latest release is iCubWorld Transformations, described in detail in the following.  
Follow this link for previous releases.

### iCubWorld Transformations

**200 objects divided into 20 categories**

**10 acquisitions (~ 3600 images) per object**

Each object is acquired while undergoing isolated visual transformations, in order to study invariance to real-world nuisances.

## Previous Releases

### iCubWorld28

**28 objects divided into 7 categories**

**8 acquisitions (~ 1600 images) per object**

Each object is acquired in 4 different days, in order to study incremental learning approaches.

### iCubWorld 1.0

**40 objects divided into 10 categories**

**1 acquisition (~ 200 images) per object (train)**

Test objects are acquired in different conditions in order to study generalization across settings.

### Hello iCubWorld

**7 objects**

**4 acquisitions (~ 2000 images) per object**

First release of iCubWorld, where we validate the acquisition setup and perform initial benchamrking of recognition methods.

## Code

This section is under construction.

We are working to provide as soon as possible documentation and support for the following code:

1. iCub application to acquire iCubWorld releases
2. MATLAB code to automatically format the acquired images in a directory tree (similar to the one we released for iCubWorld Transformations)
3. MATLAB functions providing utilities to train Caffe deep networks on arbitrary subsets of the acquired dataset, by setting model and back-propagation hyperparameters (e.g. layer learning rates, solver type) programmatically through configuration files

## Publications

A list of publications related to iCubWorld.

#### Are we done with object recognition? The iCub robot's perspective.

Giulia Pasquale, Carlo Ciliberto, Francesca Odone, Lorenzo Rosasco and Lorenzo Natale

```
@article{Pasquale2019RAS,
    author = "Giulia Pasquale, Carlo Ciliberto, Francesca Odone, Lorenzo Rosasco and Lorenzo Natale",

    journal = "Robotics and Autonomous Systems",
    title = "Are we done with object recognition? The iCub robot's perspective",
    year = "2019",
    volume = "112",
    pages = "260 - 281",
    doi = "https://doi.org/10.1016/j.robot.2018.11.001",
    month={Feb},
    url = "http://www.sciencedirect.com/science/article/pii/S0921889018300332",
}
```

#### Speeding-up Object Detection Training for Robotics with FALKON

Elisa Maiettini, Giulia Pasquale, Lorenzo Rosasco and Lorenzo Natale

IROS 2018 - IEEE/RSJ International Conference on Intelligent Robots and Systems.

```
@article{Maiettini2018IROS,
    author = "Elisa Maiettini, Giulia Pasquale, Lorenzo Rosasco and Lorenzo Natale",

    booktitle={2018 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), to appear},
    title = {"Speeding-up Object Detection Training for Robotics with FALKON"},
    year = "2018",
    pages = " ",
    doi = " ",
    month={Oct},
    url = " ",
}
```

#### Interactive data collection for deep learning object detectors on humanoid robots

Elisa Maiettini, Giulia Pasquale, Lorenzo Rosasco and Lorenzo Natale

Humanoids 2017 - IEEE/RAS International Conference on Humanoid Robots (Humanoids).

```
@article{Maiettini2017Humanoids,
    author = "Elisa Maiettini, Giulia Pasquale, Lorenzo Rosasco and Lorenzo Natale",

    booktitle={"2017 IEEE/RAS International Conference on Humanoid Robots (Humanoids)"},
    title = {"Interactive data collection for deep learning object detectors on humanoid robots"},
    year = "2017",
    pages = "862-868",
    doi = "https://doi.org/10.1109/HUMANOIDS.2017.8246973",
    month={Nov},
    url = "https://ieeexplore.ieee.org/abstract/document/8246973",
}
```

#### Incremental robot learning of new objects with fixed update time

Raffaello Camoriano, Giulia Pasquale, Carlo Ciliberto, Lorenzo Natale, Lorenzo Rosasco and Giorgio Metta

ICRA 2017 - IEEE/RSJ International Conference on Robotics and Automation (ICRA).

```
@article{Camoriano2017ICRA,
    author = "Raffaello Camoriano, Giulia Pasquale, Carlo Ciliberto, Lorenzo Natale, Lorenzo Rosasco and Giorgio Metta",

    booktitle={"2017 IEEE/RSJ International Conference on Robotics and Automoation (ICRA)"},
    title = {"Incremental robot learning of new objects with fixed update time"},
    year = "2017",
    pages = "3207-3214",
    doi = "https://doi.org/10.1109/ICRA.2017.7989364",
    month={May},
    url = "https://ieeexplore.ieee.org/abstract/document/7989364",
}
```

#### Object Identification from Few Examples by Improving the Invariance of a Deep Convolutional Neural Network

Giulia Pasquale, Carlo Ciliberto, Lorenzo Rosasco and Lorenzo Natale

IROS 2016 - IEEE/RSJ International Conference on Intelligent Robots and Systems.

```
@inproceedings{Pasquale2016IROS,
    author={G. Pasquale and C. Ciliberto and L. Rosasco and L. Natale},
    booktitle={2016 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)},
    title={Object Identification from Few Examples by Improving the Invariance of a Deep Convolutional Neural Network},
    year={2016},
    pages={4904-4911},
    doi={10.1109/IROS.2016.7759720},
    month={Oct},
    url={http://ieeexplore.ieee.org/document/7759720/},
}
```

#### Teaching iCub to recognize objects using deep Convolutional Neural Networks

Giulia Pasquale, Carlo Ciliberto, Francesca Odone, Lorenzo Rosasco and Lorenzo Natale

MLIS 2016 - Workshop on Machine Learning for Interactive Systems, International Conference on Machine Learning (ICML).

```
@inproceedings{Pasquale2015MLIS,
  author  = {Giulia Pasquale and Carlo Ciliberto and Francesca Odone and Lorenzo Rosasco and Lorenzo Natale},
  title   = {{Teaching iCub to recognize objects using deep Convolutional Neural Networks}},
  journal = {Proceedings of the 4th Workshop on Machine Learning for Interactive Systems, 32nd International Conference on Machine Learning},
  year    = {2015},
  volume  = {43},
  pages   = {21--25},
  url     = {http://www.jmlr.org/proceedings/papers/v43/pasquale15}
}
```

#### On the impact of learning hierarchical representations for visual recognition in robotics

Carlo Ciliberto, Sean Ryan Fanello, Matteo Santoro, Lorenzo Natale, Giorgio Metta, Lorenzo Rosasco

IROS 2013 - IEEE/RSJ International Conference on Intelligent Robots and Systems.

```
@inproceedings{Ciliberto2013IROS,
    author={Carlo Ciliberto and Sean Ryan Fanello and Matteo Santoro and Lorenzo Natale and Giorgio Metta and Lorenzo Rosasco},
    booktitle={2013 IEEE/RSJ International Conference on Intelligent Robots and Systems},
    title={On the impact of learning hierarchical representations for visual recognition in robotics},
    year={2013},
    pages={3759-3764},
    doi={10.1109/IROS.2013.6696893},
    ISSN={2153-0858},
    month={Nov}
}
```

#### iCub World: Friendly Robots Help Building Good Vision Data-Sets

Sean Ryan Fanello, Carlo Ciliberto, Matteo Santoro, Lorenzo Natale, Giorgio Metta, Lorenzo Rosasco and Francesca Odone

CVPR 2013 - Proceedings of IEEE Conference on Computer Vision and Pattern Recognition Workshops.

```
@inproceedings{Fanello2013CVPRws,
    title = {{iCub World: Friendly Robots Help Building Good Vision Data-Sets}},
    year = {2013},
    booktitle = {2013 IEEE Conference on Computer Vision and Pattern Recognition Workshops},
    author = {Fanello, Sean Ryan and Ciliberto, Carlo and Santoro, Matteo and Natale, Lorenzo and Metta, Giorgio and Rosasco, Lorenzo and Odone, Francesca},
    doi = {10.1109/CVPRW.2013.106},
    month = {6},
    pages = {700--705}
}
```

#### Weakly Supervised Strategies for Natural Object Recognition in Robotics

Sean Ryan Fanello, Carlo Ciliberto, Lorenzo Rosasco and Giorgio Metta

ICRA 2013 - IEEE International Conference on Robotics and Automation.

```
@inproceedings{Fanello2013ICRA,
    author={Sean Ryan Fanello and Carlo Ciliberto and Lorenzo Natale and Giorgio Metta},
    booktitle={Robotics and Automation (ICRA), 2013 IEEE International Conference on},
     title={Weakly supervised strategies for natural object recognition in robotics},
    year={2013},
    pages={4223-4229},
    doi={10.1109/ICRA.2013.6631174},
    ISSN={1050-4729},
    month={May}
}
```

#### Enabling Depth-driven Visual Attention on the iCub Humanoid Robot: Instructions for Use and New Perspectives.

Giulia Pasquale, Tanis Mar, Carlo Ciliberto, Lorenzo Rosasco and Lorenzo Natale

Frontiers in Robotics and AI, section Humanoid Robotics, Vol. 3 Num. 35, 2016.

```
@article{Pasquale2015frontiers,
  author={Pasquale, Giulia  and  Mar, Tanis  and  Ciliberto, Carlo  and  Rosasco, Lorenzo Andrea  and  Natale, Lorenzo},
  title={{Enabling Depth-driven Visual Attention on the iCub Humanoid Robot: Instructions for Use and New Perspectives.}},
  journal={Frontiers in Robotics and AI},
  volume={3},
  year={2016},
  number={35},
  url={http://www.frontiersin.org/humanoid_robotics/10.3389/frobt.2016.00035/abstract},
  doi={10.3389/frobt.2016.00035},
  issn={2296-9144}
}
```

#### A heteroscedastic approach to independent motion detection for actuated visual sensors

Carlo Ciliberto, Sean Ryan Fanello, Lorenzo Natale and Giorgio Metta

IROS 2012 - IEEE/RSJ International Conference on Intelligent Robots and Systems.

```
@inproceedings{Ciliberto2012IROS,
    author={Carlo Ciliberto and Sean Ryan Fanello and Lorenzo Natale and Giorgio Metta},
    booktitle={2012 IEEE/RSJ International Conference on Intelligent Robots and Systems},
    title={A heteroscedastic approach to independent motion detection for actuated visual sensors},
     year={2012},
    pages={3907-3913},
     doi={10.1109/IROS.2012.6385943},
    ISSN={2153-0858},
    month={Oct},
}
```