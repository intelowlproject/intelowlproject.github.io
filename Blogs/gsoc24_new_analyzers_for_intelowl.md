---
title: New Analyzers for IntelOwl.
date: 2024-08-19
cover: /images/gsoclogo.png
author: Nilay Gupta
---

## Introduction

As an engineer, I'm always on the lookout for interesting projects and products. One such project that caught my eye was Honeynet's IntelOwl Project. I'll keep this blog short and crisp, elucidating all my contributions since then.

### Pre-GSOC Commits/Discussions

| PR Number | Title |
| --------- | ----- |
| [#2209](https://github.com/intelowlproject/IntelOwl/pull/2209) | Tweet feedsfixes#1770 |
| [#2178](https://github.com/intelowlproject/IntelOwl/pull/2178) | Fixes bgp ranking#1901 |
| [#2126](https://github.com/intelowlproject/IntelOwl/pull/2126) | Feodo tracker#1103 |
| [#2164](https://github.com/intelowlproject/IntelOwl/pull/2164) | Misp, closes #1955 |
| [#2161](https://github.com/intelowlproject/IntelOwl/pull/2161) | Pinning image version of Phoneinfoga Analyzer |
| [#2148](https://github.com/intelowlproject/IntelOwl/pull/2148) | Boolean toggle |
| [#2115](https://github.com/intelowlproject/IntelOwl/pull/2115) | Validin#1966 |
| [#2108](https://github.com/intelowlproject/IntelOwl/pull/2108) | Zippy_scan closes #1951 |
| [#2107](https://github.com/intelowlproject/IntelOwl/pull/2107) | PhoneInfoga#995 |
| [#2096](https://github.com/intelowlproject/IntelOwl/pull/2096) | Update censys.io, Closes #439 |
| [#2080](https://github.com/intelowlproject/IntelOwl/pull/2080) | Mmdb server, closes #1779 |
| [#19](https://github.com/intelowlproject/intelowlproject.github.io/pull/19) | fixed Scroll Bar Appearance |

As can be noticed, my contributions were pretty heavy on developing and fixing analyzers. Inevitably, the project I chose was developing **New Analyzers for IntelOwl**.

In my proposal, I proposed to develop around 30 new analyzers for the community of IntelOwl users.

# GSoC Deliverables and Tasks

As anticipated, my proposal was selected, and I was assigned the project. One of my mentors, and the owner of IntelOwl, Matteo Lodi, created a [GitHub Project/Kanban board](https://github.com/orgs/intelowlproject/projects/11/). All individual issues solved, pull requests and commits cab be accessed using the board. 

I'll now proceed to elaborate on all the significant PRs mentioned.

- **Blint Analyzer [PR #2257](https://github.com/intelowlproject/IntelOwl/pull/2257) :** 
[Blint](https://github.com/owasp-dep-scan/blint) is a Binary Linter that checks the security properties and capabilities of your executables. Supported binary formats: - Android (apk, aab) - ELF (GNU, musl) - PE (exe, dll) - Mach-O (x64, arm64). 
- **HudsonRock Analyzer [PR #2327](https://github.com/intelowlproject/IntelOwl/pull/2327) :**
[Hudson Rock](https://cavalier.hudsonrock.com/docs) provides its clients the ability to query a database of over 27,541,128 computers which were compromised through global info-stealer campaigns performed by threat actors.
- **CyCat Analyzer [PR #2328](https://github.com/intelowlproject/IntelOwl/pull/2328/) :**
[CyCat](https://cycat.org/) or the CYbersecurity Resource CATalogue aims at mapping and documenting, in a single formalism and catalogue available cybersecurity tools, rules, playbooks, processes and controls.
- **Vulners Analyzer [PR #2340](https://github.com/intelowlproject/IntelOwl/pull/2340) :**
[Vulners](vulners.com) is the most complete and the only fully correlated security intelligence database, which goes through constant updates and links 200+ data sources in a unified machine-readable format. It contains 8 mln+ entries, including CVEs, advisories, exploits, and IoCs — everything you need to stay abreast on the latest security threats.
- **Ailtyposquatting Analyzer [PR #2341](https://github.com/intelowlproject/IntelOwl/pull/2341) :**
[AILTypoSquatting](https://github.com/typosquatter/ail-typo-squatting) is a Python library to generate list of potential typo squatting domains with domain name permutation engine to feed AIL and other systems.
- **DetectItEasy Analyzer [PR #2354](https://github.com/intelowlproject/IntelOwl/pull/2354) :**
[DetectItEasy](https://github.com/horsicq/Detect-It-Easy) is a program for determining types of files.
- **Malprob Analyzer [PR #2357](https://github.com/intelowlproject/IntelOwl/pull/2357) :**
[Malprob](https://malprob.io/) is a leading malware detection and identification service, powered by cutting-edge AI technology.
- **AdGuard Analyzer [PR #2363](https://github.com/intelowlproject/IntelOwl/pull/2363) :**
[Adguard](https://github.com/AdguardTeam/AdguardSDNSFilter), a filter composed of several other filters (AdGuard Base filter, Social media filter, Tracking Protection filter, Mobile Ads filter, EasyList and EasyPrivacy) and simplified specifically to be better compatible with DNS-level ad blocking.
- **Auto creation default test user with debug=true [PR #2369](https://github.com/intelowlproject/IntelOwl/pull/2369) :**
Auto create an Admin user whenever IntelOwl starts up for the first time to avoid user creation on every new build while development.
- **Spamhaus_WQS Analyzer [PR #2378](https://github.com/intelowlproject/IntelOwl/pull/2378) :**
[Spamhaus_WQS](https://docs.spamhaus.com/datasets/docs/source/70-access-methods/web-query-service/000-intro.html) : The Spamhaus Web Query Service (WQS) is a method of accessing Spamhaus block lists using the HTTPS protocol.
- **Crt_sh Analyzer [PR #2379](https://github.com/intelowlproject/IntelOwl/pull/2379) :**
[Crt_Sh](https://crt.sh/) lets you get certificates info about a domain.    
- **Orkl_search Analyzer [PR #2380](https://github.com/intelowlproject/IntelOwl/pull/2380) :**
[Orkl](https://orkl.eu/) is the Community Driven Cyber Threat Intelligence Library.
- **Goresym Analyzer, fixes#1451 and fixes executable file support [PR #2401](https://github.com/intelowlproject/IntelOwl/pull/2401) :**
    - [GoReSym](https://github.com/mandiant/GoReSym) is a Go symbol parser that extracts program metadata (such as CPU architecture, OS, endianness, compiler version, etc), function metadata (start & end addresses, names, sources), filename and line number metadata, and embedded structures and types.
    - I fixed an important bug which involed correcting support for mimetype `application/vnd.microsoft.portable-executable` and `application/x-dosexec`. I had to migrate back, run a query to find all the analyzers that supported `application/x-executable` in previously, use the resultant list to migrate and update all the specific analyzers.
- **JA4_DB Analyzer [PR #2402](https://github.com/intelowlproject/IntelOwl/pull/2402) :**
[JA4_DB](https://ja4db.com/) lets you search a fingerprint in JA4 databse.
- **Spamhaus_drop Analyzer [PR #2422](https://github.com/intelowlproject/IntelOwl/pull/2422) :**
[Spamhaus_DROP](https://www.spamhaus.org/blocklists/do-not-route-or-peer/) protects from activity directly originating from rogue networks, such as spam campaigns, encryption via ransomware, DNS-hijacking and exploit attempts, authentication attacks to discover working access credentials, harvesting, DDoS attacks.
- **Leakix Analyzer [PR #2423](https://github.com/intelowlproject/IntelOwl/pull/2423) :**
[LeakIX](https://leakix.net/) is a red-team search engine indexing mis-configurations and vulnerabilities online.
- **Iocextract Analyzer [PR #2426](https://github.com/intelowlproject/IntelOwl/pull/2426) :**
[IocExtract](https://github.com/InQuest/iocextract) package is a library and command line interface (CLI) for extracting URLs, IP addresses, MD5/SHA hashes, email addresses, and YARA rules from text corpora. It allows for you to extract encoded and "defanged" IOCs and optionally decode or refang them.
- **Apivoid Analyzer [PR #2428](https://github.com/intelowlproject/IntelOwl/pull/2428) :**
[ApiVoid](https://www.apivoid.com/) provides JSON APIs useful for cyber threat analysis, threat detection and
threat prevention, reducing and automating the manual work of security analysts.
- **CriminalIp Analyzer [PR #2435](https://github.com/intelowlproject/IntelOwl/pull/2435) :**
[Criminal IP](https://www.criminalip.io/) is an OSINT search engine specialized in attack surface assessment and threat hunting. It offers extensive cyber threat intelligence, including device reputation, geolocation, IP reputation for C2 or scanners, domain safety, malicious link detection, and APT attack vectors via search and API.
- **Criminalip_Scan Analyzer [PR #2438](https://github.com/intelowlproject/IntelOwl/pull/2438)**
CriminalIp_Scan is an implementation of scan APIs provided by [CriminalIp](https://www.criminalip.io/) specifically for domains.
- **Polyswarm analyzer [PR #2439](https://github.com/intelowlproject/IntelOwl/pull/2439) :**
Scans a file using the [Polyswarm](https://docs.polyswarm.io/) API.
- **PolyswarmObs [PR #2439](https://github.com/intelowlproject/IntelOwl/pull/2439) :**
Scan an observable using [Polyswarm](https://docs.polyswarm.io/) API. Paid plan is required for IP and Domain scans. Hash scan is free.
- **Knock analyzer [PR #2448](https://github.com/intelowlproject/IntelOwl/pull/2448) :**
[Knock](https://github.com/guelfoweb/knock) or Knockpy is a portable and modular python3 tool designed to quickly enumerate subdomains on a target domain through passive reconnaissance and dictionary scan.
- **Improved PE_info analyzer [PR #2464](https://github.com/intelowlproject/IntelOwl/pull/2464) :**
Improve PE_info analyzer; added support for ".NET" files and their info extraction .
- **Droidlysis analyzer [PR #2454](https://github.com/intelowlproject/IntelOwl/pull/2454) :**
[DroidLysis](https://github.com/cryptax/droidlysis) is a pre-analysis tool for Android apps: it performs repetitive and boring tasks we'd typically do at the beginning of any reverse engineering. It disassembles the Android sample, organizes output in directories, and searches for suspicious spots in the code to look at. The output helps the reverse engineer speed up the first few steps of analysis.
- **MobSF Analyzer [PR #2461](https://github.com/intelowlproject/IntelOwl/pull/2461) :**
[Mobsfscan](https://github.com/MobSF/mobsfscan) is a static analysis tool that can find insecure code patterns in your Android and iOS source code. Supports Java, Kotlin, Android XML, Swift and Objective C Code.
- **Apk_artifacts analyzer [PR #2469](https://github.com/intelowlproject/IntelOwl/pull/2469) :**
Apk [artifacts](https://github.com/guelfoweb/artifacts) provides APK strings analysis. It provides analysis, similarity and a report of an apk file.
- **Markdown Features [PR #33](https://github.com/intelowlproject/intelowlproject.github.io/pull/33) :**
Improved markdown support for IntelOwl's blog site.

## Ending Note and Next Steps

GSoC has been a hell of a ride for me. At first glance, implementing a new analyzer seems to be an easy task and, in fact, it is pretty easy. The real challenge starts when one has to develop and test multiple of them in parallel. The current framework for analyzer development is really smooth for one-at-a-time approach but things get really intricate and tricky while working on a handful of them at the same time. Migration issues, dependency management, database integrity are a few topics that scratch the surface. Re-building the project from scratch every-time you switch to develop another analyzer is surely an option but its time taking and to deliver an avg of 3 analyzers per week requires quicker solutions, plus, I'm too impatient for it :P
As a beginner in the tech world, I came across a huge load of challenges as I proceeded with each analyzer in the project. Navigating through unforeseeable bugs, git conflicts, packages becoming unmaintainable, etc helped me grow exponentially as a developer. All these challenges made everything more interesting and engaging.
All this experience has helped me understand the importance of OSINT in cybersecurity; how my contributions are a tiny but impactful effort in making the world a safer pace.

I'm always eager to work on new ideas and features in this project. I hope that I'm able to make time to contribute more to the project in the future and give back to the community as much as I can. 
Thanks to my mentors, Matteo Lodi and Daniel Rosetti for their continuous support and making this GSoC a worthwhile experience, thankyou IntelOwl :)