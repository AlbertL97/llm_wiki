---
title: "The Conscious Turing Machine (CTM), a formally defined Theoretical model of Consciousness"
source: "https://www.youtube.com/live/qjtYl3zWv-w"
author:
  - "[[Simons Institute for the Theory of Computing]]"
published: 2026-05-28
created: 2026-06-06
description: "Manuel Blum (Carnegie Mellon University)https://simons.berkeley.edu/talks/manuel-blum-carnegie-mellon-university-2026-05-27The Role of TCS in Modern Machine ..."
tags:
  - "clippings"
---
![](https://www.youtube.com/watch?v=embed)

## Transcript

**0:00** · \[AVRIM BLUM\] Um, today— So... What? Oh, I probably just need to speak closer to it. Right. So, let me introduce—so I guess someone who, He needs no introduction, but I'm gonna introduce him anyway. So Manuel Blum, AKA Dad, someone I've known my, my whole life. Um, so... You know, Manuel's... he's...

**0:34** · All right. So Manuel's winner of the Turing Award for his work in complexity theory and cryptogra— foundations of cryptography and pseudorandomness. He also was well known as sort of a—as being the advisor of the who's who of leaders in theoretical computer science and beyond.

**0:55** · And he is Especially known for his work on trying to formalize things that seem really hard to formalize and notions of pseudo-randomness, for example. And today he's gonna be talking about probably the most nebulous concept of all, consciousness, and aiming to formalize that.

**1:20** · Manuel. \[MANUEL BLUM\] Thank you. \[AVRIM BLUM\] Oh, and let me just say that so Manuel's gonna give a talk, and then Lenore's gonna give a talk, and then they're gonna take questions kind of on the combined Two talks. Okay, so here we go.

**1:33** · \[MANUEL BLUM\] Great. Thanks.

**1:39** · Hi there. So yeah, there's a tie. I just wanna say that Professor Dana Scott is there in the back.

**1:47** · Hey, Dana, waving his hand. Thank you very much for coming. He's the one, he and Rabin came up with the whole notion of nondeterminism, which has been so wonderful, and among many other things, so one of the leaders Yes. So, good.

**2:09** · Okay, there's Avrim. \[AUDIENCE MEMBER\] With a flower. That's nice.

**2:15** · \[MANUEL BLUM\] Nice, yeah. Yeah, happy birflday, Avrim.

**2:22** · And thank you, Santosh, and Nina, and Nika, and Anupam, and Katrina.

**2:27** · Where is Katrina? I saw her. Yes. There she is. And Yishay.

**2:35** · Good. Thank you very much for making this such a nice celebration. So there's Avram when he's a year and a half old, reading.

**2:45** · The waitress said, "He's reading?" Yep. There's us on the motorcycle.

**2:52** · I was crazy then. Probably still am. Avrim takes a bus, first in his class to take a bus.

**3:00** · Gives me everything that he has that I love. I mean, his best things he gives me, things that he finds out there. This is interesting. When he was 11 years old, a teacher gave the class an extra credit problem, homework problem, and so hard problem.

**3:22** · He went home. He programmed our little computer to get examples.

**3:29** · I thought, "What a great idea." You know, now we know But then hadn't thought of it.

**3:35** · What a great idea to get examples so that when he woke up, why, he could prove the, he knew what he should do to f- prove the theorem. So cheating. The teacher said, "No credit."

**3:52** · That's crazy, isn't it? That's—they're crazy nowadays too. They say you can't use ChatGPT.

**3:59** · Oh, come on. You should be able to use every tool that's available. It's the teachers that have to figure out if it's their thoughts or somebody else's. There's Avrim.

**4:13** · He had office hours at MIT because he needed to be able to do his own work too.

**4:21** · He gave me this beautiful glass cup. Thank you, Avrim. I love it. A very delicate little handle, but I love it.

**4:29** · We went to CMU. Dad, mom.

**4:35** · That was cute. There he is now, academic head of TTIC, but interim president, maybe going to be a president.

**4:43** · You get two salaries? Okay, consciousness.

**4:49** · So I started wondering what's in my head when I was 10 years old Basically, I wanted to get smarter, and the only way to do that is to figure out what's going on in there. And I tried introspection, and it just didn't work.

**5:04** · You know, introspection doesn't give you what's in your head. It felt like there was a little person looking out through my eyes. And that doesn't help. And I couldn't understand how the eyes and the ears and everything else and arms, how could all of these, the processing that's being done there, come to seem like it's coming from a homunculus. And I didn't actually get an answer until maybe 15 years ago when Lenore told me, "You gotta look at Baars." So I'm getting ahead of myself.

**5:39** · First, what's consciousness? What you see, what you hear, what you feel, what you dream.

**5:46** · So dreams are conscious. Dreamless sleep is not.

**5:52** · No problem. So- Turing machine versus conscious Turing machine.

**5:58** · So the Turing machine, you know, is defined to be able to understand computation, algorithms, right?

**6:05** · The CTM is designed to understand consciousness. That's what we want from it. So we want a very simple model, a very, very simple model of a machine that...

**6:21** · It's not really a brain. It's got to be, but it's got to be conscious.

**6:28** · And it's got to, so we call it Occam's razor simple. It's got to be absolutely simple, And it's got to be able to answer questions. The questions that we might have about consciousness.

**6:40** · Kevin Mitchell, we're very lucky. There's this professor, Kevin Mitchell, who wrote out 15 questions that a theory of consciousness should be able to answer.

**6:51** · And it's great, 'cause we can, so we can say it's got to be this simple, and it's got to answer all these questions.

**6:58** · And we went through model after model after model trying to get something that would be simple and would answer the questions. One especially that I wanted was I wanted a deterministic machine because I wanted to be able to show that even freedom (Free will) \[MANUEL BLUM\] Yes, thank you. That even free will, that even in a deterministic world, you will feel you have free will. Uh, and so I wanted it to be deterministic, but couldn't get that. It has to be probabilistic, we found.

**7:38** · Okay, so here's what I would tell the 10-year-old. 10-year-old wants to know how to think about what's in his head.

**7:45** · Okay, 10-year-old, here's Bohr's model. What's in your head is this huge auditorium filled with lots of processors, million processors, looking at what's going on on the stage.

**8:00** · And what's going on on the stage is what you're conscious of And the processors, well, they have some ideas of their own of how the play should continue.

**8:12** · Each person has their own idea. Some ideas are better than others. Somehow they arrange among themselves for one of them to actually determine what will go on on the stage. And it's what's on the stage that you're conscious.

**8:28** · It's the stage stuff that's broadcast. Okay, our model, yes, and I want to make it very clear It's our model that Lenore is absolutely as important as I am on this. Okay, so anyway, so what's the CTM?

**8:52** · So our model's a bit different. There's only one person up on the stage, and That's not so interesting, is it? Just one person, you don't actually But what that person is saying, that is broadcast and that is what you're conscious of. So here's Baars on the left with nice stuff going on. Blums on the right, not so interesting, just one speaker there.

**9:23** · But, um But see, bars never really explains how it's decided what will get up to the stage. So what we want from our model is a very clear statement of exactly what gets up on the stage.

**9:43** · Let me just mention about this that the CTM, so CTM is conscious Turing machine, I'll call it the CTM, is not conscious of the world directly.

**9:55** · You are not conscious. You feel like you're conscious of what's going on, but no, that's going into your eyes and your ears, and the processors there are actually putting, turning what's up there, what's out there into a short phrase, a brain—a phrase in a language we call brainish. And you are aware of only what comes to you in brainish.

**10:20** · You are conscious only of the brainish. Of course, at the start, that brainish has just one word in it, nil. Not very much.

**10:34** · So we have to explain what I'm going to try to show you is how the CTM develops its own language.

**10:43** · So you'll see it develops its own language.

**10:48** · So, global workspace metaphor. So the processors in this audience communicate with chunks. You heard maybe about the seven, You're conscious of seven plus or minus two chunks. CTM has one chunk.

**11:07** · That's it. We want it to be Occam's razor simple, one chunk. Here's what a chunk is.

**11:12** · It's a tuple. Don't we like tuples? Processor, time, gist, weight.

**11:19** · The processor that created the chunk, the time it got created, a little bit of information, which initially has to be nil because that's all you have, but after a while, that gist of information will be a string of word, a set of words, no more than eight words allowed And we'll see how those words get created.

**11:40** · And W, the importance of that information, a weight. Okay? CTM is conscious only of chunks broadcast from the stage.

**11:50** · And you can get an idea of what a chunk is when you have a dream. Your dream, that frame of a dream that you have in your dream, that frame is a chunk. Chunks are these multimodal tuples that really give you a sense of the feeling and what you see and what you hear and all of that.

**12:16** · Okay, so as we said, the CTM is not conscious of the world directly, only indirectly.

**12:25** · That's very important here, only indirectly. So here's the model.

**12:32** · Has a clock that runs at 10 ticks per second. Alpha rhythm, 10 ticks per second.

**12:39** · At each tick, all the processors put a chunk into this competition.

**12:45** · The winning chunk gets broadcast to the audience. 10 ticks per second, 10 times per second, processors are putting into competition. The competition, the winner gets broadcast.

**12:58** · And this is going on 10 times per second. So let's see an example of this, birth of an infant with CTM brain. Okay, so I'm going to assume here that this is a nice, easy birth. Births aren't always, but this infant is born.

**13:20** · It has an easy birth. It has good eyes. Actually, this is true of humans.

**13:26** · Humans have pretty good eyes, even at birth, but all they see is a blob. What you have is this predict, observe, correct machinery in the input processors works from the get-go.

**13:39** · You know, the blob becomes clearer with time. It's completely unconscious.

**13:46** · What that infant is seeing is a blob.

**13:53** · You know, everything it predicts, it observes, it corrects that machinery.

**13:58** · So that blob, well, eventually it's corrected. It's a blob with two dots. And so when it sees it, it predicts that the next thing will be the same blob with two dots. But then the prediction isn't quite right.

**14:14** · The head has moved. The two dots are slightly to the right. You turn your head to the left, the dots seem to move to the right. You learn the predict-observe-correct machinery learns that, well, where that thing is facing depends on how you move your head. So the blob becomes clearer with time, little by little.

**14:42** · The first few broadcasts of this infant, since it's a nice, easy birth, are very simple.

**14:49** · There is the processor that All processors are creating these chunks, putting them into the competition. Well, here's a processor that at time one puts in the only word it has, which is nil, and a weight of zero 'cause nothing important there. And then at the next moment in time, it's the same or different. It could be a different processor. This is time two, nil.

**15:17** · Zero. And this just, just continues like this, nothing special, until at some point, some processor, some processor that which is measuring the oxygen begins to complain.

**15:33** · There are, let me mention, there are four types of processors. There's the input processors, the output processors, the gauges. The gauges are very important. They measure stuff, And one of them measures oxygen and begins to say, "Well, oh, I need oxygen." And so you can see that's the processor P sub x at time t.

**16:00** · T sub X plus one nil minus one. First time you get something of negative weight, then minus two, then minus three. Eventually, the complaint gets loud enough that every processor has built in the requirement.

**16:21** · When the weight is very negative, stop what you're doing and pay attention and try to turn that around.

**16:29** · And if it gets below a threshold, then absolutely put everything you can on the side.

**16:35** · You must get that. Turn that around. So this infant, well, the legs flail, the arms flail, the infant pees and poos, the infant screams and cries. That brings in the oxygen.

**16:50** · Isn't that wonderful? Doesn't have to be built in. The infant's first significant word will be the pair, the processor that actually Screamed—the time it screamed at this high, it becomes the brainish word for pain. It's just that processor and the time.

**17:09** · That's the first word, significant word, the brainish word for pain.

**17:17** · Okay, there it is. P sub x, t sub x plus theta.

**17:24** · Actually, let's see. Nil, yeah, because still don't have any words. But a very negative weight.

**17:32** · Okay, it will turn out that the first two letters, the P and the T, will become the word for pain, and it will point to this chunk as the definition of that particular word.

**17:49** · So of all the things, this is lovely, Of all the things that the infant did to try to stem the pain, the crying and the screaming is what worked.

**18:00** · And the infant's second most significant word will be, you know, you know, the crying seemed to help.

**18:10** · Crying and screaming. And this, the infant will find this happening again and again.

**18:16** · The infant will learn that any time there's something negative, scream and cry.

**18:21** · That's the solution. Okay. So the word, this Brainish dictionary, we use Brainish in English, Spanish, Brainish. Okay, so this is the dictionary of the language that the processors use to talk to each other. And in this dictionary, the PT, the first two letters are short, and they are a word, and they're a good pointer in the dictionary to the chunk, which is its meaning All the processors put this broadcasted chunk into their dictionary.

**18:58** · The processors are all getting the same chunk, the broadcasted chunk, at the same time.

**19:05** · All at exactly the same time, and at the moment they get it, they put it in the dictionary. So this dictionary is growing.

**19:15** · Yes, go ahead. \[AUDIENCE MEMBER\] Each processor has its own dictionary? \[MANUEL BLUM\] And they're just copies? Yes. Every processor has its own dictionary, and all the dictionaries are the same. They are the dictionaries of the broadcasted chunks. There can be other chunks, but it's the broadcasted ones that go into the dictionary. Thank you.

**19:36** · So good. Okay, so the definition of a CTM, it's a tuple also.

**19:44** · STM, LTM, Up-tree, Down-tree, input, output, links.

**19:51** · STM is the stage, short-term memory. LTM, that's the audience, long-term memory.

**20:00** · Up-tree, that's the competition. Down-tree, that's the broadcast.

**20:06** · Up-tree takes a while, down-tree is fast. Input from the outside, the input goes to the processors. The processors, the input processors take that input and immediately convert it into chunks.

**20:23** · So you are conscious, the CTM is conscious only of those chunks.

**20:29** · Input, output, same thing. So the output processors, they get a chunk, move your hand here, gets that chunk. It does, that output processor does that.

**20:43** · And there are links. Initially at the start, no processors are linked at all.

**20:49** · The only way two processors get linked is one of them asks the question, another one answers it, and this conversation goes on through short-term memory, and that creates a link, a two-way link So actually that's very important because there are just too many possible links.

**21:13** · You can't—there aren't enough neurons in the brain to have every pair linked. Only one in a thousand of possible links can exist there.

**21:27** · And we don't know which processors should be linked, so we don't have any of them linked to start.

**21:34** · Okay, here it is again. STM is the stage, a buffer and broadcasting station.

**21:40** · LTM is the audience of 2 to the H processors. We took H equal to 24.

**21:47** · It probably should be 20. The uptree is a binary competition.

**21:52** · By the way, this H, we try to do everything in terms of variables.

**21:57** · We don't know what these numbers should be. But our, in our examples, the number of processors is 10 million. You know, all of the numbers are given values that are roughly what we would want from what we know about the brain. Roughly. So the Up-tree is this binary competition that chooses a winner. The Down-tree is the broadcast. A broadcast takes just one step.

**22:28** · The input is the eyes and the ears and so on, the temperature, the pain.

**22:33** · Output is the legs, the hands, the larynx that did the crying. The links are all two-way communications.

**22:41** · Axons only send stuff in one direction, but, in this case, you have two different neurons for every link.

**22:52** · CTM has no links at birth, and it's easy to see that only one in a thousand links are possible anyway. At the, at the most. Time passes in ticks.

**23:06** · Ten— here I have eight ticks per second. And the lifetime of the...

**23:13** · We said two to the 34 ticks, and that turns out to be 64 years.

**23:19** · I like the— like the numbers to be powers of two, integer powers of two.

**23:24** · And 64 was okay, and 128 was too much, so 64 it is.

**23:33** · Chunks are the words of Brainish. So at time T, every processor puts an idea in the competition.

**23:42** · At time T plus H, one of those processors will have won the competition.

**23:51** · The winning chunk is received by broadcast at time T plus H plus one. And then the winning chunk is all that CTM is conscious of.

**24:01** · That's it. It's that processor, the time, the gist, which is at most eight words, and the weight.

**24:11** · So here our first theorem has to do, and which is our only theorem, has to do with the winner-take-all tournament. I don't know if I've never seen this, but if you have, I'd like to know because this was new to me. So we came up with the fact that winner-take-all is very interesting. It guarantees that every chunk in the end has a probability of winning proportional to its weight.

**24:45** · Hard to believe, but it's really true. It doesn't matter where the processors are. The probability of winning is its weight divided by the sum of all weights. So here's a typical processor, in this case on eight different Typical competition tree on eight different processors which happen to have the weights 3.1415926.

**25:11** · And so what we're saying is that in a winner-take-all scenario, the probability that A, the one that has weight 3, wins will be 3 divided by the sum. That's 31. And the probability that B wins will be 1 divided by 31.

**25:28** · That's the sum. That's in the winner-take-all. You can see here that the probability that A wins round one, well, it's three, its weight, divided by the sum, three plus one is four.

**25:42** · So its probability of winning that first round, three-quarters.

**25:47** · Let's look at processor nine Processor F, which is, sorry, which has a weight of nine. It's the highest weight. You might think that you want the winner to be the one which has the greatest weight You know, in a deterministic machine, you choose that one to be the winner. That does not work. There are many reasons why that's bad, right?

**26:13** · For one thing, maybe there are several processors have a high weight.

**26:18** · One has a little higher than all the others and just stays there, and as long as they all have that weight, that processor is the one that keeps winning, and you don't want that. \[AUDIENCE MEMBER\] Why do you need a hierarchy?

**26:31** · Why not just sample the weights? \[MANUEL BLUM\] Why not, in fact, sample the weights?

**26:37** · Yes. But there are no links. How is a processor to know what the other- \[AUDIENCE MEMBER\] And force through the links. \[MANUEL BLUM\] Okay. Yeah. So thank you. I mean, that's very important that you, if you wanna find out what the sum is, for example, you need to do this anyway.

**26:58** · So we're not doing anything more than you would absolutely have to do Okay, so here's processor F, weight 9. The probability that it wins the first round is 9 divided by 5 plus 9 is 9/14. Okay, so these numbers here are all the sums.

**27:19** · It's 14. The sum of the two on the right, 2 and 6, sum to 8.

**27:27** · The probability that F will win the second round is gonna be that 14 divided by 14 plus 8, 22.

**27:35** · So the probability it wins the second round is 14/22. And the third round, and what's the probability that F wins the tournament? See, we're saying it's going to win with probability proportional to its weight.

**27:50** · Well, it's nine thirty-one, sorry, it's nine fourteen, the first probability it wins the first round, times fourteen twenty-two, second round, times twenty-two divided by thirty-one, the third round. And look, the fourteen is canceled, the twenty-two is canceled Nine out of 31. Isn't that cute? Nine out of 31.

**28:15** · Doesn't matter where the processors are. You can move them around. This is not true of tennis tournaments.

**28:22** · It is not true of chess tournaments because they... But it is true of this tournament, and it's really helpful that it doesn't matter where the processors are. The probability of winning is exactly the same.

**28:37** · At the top, you have no idea where the processors are. Isn't that nice? I mean, when you're setting up tournaments, normally like tennis, you might have some people on one side, some people on the other. You move them around.

**28:50** · The brain is not gonna move stuff around. It doesn't have to.

**28:56** · Okay. So, Anyway, we had a problem. It's a nice competition.

**29:07** · We really liked it. But where do the weights come from?

**29:13** · We decided, well, you know, sort of, the gauges are very helpful in telling you something about the weights.

**29:20** · Because initially, a nociceptor, which for example tells you about pain, well, it's got a certain frequency.

**29:26** · The higher the frequency, the more the pain. These numbers are fixed. We tend to think of the frequency of a nociceptor fiber as being something that moves smoothly. When you look into it enough, no, there are ten different frequencies that count. Ten different... You have no pain all the way up to the worst pain you can.

**29:47** · That's the way the nociceptor works. Okay, so how are weights determined?

**29:53** · So yes, it's nice that the nociceptor will take what it tells us as the amount of weight it'll put into the chunk.

**30:04** · But then what? So Avrim, we have a problem. You remember? We have a problem.

**30:10** · And what was great is he said. So he said, "We have a problem.

**30:16** · How do the processors set their weights? How do we make sure that the processors stay honest?"

**30:23** · You know, maybe a processor is dishonest, who's trying to get it up into the stage.

**30:29** · How do you keep the processors honest? And so Avrim responded, "Mom, Dad, I've got just what you need that solves the problem, a solution to the sleeping experts problem."

**30:45** · Okay. And Avrim can tell you about that. It's how you, the sleeping experts are—every processor has a sleeping expert that looks at the weight that that processor is putting into the, into the— Into the competition, and if the processor is too forward, too eager, it'll tamp down the weight. And if it's kinda not strong enough, it'll raise it.

**31:13** · And Avram tells you exactly how to-- Avram and Nina and others tell you exactly how to do this so that you really are converging in the long run to the correct way.

**31:29** · And there's this paper, Advancing Subgroup Fairness via Sleeping Experts.

**31:34** · Let me just mention that this paper assumes that there's a teacher at the front who has a list of questions, knows what the questions are, knows what the answers are. We don't have that in the CTM.

**31:47** · We don't have a teacher at the front. No teacher at the front, no central executive.

**31:53** · So it took a lot of work to be able to make this actually work out for the CTM.

**32:01** · Conscious attention. We call the focus on broadcasted chunk conscious attention. The conscious attention, all processors are getting the same chunk at the same time, and we define conscious attention is to that chunk.

**32:20** · That's what the thing attends to. It can do other things, but it's attending to that.

**32:28** · So we call the homunculus problem. It's actually called the binding problem, and the introspection suggested that there's a homunculus in there. This solves the homunculus problem.

**32:42** · Every single processor is getting exactly the same information at exactly the same time, in the same tick.

**32:51** · They are all getting that information at the same time. No wonder it feels like there's one Processor up there. Okay, now for phenomenal consciousness.

**33:06** · So, did I mention, haven't yet, phenomenal consciousness?

**33:12** · So phenomenal consciousness has to do with feelings, anxiety, jealousy, joy, love, sadness, fear.

**33:19** · You know, there are all kinds of emotional feelings that you can have. I really wanted to understand pain.

**33:27** · And Lenore really wanted to understand pleasure. So we divided up the problem between us.

**33:33** · I work on pain, she works on pleasure, and it's wonderful.

**33:42** · So here what I'll talk about is the pain. So if a robot says it feels pain, is it really suffering or is it simulating? I mean, that's what was bothering me.

**33:58** · What's been bothering me is how we can make a robot say that it has pain.

**34:04** · When it gets damaged, you can have the circuitry tell you, "Yes, there's damage here," what kind of damage, how much, how much damage there is.

**34:15** · Yes, you can have that. You can know about it. But that's what's called, what David Chalmers calls the easy problem. Make a robot that knows when it is damaged, that's easy.

**34:26** · We know how to do that. The hard problem, make a robot that really suffers when it's damaged.

**34:34** · It should suffer. Often I get from people, You want to make your robot suffer? Oops, five minutes?

**34:45** · Thank you. Yes. Oh, okay. You want to make your robot suffer? Hey, we have kids. We don't mind having children, and we know that they will suffer. Why are you so concerned about the robot suffering?

**35:00** · Okay, so there we go. So about phenomenal consciousness.

**35:07** · It's been said that the pain you feel when you burn your finger on a hot stove is a made-up pain, an illusion.

**35:15** · Really? An illusion? It's so hard for me to believe that that pain I feel is really an illusion.

**35:24** · So wonderful thing happened with me. I took a nap. And in this nap, I had a cramp.

**35:32** · This was a terrible cramp. I had a terrible, terrible pain in my leg, and I woke up and there was no cramp.

**35:39** · There was no pain. Instant disappearance of the pain. No pain.

**35:45** · I touched my leg. Had not been no pain there at all.

**35:51** · My body was proving to me that it could create the pain of a cramp in my sleep Which it has to be able to do is going to create it when you're awake. So an explanation for the intense pain, extreme pain occurs when a chunk of extreme pain, a scream of pain in Brainish, gets to STM, and its great intensity, greater than theta, makes it almost impossible for other chunks to get into that short-term memory. All processors are forced to try to stop the pain.

**36:27** · So confirmation for extreme pain I've only been, this is wonderful.

**36:32** · I've only been in agony a couple of times in my life, and I was good for nothing, rendered almost immobile.

**36:39** · Reason left me, so did language. That's what serious pain does for you.

**36:45** · Less intense pain, even less intense pain. Participants that identified as experiencing pain for six or more months demonstrated clinically low levels of pain, but nevertheless performed significantly worse than pain-free participants under a variety of tests Three minutes? The talk's about to begin.

**37:11** · Axiom one. Simultaneous reception of a broadcasted chunk by all processors evokes a unitary experience. There have to be axioms to this.

**37:25** · Just like how, how, how, why do you believe that F equals MA is true? It's not proved.

**37:30** · It just, it works. It really works. That's how you know that F equals MA is correct.

**37:36** · That's the axiom of physics. Here, the axiom is simultaneous reception of a broadcasted chunk evokes a unitary experience.

**37:47** · What makes axiom one believable is simultaneous reception. All processors attend to the same chunk at the same time.

**37:57** · Axiom two, when CTM inspects a chunk P, T, G, W with G nil, it evokes in CTM a unique primal subjective experience. We're not saying what kind it is.

**38:09** · It's completely determined by that P and that T. That determines, and if it's a very big negative weight, that particular P, T is going to be the word for pain. And this axiom two is saying that that will--

**38:26** · that the primal subjective experience will be evoked When it looks carefully at that weight. Then there's what happens with later on, but let's keep on going. Now for an explanation of the suffering of pain as opposed to the mere knowledge of pain.

**38:50** · So you've already seen one explanation. Processors cannot do anything but attend to the pain, and that is painful. But that's still hard to believe. You can't do anything, therefore you feel pain.

**39:03** · Or you feel pain, therefore you can't do anything. Which is it? You know, most of us would say you feel pain, so you can't do anything. But others say you can't do anything, that's why you feel pain.

**39:14** · Which is it, one or two? And probably it's both, and we could go through how it would each one make You can't do anything, that gives you some pain.

**39:25** · You can't do anything, pain. Okay. Here's another better explanation for the suffering of pain So the suffering of pain comes about when the injury in the model of the world is labeled pain and self.

**39:38** · These are the pain, the first word it had, self, which comes up soon after.

**39:44** · These two words are very important. So in the world, you may have a skinned knee.

**39:50** · In the model of the world, you having these brainish words, self and pain, attached to that injury.

**39:59** · They are labels like colors in the model of the world. You see yourself with that injury.

**40:05** · You see it's yourself, and you feel that it's pain. How can mere labels generate pain?

**40:14** · But these are not mere labels. They're Brainish, like the frame of a dream is Brainish.

**40:20** · These labels are really multimodal.

**40:26** · Brainish. Okay, so this, this seems crazy, right?

**40:32** · I mean, What we're saying, what's causing the suffering of pain is seeing that that injury is labeled pain and self.

**40:43** · Doesn't that seem crazy? So here's the argument why it's gotta be true. It's... no, well, not why.

**40:51** · Here's the argument, one of the arguments for why this is what's going on. There's this interesting disorder called pain asymbolia.

**41:01** · Oh, it's interesting. People with pain, you get knocked on the head, you get pain asymbolia.

**41:07** · You will know that you have pain, but it's okay. You don't suffer from it.

**41:13** · Doesn't that sound wonderful? Everybody I talk to, they would like to have that.

**41:18** · But it's a terrible thing. Kids that are born with this, they don't live more than three years.

**41:24** · They just... And even people that get knocked on the head, they begin to damage themselves because they don't actually feel it.

**41:35** · So pain asymbolia. In the disorder called pain asymbolia, the patient knows she has pain, but does not suffer.

**41:43** · The first explanation for this, Nikola Grahek, very important.

**41:48** · "The patient is not conscious of pain," but is conscious of self."

**41:54** · I can see it's damaging my knee. I can see it's me that's been damaged, and I can...

**42:01** · But no pain, no suffering Colin Klein, some years later, said, "No, the patient" is not conscious of self. It's conscious of pain, but not of self."

**42:13** · How can that be? So here's an example of how that's described. Here's a person who has this pain asymbolia.

**42:20** · He says, "When a part of my body hurts, I feel so detached from the pain, it feels as if it were somebody else's pain." Isn't that interesting? Weird?

**42:36** · Philip Gerrans asks, "Which explanation is correct?"

**42:42** · Is it pain? Not conscious of pain, but conscious of self?

**42:47** · Not conscious of self, but conscious of pain? Which one is correct? The answer from CTM is that there are two different pain asymbolias. There are these two different labels, self and pain. You missing one, you're gonna have pain asymbolia. You're missing the other, you'll have pain asymbolia. There's even gonna be a third pain asymbolia when you're missing both, but they're not called pain asymbolia. So, let's see.

**43:14** · So this is our prediction that there really are two different pain assemblies.

**43:21** · We're predicting that within the next few years the neuroscientists will realize that that's the case.

**43:29** · So summarizing, CTM is precisely defined, as precisely defined as a Turing machine. It's defined to gain an understanding of consciousness, the way the Turing machine was designed to understand computability. The second thing, CTM has no central executive.

**43:52** · All the other models that we know of have a central executive to decide, for example, who gets up on the stage, to decide if a task has to be done, who should do it. That's crazy.

**44:03** · You cannot have one person know everybody's abilities and decide who should actually go about doing it.

**44:09** · We don't have a central executive. It's replaced by this winner-take-all competition.

**44:16** · Brainish is the self-defined language that processors use to communicate with each other.

**44:21** · And the pain and self-Brainish are responsible for suffering and pain. That's it.

**44:28** · This AI consciousness is inevitable. I thank you, Lenore.

**44:33** · That was Lenore's wonderful idea. Call it that. That's it.

**44:39** · (applause) \[AVRIM BLUM\] All right. So... All right, so our next speaker is also someone I've known my whole life. Let me just highlight a few things about Lenore.

**44:57** · So, I mean, she's a long time