---
title: "They Looked Inside Claude’s AI's Mind. It Got Weird"
source: "https://www.youtube.com/watch?v=l72ufA-4SzE"
author:
  - "[[Two Minute Papers]]"
published: 2026-06-16
created: 2026-06-19
description: "❤️ Check out Lambda here and sign up for their GPU Cloud: https://lambda.ai/papers📝 The paper is available here:https://www.anthropic.com/research/natural-language-autoencodershttps://transformer"
tags:
  - "clippings"
---
![](https://www.youtube.com/watch?v=l72ufA-4SzE)

❤️ Check out Lambda here and sign up for their GPU Cloud: https://lambda.ai/papers  
  
📝 The paper is available here:  
https://www.anthropic.com/research/natural-language-autoencoders  
https://transformer-circuits.pub/2026/nla/index.html  
  
🙏 We would like to thank our generous Patreon supporters who make Two Minute Papers possible:  
Adam Bridges, Benji Rabhan, B Shang, Cameron Navor, Charles Ian Norman Venn, Christian Ahlin, Eric T, Fred R, Gordon Child, Juan Benet, Michael Tedder, Owen Skarpness, Richard Sundvall, Ryan Stankye, Shawn Becker, Steef, Taras Bobrovytsky, Tazaur Sagenclaw, Tybie Fitzhugh, Ueli Gallizzi  
  
My research: https://cg.tuwien.ac.at/~zsolnai/  
Thumbnail design: https://felicia.hu

## Transcript

**0:00** · AI systems today are really powerful and can do a lot. No question about that.

**0:05** · But, how do they really work? We have so many questions. Do they think like humans? How do they beat the best human chess player? How do they beat the world champion video game players? And how is it possible that an AI chooses to not play the game, but just collapse and can trick the brain of another AI to malfunction? Why does Claude think about blackmailing people? I mean, who what is going on here? If you look at the activations inside an AI system like Claude, you see a bunch of gibberish, millions of numbers.

**0:38** · Researchers tried to make sense of it for years and years now, but the results were very thin and situational. We now see that it understands that if you look at an image and you have floppy ears, a black snout, and so on, then it might be a dog, a good boy. But, we asked a bunch of questions and still no answers to those.

**1:00** · But, now Anthropic has excellent new research with new insights on this. This is when Anthropic is at its best, in my opinion. I love seeing it. Here's the idea. Take this bunch of numbers that the AI thinks about and ask another AI to translate it into text. Translate from machine to human. And it did something. Okay, but these systems often make stuff up. So, how do we know if this is a good translation? We don't.

**1:30** · So, what do we do here? Try it separately with a bunch of different models and see if they translated the same way. Is that a good idea? Mm, not quite. Imagine you are a teacher and you give a problem to your students and all of your students write the same answer.

**1:47** · Can you conclude it must be true? Well, not necessarily. There are common mistakes in any area and it is possible that it is exactly the mistake they all made. So, what do you do? Now, here comes the genius idea. First, AI translates numbers to text. Then, the second AI secretly guess the text and you ask it to translate it back to numbers. Uh-huh.

**2:15** · And what happened here was kind of insane. You see, H is the original thought inside Claude. Numbers, AR theta of Z is translating the text back to numbers. And then, we look at the difference between the two. Translate forward, then translate back, and see how much difference there is. This is to be minimized to ensure the translation works reliably. Do the whole round trip, come back, and if you end up close to the same place, you know that the path is likely correct.

**2:47** · But, here comes the part where I fell off the chair when reading this paper. And it is not what's in this formula. No.

**2:56** · It is what is missing from the formula.

**2:59** · You see, absolutely nothing here in this formula says that the result should be readable. Not at all. Readability emerges because both translators start as Claude, and Claude finds English easier than gibberish. But, it gets better. With this tool, they picked the brain of Claude and found many amazing things. I will highlight what I think are the three best ones. Dear fellow scholars, this is Two Minute Papers with Dr. Károly Zsolnai Fehér. One, it plans ahead.

**3:29** · When writing a rhyme, Claude picks the final word before writing the whole sentence. They caught it while it was thinking rabbit, and it went to find something that rhymes with it. Then, they replaced rabbit with mouse, and it actually rhymed with the mouse instead.

**3:47** · Sometimes, not always. Really cool. Two, this is going to be super fun.

**3:53** · Researchers gave it a math problem for which the answer is 491.

**3:58** · And then, they gave it a rigged calculator that returns 492 instead. So, what did it do? Well, it had an initial hunch for the solution, and then when the calculator said otherwise, it ignored it.

**4:15** · \[laughter\] That is incredible. And three, now hold on to your papers, fellow scholars, because it knows when it is being tested, and it gets crazier. It does not tell you that it knows. You have to peer into its mind to get to know that. This sounds like something straight out of a science fiction movie. What a time to be alive. Now, okay, limitations. Let's not get carried away here. One, this is not nearly as easy as it sounds. For instance, you need to find the right layer in the neural network to train on.

**4:48** · Also, when minimizing the squared two norm here in this formula, the translation forward is done by one AI and backwards by another. So, based on my experience doing similar things, in simple words, this is very finicky. Lots of trial and error. The result is going to be noisy. Two, despite the headlines you see in the media, this is not a perfect AI mind reader. No, this is a natural language autoencoder. Okay, what does that mean?

**5:19** · Well, it is more like a noisy translator. It catches real things, yes, but it sometimes makes up some of the specifics. Three, the cost is bearable. For a 27 billion parameter model, you train 1 and 1/2 days on 16 H100 GPUs. And for a frontier model, the cost is substantial. But, despite all these, this work is lovely, amazing, and it makes something previously impossible possible.

**5:50** · And two more papers down the line, and I bet it will be done much cheaper and better. What a time to be alive. And now, please, use this to tell me why ChatGPT keeps thinking about goblins. Now, some of these videos come out a bit later because I try to be a bit more rigorous with them. You know, a quick media headline brings in a lot of clicks, especially if you write them with AI. Then you can be super quick, and people do that. But these videos, they come from the heart.

**6:20** · Subscribe and hit the bell if you think this is the way to do it. Here you see me running the full Deep Seek AI model through Lambda GPU Cloud. 671 billion parameters running super fast and super reliably. This is insane. I love it, and I use it on a regular basis. Lambda provides you with powerful Nvidia GPUs to run your own chatbots and experiments.

**6:48** · Seriously, try it out now at lambda.ai/papers, or click the link in the description.