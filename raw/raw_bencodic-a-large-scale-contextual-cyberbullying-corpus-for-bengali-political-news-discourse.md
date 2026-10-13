Authors: Mohal Kumar Mondal, Sk. Md. Iftekhar Amin, Rashedur M. Rahman, Md. Saiful Islam, M. Shamim Akhter
Date: 2024-10-13 (Submission Date)

Title: BenCoDiC: A Large-Scale Contextual Cyberbullying Corpus for Bengali Political News Discourse FULL VERSION

Description:
Cyberbullying is a significant and growing issue in online communities, particularly in political discourse. Existing Bengali language corpora for cyberbullying detection are limited in several key aspects: contextual information, transparency of annotations, scale, accessibility, and their ability to support multidimensional analysis. These limitations hinder the development of robust detection systems and a comprehensive understanding of harasser behaviors and networks.

To address these deficiencies, the authors present the Bengali Contextual and Diverse Cyberbullying (	extit{BenCoDiC}) corpus. This is a publicly accessible resource specifically designed for contextual cyberbullying research within Bengali political news discussions. The corpus is substantial, comprising 50,250 textual instances gathered from 100 YouTube videos and their accompanying comment sections.

A key feature of BenCoDiC is its preservation of the conversational flow, maintaining relationships between captions (from videos), comments, and replies. The corpus is structured using a nine-dimensional star schema, which categorizes data across users, videos, textual content, context, time, engagement metrics, political parties involved, target identities, and language attributes.

The annotation process involved an initial evaluation of five AI chatbots to gauge their reliability in identifying cyberbullying. However, these chatbots did not meet the predetermined reliability standards. Consequently, a more robust two-tier human annotation process was implemented, featuring expert verification. This human-led approach achieved high inter-annotator agreement, as indicated by Fleiss' $κ=0.86$ and Krippendorff's $α=0.86$.

Statistical analyses were conducted to characterize the corpus. Furthermore, experiments using transformer-based models demonstrated that integrating conversational context into classification tasks led to modest yet consistent performance improvements compared to models that relied solely on isolated text.

Conclusion:
BenCoDiC is a valuable resource that facilitates context-aware cyberbullying detection. It also supports perpetrator-oriented behavioral and network analysis, contributing to a deeper understanding of online harassment dynamics in Bengali political discourse. The corpus is made publicly available at https://github.com/bencodic/BenCoDiC-Corpus.