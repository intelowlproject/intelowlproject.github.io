---
title: New Analyzers for IntelOwl.
date: 2024-08-19
cover: /images/gsoclogo.png
author: Nilay Gupta
---

## Introduction

The engineer in me is always on the hunt for interesting projects and products. One such project that caught my eye was Honeynet's IntelOwl Project. I'll keep this blog short and crisp, elucidating all my contributions since then.

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

- **Blint Analyzer [commit #2257](https://github.com/intelowlproject/IntelOwl/pull/2257)**: 
[Blint](https://github.com/owasp-dep-scan/blint) is a Binary Linter that checks the security properties and capabilities of your executables. Supported binary formats: - Android (apk, aab) - ELF (GNU, musl) - PE (exe, dll) - Mach-O (x64, arm64). 
- **HudsonRock Analyzer [commit #2327](https://github.com/intelowlproject/IntelOwl/pull/2327)**:
[Hudson Rock](https://cavalier.hudsonrock.com/docs) provides its clients the ability to query a database of over 27,541,128 computers which were compromised through global info-stealer campaigns performed by threat actors.
- **CyCat Analyzer [commit #2328](https://github.com/intelowlproject/IntelOwl/pull/2328/)**:
[CyCat](https://cycat.org/) or the CYbersecurity Resource CATalogue aims at mapping and documenting, in a single formalism and catalogue available cybersecurity tools, rules, playbooks, processes and controls.
- **Vulners Analyzer [commit #2340](https://github.com/intelowlproject/IntelOwl/pull/2340)**:
[Vulners](vulners.com) is the most complete and the only fully correlated security intelligence database, which goes through constant updates and links 200+ data sources in a unified machine-readable format. It contains 8 mln+ entries, including CVEs, advisories, exploits, and IoCs — everything you need to stay abreast on the latest security threats.
- **Ailtyposquatting Analyzer [commit #2341](https://github.com/intelowlproject/IntelOwl/pull/2341)**:
[AILTypoSquatting](https://github.com/typosquatter/ail-typo-squatting) is a Python library to generate list of potential typo squatting domains with domain name permutation engine to feed AIL and other systems.
- **DetectItEasy Analyzer [commit #2354](https://github.com/intelowlproject/IntelOwl/pull/2354)**:
[DetectItEasy](https://github.com/horsicq/Detect-It-Easy) is a program for determining types of files.
- **Malprob Analyzer [commit #2357](https://github.com/intelowlproject/IntelOwl/pull/2357)**:
[Malprob](https://malprob.io/) is a leading malware detection and identification service, powered by cutting-edge AI technology.
- **AdGuard Analyzer [commit #2363](https://github.com/intelowlproject/IntelOwl/pull/2363)**:
[Adguard](https://github.com/AdguardTeam/AdguardSDNSFilter), a filter composed of several other filters (AdGuard Base filter, Social media filter, Tracking Protection filter, Mobile Ads filter, EasyList and EasyPrivacy) and simplified specifically to be better compatible with DNS-level ad blocking.
- **Auto creation default test user with debug=true [commit #2369](https://github.com/intelowlproject/IntelOwl/pull/2369)**:
Auto create an Admin user whenever IntelOwl starts up for the first time to avoid user creation on every new build while development.
- **Spamhaus_WQS Analyzer [commit #2378](https://github.com/intelowlproject/IntelOwl/pull/2378)**:
[Spamhaus_WQS](https://docs.spamhaus.com/datasets/docs/source/70-access-methods/web-query-service/000-intro.html) : The Spamhaus Web Query Service (WQS) is a method of accessing Spamhaus block lists using the HTTPS protocol.
- **Crt_sh Analyzer [commit #2379](https://github.com/intelowlproject/IntelOwl/pull/2379)**:
[Crt_Sh](https://crt.sh/) lets you get certificates info about a domain.    
- **Orkl_search Analyzer [commit #2380](https://github.com/intelowlproject/IntelOwl/pull/2380)**:
[Orkl](https://orkl.eu/) is the Community Driven Cyber Threat Intelligence Library.
- **Goresym Analyzer, fixes#1451 and fixes executable file support [commit #2401]()**: 
    - [GoReSym](https://github.com/mandiant/GoReSym) is a Go symbol parser that extracts program metadata (such as CPU architecture, OS, endianness, compiler version, etc), function metadata (start & end addresses, names, sources), filename and line number metadata, and embedded structures and types.
    - I fixed an important bug which involed correcting support for mimetype `application/vnd.microsoft.portable-executable` and `application/x-dosexec`. I had to migrate back, run a query to find all the analyzers that supported `application/x-executable` in previously, use the resultant list to migrate and update all the specific analyzers.



## Ending Note and Next Steps

GSoC has been a hell of a ride for me. As a beginner in the tech world, I came across a huge load of challenges as I proceeded with each analyzer. Unforeseeable bugs, git conflicts, and packages becoming unmaintainable are a few that come to mind. 

The more I use this product, the more I realize how much I could contribute to it. There are always some rough edges to be fixed that need attention from the developers. There are always new features and space for enhanced UX. This makes me eager to implement more features and new ideas into the project. I hope that I'm able to make time to contribute more to the project in the future and give back to the community as much as I can. 
Thanks to my mentors, Matteo Lodi and Daniel Rosetti for their continuous support and making this GSoC a worthwhile experience, thankyou IntelOwl :)