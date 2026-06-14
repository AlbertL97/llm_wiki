---
title: "What is a Robot?"
source: "https://robotsguide.com/learn/what-is-a-robot"
author:
  - "[[Erico Guizzo]]"
published: 2001-08-09
created: 2026-06-06
description: "A robot is an autonomous machine capable of sensing its environment, carrying out computations to make decisions, and performing actions in the real world."
tags:
  - "clippings"
---
Robots are a diverse bunch. Some use [wheels](https://robotsguide.com/robots?feature=wheels) to move, while others walk around on two, four, or even six [legs](https://robotsguide.com/robots?feature=legs). [Underwater robots](https://robotsguide.com/robots?category=aquatic) can swim, and [drones](https://robotsguide.com/robots?category=drones) can take to the skies. Some robots assemble delicate microchips in spotless facilities; others toil away in dusty car factories. There are [robots the size of a coin](https://robotsguide.com/robots?sort=size) and robots [bigger than refrigerators](https://robotsguide.com/robots?sort=size&order=reverse). Some [robots can make pancakes](https://robotsguide.com/robots/rosie). Others can [land on Mars](https://robotsguide.com/robots/perseverance).

This [diversity](https://robotsguide.com/learn/types-of-robots) —in size, design, capabilities—means it's not easy to come up with a definition of what a robot is.

In fact, the term "robot" means different things to different people. Even roboticists themselves have different notions about what is or isn't a robot. And for most of us, science fiction has strongly influenced what we expect a robot to look like and be able to do.

## A simple definition of a robot

So what makes a robot? Here's a definition that is neither too general nor too specific:

**A robot is an autonomous machine capable of sensing its environment, carrying out computations to make decisions, and performing actions in the real world.**

Think of the [Roomba](https://robotsguide.com/robots/roomba) robotic vacuum. It uses sensors to autonomously drive around a room, going around furniture and avoiding stairs; it carries out computations to make sure it covers the entire room and when deciding if a spot needs a more thorough cleaning; and it performs an action by "sucking dirt," as roboticist [Rodney Brooks](https://people.csail.mit.edu/brooks/), one of the Roomba creators, explains.

But no definition is perfect. You may argue, and perhaps rightly so, that the definition above could very well describe a dishwasher, a thermostat, an elevator, an automatic door, and many other systems and appliances around us.

## What makes something a robot?

Take, for example, cruise control in cars. It senses how fast the vehicle is going, compares it to a preset speed, and accelerates or brakes as needed. Is cruise control a robot?

For his part, Brooks is not enthusiastic about considering dishwashers a class of robot. But other roboticists are less strict. A home thermostat can measure the ambient temperature, check a prestored schedule, and turn on the heating or cooling system accordingly. For [Gill Pratt](https://global.toyota/en/company/profile/executives/fellow/gill_a_pratt.html), another roboticist, that's enough to call a thermostat a simple robot.

The thing to keep in mind about this or any other definition is that robots can typically do three things:

1. Sense
2. Compute
3. Act

These three components vary widely from robot to robot. To sense the world, some robots use simple devices, like an obstacle-detecting sonar, while other robots rely on multiple sensors, including cameras, gyroscopes, and laser range finders.

Likewise, the compute part can involve everything from a small electronic circuit to a powerful multicore processor or even a cluster of networked computers.

As for the action, this is where robots vary the most: Some robots can move around; others can manipulate things. Some robots can move around and manipulate things. Some are designed to perform specific tasks, while others are more versatile and can do many different things.

## How do robots work?

But although robots vary in how they sense, compute, and act, they all operate in a similar way: Their sensors feed measurements to a controller or computer, which processes them and then sends control signals to motors and actuators. A robot is constantly repeating this sensing-computing-acting cycle, in what roboticists call a "feedback loop." So you could say that feedback is the technique that makes machines "smart," and almost every robot uses feedback.

To make things more concrete, consider [BigDog](https://robotsguide.com/robots/bigdog), a rough-terrain quadruped robot developed by [Boston Dynamics](https://www.bostondynamics.com/). BigDog uses sensors to measure the position of its leg joints and the forces applied on them. It also uses gyroscopes and an inertial measurement unit (IMU) to keep track of its position in relation to the ground. Based on that information, BigDog's computer calculates which hydraulic actuators it should activate to move the robotic legs.

<iframe frameborder="0" title="Interactive or visual content" src="https://flo.uri.sh/visualisation/12965652/embed?auto=1"></iframe>

As BigDog takes a step, it's continually (several thousand times per second) updating its sensor, computer, and actuator information in a feedback loop that allows the robot to autonomously walk, trot, climb hills, and step over obstacles. Its creators have even kicked BigDog while it was walking and the robot didn't fall down.

To build BigDog, Boston Dynamics engineers studied how real animals run and balance. They used some of those ideas to develop sensing, computing, and actuation systems, and then they combined these three components in a feedback loop that gives BigDog great agility, allowing it to climb hills and even walk on an icy road. More recently, Boston Dynamics took robot agility to new extremes with machines like [Spot](https://robotsguide.com/robots/spot) and [Atlas](https://robotsguide.com/robots/atlas2016).

![](https://www.youtube.com/watch?v=cNZPRsrwumQ)

## What about autonomy in robots?

Let's go back to our original definition. Another key concept that we should mention is the notion of autonomy. We said robots are autonomous machines, but the level of autonomy differs from robot to robot. Some robots are controlled remotely by human operators. Other robots can run without any kind of human intervention. And a large number of robots rely on both remote control and autonomous behavior.

Again, people will disagree on how much autonomy a machine needs to be called a robot. You can try to tweak the original definition to suit your own opinion on this issue, but the fact is, most definitions will never be perfect. When asked to define a robot, [robotics pioneer Joseph Engelberger](https://spectrum.ieee.org/unimation-robot) once said, "I don't know how to define one, but I know one when I see one!"

Maybe *that* is the perfect definition of a robot.

## The future of robotics

Another question you may be asking yourself is, *Where is my robot? Where are all those helpful robotic systems and [humanoids that science fiction promised](https://robotsguide.com/play/face-off-sci-fi-robots) we'd have by now? Why can't a robot do my laundry for me?*

The reality is that there remain huge challenges ahead for robotics, and practical home robots are still many years away. Many of the same problems that kept robots limited to factories and research labs are still around today. Two main issues are cost and complexity.

Cost is easy to understand: Robotics components, including specialized sensors and computers, but especially actuators to power wheels and robotic arms, are still too costly. And the more capable you want to make your robot, the more components you'll need, so the cost adds up quickly.

As for the complexity problem, when you combine sensors, computers, actuators, software, and user interfaces into a robot and try to operate it in the real world, things still don't work perfectly. The robot operates too slowly. Or it acts in an unsafe manner. Or it [face-plants into the ground](https://spectrum.ieee.org/darpa-robotics-challenge-robots-falling), like many did at a [major robotics competition](https://spectrum.ieee.org/darpa-robotics-challenge-amazing-moments-lessons-learned-whats-next) featuring some of the world's most sophisticated robots.

![](https://www.youtube.com/watch?v=g0TaYhjpOfo)

To put it another way, things don't work as well as they would need to in order to turn that robot into a practical commercial system.

Now here's the good news: Progress in solving those challenges is not only happening—it's happening faster and faster. [Daniela Rus](https://www.csail.mit.edu/person/daniela-rus), a roboticist at MIT, believes that "the age of robotics is really upon us." Advances in robotics technology, she says, will have a big impact on everyday life as robots leave the lab and become capable, useful machines operating in real environments.

Areas that are seeing promising breakthroughs include robot vision, learning, and navigation. Robots are getting better at recognizing objects and people, mapping indoor and outdoor spaces, and moving through real-world human environments. Robot manipulation and biped locomotion are advancing too, though more slowly.

A key development is that the technological advances in processors and sensors that made computers and smartphones better and cheaper are also benefiting robots. It's getting easier to equip robots with powerful sensing and computing systems. Another benefit is that researchers don't have to keep reinventing the wheel when it comes to assembling a robot, and that means they can pay more attention to robotics software.

## AI for robots

Robotics software is a big deal. Without effective and robust algorithms, a robot will never be able to accomplish much. Tools for robot simulation, control, and learning are getting better, but many roboticists would like to see them improving at an even faster rate. There's hope that recent advances in [artificial intelligence (AI)](https://spectrum.ieee.org/topic/artificial-intelligence/) could give robotics a major boost, and that is currently a [very active area of research](https://spectrum.ieee.org/tag/robot-ai).

Hardware and software standards that would allow different robots to interface more easily are still lacking, but today's robots are not the one-of-a-kind laboratory contraptions they used to be. Major robot makers are relying on open (or mostly open) software platforms, like the [Robot Operating System](https://www.ros.org/), tapping on their user communities to develop capabilities they'd never be able to develop on their own.

Clearly, things are moving in the right direction for robotics. *So, where's my robot?* you continue to ask.

The answer is that if we want capable, affordable robots to help us in the future, we need more people to develop such robots. That's right. In the end, it all depends on *you* to help build the future of robotics. See our guide on " [How to Get Started in Robotics](https://robotsguide.com/learn/how-to-get-started-in-robotics)." Then start building robots, join a robotics club or competition, take a robotics course, and become a roboticist.

And maybe then you'll build a robot to do your laundry. And mine too, please.