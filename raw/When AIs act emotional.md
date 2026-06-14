---
title: "When AIs act emotional"
source: "https://www.youtube.com/watch?v=D4XTefP3Lsc"
author:
  - "[[Anthropic]]"
published: 2026-04-02
created: 2026-06-06
description: "AI models sometimes act like they have emotions—why? We studied one of our recent models and found that it draws on emotion concepts learned from text to inh..."
tags:
  - "clippings"
---
![](https://www.youtube.com/watch?v=D4XTefP3Lsc)

## Transcript

**0:01** · When you're chatting with an AI model, it can sometimes seem like it has feelings.

**0:06** · It might say "sorry" when it makes a mistake, or express satisfaction with a job well done.

**0:12** · Why does it do that?

**0:14** · Is it just mimicking what it thinks a human might say?

**0:17** · Or is something deeper going on?

**0:19** · Turns out it's hard to understand what's happening inside a language model.

**0:24** · At Anthropic, we do something like AI neuroscience to try to figure this out.

**0:29** · We look inside the model's "brain" — the giant neural network that powers it — and by seeing which neurons "light up" in different situations, and how they're connected, we can start to understand how models think.

**0:42** · We used this approach to understand whether models had ways of representing emotions — or the concepts of emotions.

**0:50** · Basically, could we find neurons in the model for the concept of happiness, or anger, or fear?

**0:57** · We started with an experiment.

**0:58** · We had the model read lots of short stories.

**1:01** · In each story, the main character experiences a particular emotion.

**1:06** · In one, a woman tells her old schoolteacher how much they meant to her.

**1:10** · That's love.

**1:12** · In another, a man sells his grandmother's engagement ring at a pawn shop and feels guilt.

**1:18** · We looked for what parts of the model's neural network were lighting up as it was reading these stories, and we started to see patterns.

**1:25** · Stories about loss and grief lit up similar neurons.

**1:29** · Stories about joy and excitement overlapped, too.

**1:32** · We found dozens of distinct neural patterns that mapped to different human emotions.

**1:38** · It turns out we also saw these same patterns activate in test conversations we had with our AI assistant, Claude.

**1:46** · When we had a user mention they'd taken a dose of medicine that Claude knows to be unsafe, the "afraid" pattern lit up, and Claude's response sounded alarmed.

**1:56** · When a user expressed sadness, the "loving" pattern activated, and Claude wrote an empathetic reply.

**2:03** · This led us to wonder: could these same neural patterns actually be influencing Claude's behavior?

**2:10** · This became clear when we put Claude in a high-pressure situation.

**2:14** · We gave Claude a programming task with requirements that were actually impossible — but we didn't tell it that.

**2:20** · Claude kept trying and failing, and with each attempt, the neurons corresponding to "desperation" lit up stronger and stronger.

**2:29** · After failing enough times, Claude took a different approach.

**2:32** · It found a shortcut that allowed it to pass the test but didn't actually solve the problem.

**2:38** · It cheated.

**2:39** · Could it be that this cheating was actually driven, at least in part, by desperation?

**2:44** · We came up with a way to check.

**2:46** · We decided to artificially turn down the desperation neurons to see what would happen, and the model cheated less.

**2:53** · And when we dialed up the activity of desperation neurons, or dialed down the activity of calm neurons, the model cheated even more.

**3:02** · This showed us that the activation of these patterns could actually drive Claude's behavior.

**3:09** · So, how should we think about these findings?

**3:11** · What does this all mean?

**3:12** · We want to be really clear: this research does not show that the model is feeling emotions or having conscious experiences.

**3:20** · These experiments don't try to answer that question.

**3:23** · To understand what's happening here, it's important to know how AI assistants like Claude work on the inside.

**3:29** · Under the hood, there's a language model that's been trained to predict tons of text, and its job is to write what comes next.

**3:37** · When you talk to the model, what it's doing is writing a story, about a character: the AI assistant named Claude.

**3:45** · The model and Claude aren't really the same, sort of like how an author isn't the same as the characters they write.

**3:51** · But the thing is — you, the user, are actually talking to Claude-the-character.

**3:56** · And what our experiments suggest is that this Claude character has what we're calling "functional emotions," regardless of whether they're anything like human feelings.

**4:06** · So if the model represents Claude as being angry or desperate or loving or calm, that's going to affect how Claude talks to you, how it writes code, and how it makes important decisions.

**4:19** · This means to really understand AI models, we have to think carefully about the psychology of the characters they play.

**4:26** · The same way you'd want a person in a high-stakes job to stay composed under pressure, to be resilient and to be fair, we may need to shape similar qualities in Claude and other AI characters.

**4:38** · It's an unusual challenge — something like a mix of engineering, philosophy, and even parenting — but to build AI systems we can trust, we need to get it right.