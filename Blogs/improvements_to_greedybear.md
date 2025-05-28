---
title: Improvements to GreedyBear
date: 2025-05-28
cover: /images/greedybear.png
author: Tim Leonhard
---

Over the past few months I wrote my Master's thesis about improving threat intelligence generated from honeypot data. For this purpose I made some changes to the [GreedyBear](https://github.com/intelowlproject/GreedyBear/) project from Matteo Lodi, who greatly supported my coding work. 

### New feeds
The core of my work is the development and comparison of scoring models which try to predict future honeypot interactions. As a result of this comparison, two of these models were integrated into GreedyBear and already do their work on the [Honeynet instance](https://greedybear.honeynet.org/):

The first model is a Random Forest classifier, a machine learning model that predicts binary events. In our case, for each known IP address it estimates the probability that this IP address will hit any honeypot in the next 24 hours. GreedyBear now offers a [feed](https://greedybear.honeynet.org/api/feeds/all/all/likely_to_recur.json) that orders its entries by that probability such that the most likely IP addresses to reoccur are at the top of the list. 

The second model, a Random Forest regressor, predicts the number of honeypot hits that we can expect from an IP address in the next 24 hours. Analogous to the "likely to reoccur" feed from the classifier model, GreedyBear now also offers the "most expected hits" [feed](https://greedybear.honeynet.org/api/feeds/all/all/most_expected_hits.json) which is based on the prediction of the regressor model. 

Both predictions, along with some other new information, are also included in every 'json' based GreedyBear feed. For details about the different feeds and their contents, please refer to the [documentation](https://intelowlproject.github.io/docs/GreedyBear/Usage/). 


### Command sequences
The Cowrie honeypot records the sequence of commands which an attacker executes during a SSH session. These command sequences and their relation to the IP addresses which executed them, are now also extracted and stored by GreedyBear. The new [command sequence API](https://intelowlproject.github.io/docs/GreedyBear/Usage/#command-sequence) supports two kinds of requests:
- You can send an IP address and receive every command sequence which was executed by this address.
- You can send a SHA256 hash of a (correctly formatted) command sequence and receive every IP address that executed this sequence.

In addition there is a clustering feature, which groups similar command sequences together, allowing for a "fuzzy" search using the 'include_similar' query parameter. If this parameter is used, the result will also contain IP addresses that executed similar command to the one requested. In my testing, this feature allowed me to attribute more than 2000 IP addresses to the 'mdrfckr' botnet on my personal instance of GreedyBear. On the Honeynet instance, the clustering feature is currently not activated, as it is very resource hungry. I'll try to make it more efficient soon(ish). :)

If you are interested in reading into my full thesis, you can find it [here](https://fx-tm.de/Master_Thesis_TimLeonhard_final.pdf). If you want to get in touch, you can find me on [Mastodon](https://23.social/@tim).
