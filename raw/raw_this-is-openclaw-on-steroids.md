---
title: "This is OpenClaw On Steroids"
source: "https://www.youtube.com/watch?v=dUmT0OIGoqE"
author:
  - "[[Two Minute Papers]]"
published: 2026-06-19
created: 2026-06-19
description: "❤️ Check out Weights & Biases and sign up for a free demo here: https://wandb.me/papers📝 The paper  is available here:https://recursivemas.github.io/https://github.com/RecursiveMAS/RecursiveMAS"
tags:
  - "clippings"
---
![](https://www.youtube.com/watch?v=dUmT0OIGoqE)

❤️ Check out Weights & Biases and sign up for a free demo here: https://wandb.me/papers  
  
📝 The paper is available here:  
https://recursivemas.github.io/  
https://github.com/RecursiveMAS/RecursiveMAS  
  
Brain reading video: https://www.youtube.com/watch?v=IUg-t609byg  
  
🙏 We would like to thank our generous Patreon supporters who make Two Minute Papers possible:  
Adam Bridges, Benji Rabhan, B Shang, Cameron Navor, Charles Ian Norman Venn, Christian Ahlin, Eric T, Fred R, Gordon Child, Juan Benet, Michael Tedder, Owen Skarpness, Richard Sundvall, Ryan Stankye, Shawn Becker, Steef, Taras Bobrovytsky, Tazaur Sagenclaw, Tybie Fitzhugh, Ueli Gallizzi

## Transcript

**0:00** · The number of AI agents on the internet is increasing at such an insane rate. I don't think I've seen anything like this. This is crazy. And this is an area that is quite new, and the technology is still pretty rough. Improving rapidly, but pretty rough. And the promise of agents is incredible. It would book the cheapest plane ticket for you, or run 24 hours a day to manage your schedule, submit insurance claims, continuously scan a codebase for vulnerabilities and patch it.

**0:29** · Well, this is the good, but at the same time, you get so many news headlines about spam, security issues, and system breakdowns. And it gets even tougher when you have not one agent, but multiple agents. Imagine two agents organizing a holiday for you. The flight agent hallucinates a cheaper airport 400 miles away from your real destination.

**0:53** · Then, the hotel agent says, "Let's book something super cheap nearby." Well, super cheap is often non-refundable. And now, congratulations.

**1:04** · You now have a non-refundable room you will never see.

**1:09** · And so many of these problems come from the fact that agent coordination is super difficult. Now, check out what this paper says we should do. Here is a math problem. First agent writes a plan.

**1:21** · The next one critiques it, and the third one solves the problem. And at this point, I said, "Okay.

**1:28** · I see nothing interesting here. This is what everyone does with agents." Yes, but here's the key. Most agents communicate a bit like we do, in words.

**1:40** · Wait a second. Why should we do that?

**1:42** · Look at this neural interface for brain-to-text communication. Yes, this really works. You just think about a letter in the alphabet, and it magically appears. And if you keep doing this a lot, you start asking. The alphabet is optimized for writing.

**2:00** · Why use that? Why not use one that is optimized for thinking? And what would that even look like? Hint, it would look like this. We talked about this 500 videos ago, paper in the description.

**2:13** · Now, if you look at the agents, the first one does some work, packs it up, and passes it to the next one. So do the second and the third ones. Every \[clears throat\] time an agent wants to communicate something, it has to write out full sentences, decode tokens one by one, and the next guy has to read and re-encode the whole thing.

**2:36** · Why are we doing that? Who said they should talk in plain English? And this is the part where I fell off the chair.

**2:43** · Now, hold on to your papers, fellow scholars, because this work says, "Huh, forget English. You know what? Forget letters entirely." It says, "Instead, let's link up their brains." Kind of.

**2:56** · Instead of using English words, they pass raw undecoded numbers directly to the next agent. Send raw brain signals, if you will. Call it cross-agent latent state transfer. So, the theory is that these three agents can work together round one, round two, and round three much cheaper than the text-based agents.

**3:18** · They refine an answer, and you get better answers with the same amount of computation. So, is it better? Hmm, let's see. Dear fellow scholars, this is Two Minute Papers with Dr. Károly Zsolnai Fehér. Well, when given competition-level math questions, it goes from 73% to 86%.

**3:38** · That is crazy.

**3:40** · We are talking free sub-10 billion parameter models, not expensive frontier systems. And here is where it gets the Michelin star status. Look at that.

**3:52** · Ooh.

**3:53** · Token usage down 75%.

**3:57** · They all evaporated into the latent space. Loving it. So, this can improve smaller systems to be in striking distance of much bigger, more expensive models on difficult math problems. So, I bet it costs a fortune to train, right?

**4:14** · Well, look at that.

**4:17** · Four bucks. Basically, you spend your coffee money on these agents and in return they punch a hole in space-time.

**4:25** · Love it. Additionally, it might even unlock Wait, wait, wait. I shouldn't say unlock. That's AI speak. So, it might give us a new scaling law. More rounds, better results. And at this point, I thought we might have a deadly flaw here. And it's really subtle. So, the training for each agent's role is written by a giant AI model.

**4:47** · So, if they perform well, you have to ask, are things better because of the brain linking or is it good distillation from an excellent teacher? So, which one is it? A good teacher or a good architecture? Well, fellow scholars, we are in luck. This is a really good paper. So, the scientists thought about this too. And look, goodness, a controlled comparison gives the same teacher to other architectures and this one. And the new one still outperforms.

**5:22** · So, yes, the brain linking really works.

**5:26** · What a time to be alive. Okay, now, let's not get too excited. This is two-minute papers and we respect the science here. Limitations. One, tests were on smaller models. We don't yet know how these insights scale up to bigger ones. If they don't, then this puts small models on steroids.

**5:47** · Still good. If yes, potential huge game-changer. Two, there is an optimal latent thought length, and that is about 80 steps. This is somewhat of a limit on how much thinking an agent can do per round.

**6:02** · \[clears throat\] I am thinking, you know, if it solves a mathematical Olympiad problems already, how bad can that be? And sure enough, after 80, you don't get a lot of value anyway, but I wanted to mention it. Okay? So, code and models are available for free. Note that this is still very rough, very early, but it shows potential. And this is still research. Please do not think you just plug this in and everything will fly immediately.

**6:30** · We need new tools for the era of LLMs, and Weights &amp; Biases now has Weave, a lightweight toolkit to confidently iterate on LLM applications. Use traces to debug how data flows through each step of your app, and use evaluations to measure your progress. It is the best. Try it out now at wnb.me/papers, or click the link in the description below.