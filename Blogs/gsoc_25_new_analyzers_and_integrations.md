---
title: IntelOwl Improvements and Integrations
date: 2025-09-01
cover: /images/gsoclogo.png
author: Akshit Maheshwary
---

### Introduction
It has always been on my mind for a while, to contribute to a great open-source project, like IntelOwl, in a significant manner and though I knew about GSoC earlier, I never paid much attention to it . But here I am, finally documenting everything that I have done this summer as part of Google Summer of Code 2025.   
### Pre-GSoC Commits/Discussions.


- Added [Androguard Analyzer](https://github.com/intelowlproject/IntelOwl/pull/2555) to reverse engineer APKs 
- Added [NVD CVE Analyzer](https://github.com/intelowlproject/IntelOwl/pull/2560)
- Added [MobSF Service Analyzer](https://github.com/intelowlproject/IntelOwl/pull/2584) to perform static and dynamic analysis of APKs straight from IntelOwl 

These were some of my PRs that got merged after being reviewed by the project maintainers. I'd also started working on other issues as well such as [#2407](https://github.com/intelowlproject/IntelOwl/issues/2407)
which had improved my understanding around some of the core parts of the architecture of IntelOwl.

# GSoC Scope of Work and Deliverables

GSoC idea that I've been selected for, involved **designing and development of new analyzers** for IntelOwl to enhance the threat intelligence
capabilites of IntelOwl, further. 

Apart from that, I had the opportunity to work on optimising the performance of IntelOwl's sister project [Honeyscanner - A vulnerability analyzer for honeypots](https://github.com/honeynet/honeyscanner) 
which was not in scope of the proposal, but since HoneyScanner analyzer had to be added, as per the initial proposal, so it was worked on as well.

Now I'll proceed with elucidating the work that I've done.

## Addition of New Analyzers

- Added [HuntingAbuseAPI Analyzer](https://github.com/intelowlproject/IntelOwl/pull/2885) which provides an updated list of false positives from all it's services. This API can be queried to verify. if the provided observable is valid or false positive.
- Updated [GreedyBear Analyzer](https://github.com/intelowlproject/IntelOwl/pull/2902) to fetch the command sequences executed in a honeypot using CommandSequenceAPI from GreedyBear.
- Integrated [GuardDog](https://github.com/intelowlproject/IntelOwl/pull/2930) to IntelOwl, as part of which 2 analyzers, **GuardDogFile** and **GuardDogGeneric**, have been added in order to scan for malicious pypi, npm and go packages.
- [ExpandURL Analyzer](https://github.com/intelowlproject/IntelOwl/pull/2920) has been added to IntelOwl, which basically follows the redirection chain for a provided malicious shortened URL and expands it to it's original form for further analysis.
- Added support for [JoeSandBox](https://github.com/intelowlproject/IntelOwl/pull/2925), as part of which 2 analyzers, JoeSandBoxURL and JoeSandBoxFile, to enhance the malware analysis capabilities of Intelowl for a provided sample of file or URL.
- [Refactored Flare Capa and Flare Floss analyzers](https://github.com/intelowlproject/IntelOwl/pull/2933) using the traditional analyzer design, in order to solve the problem of managing binaries and tracking updates.
- Integrated the younger brother [Yara-X Analyzer](https://github.com/intelowlproject/IntelOwl/pull/2980) to provide faster executions from single analysis. Alongside this, [Yara-Forge Rule Repository](https://yarahq.github.io/) has also been integrated to provide enhanced rule set selection, as part of this PR.
- Added [Honeyscanner Analyzer](https://github.com/intelowlproject/IntelOwl/pull/2982) to provide capability of vulnerability detection in deployed honeypots.  

## Optimization of core parts of Honeyscanner 
- As part of the original GSoC proposal, Honeyscanner analyzer was supposed to be integrated, but the pre-existing design of Honeyscanner was such that vulnerability scan for
  a single honeypot deployed over external network would theoretically take more than 2 days to finish.
- So as part of the integration of honeyscanner analyzer, significant effort has gone into optimizing the various core parts of the program to achieve faster execution times.
- This PR [Optimization of Core parts of honeyscanner alongside Packaging via pyproject.toml](https://github.com/honeynet/honeyscanner/pull/51) mentions everything that has gone into making honeyscanner viable to integrate into InteOwl.
- Some highlights:
  - **Reduced the execution** time from ~ 54 hours to ~ 11 minutes for honeypots hosted over external network by leveraging `asyncio` library to perform cooperative scheduling of tasks.
  - **Implemented selective fuzzing** for externally and locally hosted honeypots to optimise the fuzzing that suits the best to each environment.
  - **Optimised tar_bomb attack** to perform concurrent operations, with the help of `asyncio` library.

# Ending Note and Future Work

I really had a great time working on improving IntelOwl, and making some threat analyst's life easier. I couldn't have imagined that I would 
get the opportunity to be part of this year's Google Summer of Code cohort and make an impact in open-source world.

I would like to thank my mentors Matteo, Federico and Daniele, who trusted me to carry out this task and who have constantly helped me getting acquainted to the whole process, 
and have also helped me with any blockers that I faced during this period. I had really insightful discussions with them related to project development which
has honed my technical skills . 

Regarding the future, I'll continue working with the maintainers of IntelOwl in whatever capacity I can, to continously improve the features of 
IntelOwl. I do plan to design and develop IntelChat, through which threat analysts can simply chat with IntelOwl, but this idea is in it's infancy right now 😶‍🌫️





