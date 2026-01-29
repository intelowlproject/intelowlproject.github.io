---
title: GreedyBear version 3 coming
date: 2026-01-29
cover: /images/greedybear.png
author: Tim Leonhard
---

Over the last months some new contributors helped us to implement a lot of new stuff in GreedyBear. Because of the huge number of new features and a different structure of the Feeds API responses, we are releasing a new major version in the next week.

## Breaking changes
- Feeds API responses do not contain the fields "honeypots", "cowrie" and "log4j" anymore. 
- Log4Pot-specific data handling was removed, because the honeypot is not that relevant anymore.
- The possibility to use legacy extraction with an 11 minute time window has been removed. The LEGACY_EXTRACTION switch in the env_file will be ignored. 

## Highlights
- We are using the Elasticsearch client version 9 now to match T-Pots recent migration to ES9.
- GreedyBear now dynamically supports all honeypots that are actively collecting data in the attached T-Pot instance. 
- A shiny new API endpoint that aggregates IOC data by ASN was built by [Dorna Raj Gyawali](https://github.com/drona-gyawali).
- Automated ingestion of FireHol blocklists enriches IOCs with threat intelligence categories thanks to [Krishna Awasthi](https://github.com/opbot-xd). 
- Users can now authenticate using email instead of just username, thanks to the work of [ManaswibRane](https://github.com/ManaswibRane).
- Self-hosted instances can now set their own license text (or none) via environment variable thanks to [Krishna Awasthi](https://github.com/opbot-xd). 
- The monitoring jobs can now send alerts via ntfy thanks to [Varandani Harsh Pramod](https://github.com/HARSHVARANDANI)
- GreedyBear now extracts and tracks Tor exit nodes as a dedicated data source thanks to [Sumit Das](https://github.com/Sumit-ai-dev)
- And a lot of additional stuff happened under the hood. Thank you [Shivraj Suman](https://github.com/shivraj1182), [Srijan](https://github.com/srijan2607), [Amisha Chhajed](https://github.com/amishhaa), [Ravi Teja Bhagavatula](https://github.com/RaviTeja799) and [Eshaan Gupta](https://github.com/Eshaan-byte).
