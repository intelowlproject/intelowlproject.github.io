---
title: New Documentation Site for IntelOwl and friends.
date: 2024-08-15
cover: /images/gsoclogo.png
author: Aryan Bhokare
---

## Introduction

As a Full Stack Web Developer with a keen interest in security, I was immediately drawn to IntelOwl due to its real-world applicability and robust feature set. I began contributing to the project in January 2024, focusing primarily on frontend issues and the addition of analyzers, under the guidance of Matteo.

### Pre-GSOC Commits/Discussions.

```(js)
#2092: [Analyzer] IP2Location
#2166: Added table cell component and fixed text-wrapping issue.
```

I was later introduced to an issue related to IntelOwl’s main [documentation site](https://github.com/intelowlproject/IntelOwl/issues/2043). I resonated with the approach discussed by Matteo, conducted thorough research, and developed a proposal that the mentors appreciated, leading to my selection for GSoC.

According to my initial proposal, my objectives were:

> Develop a new documentation site with custom themes for an enhanced UI experience.
> Integrate Swagger UI for API specifications.
> Centralize documentation for all repositories within the IntelOwl project.
> Add docstrings for dynamic documentation and contribute guides for project contribution and usage.

# GSoC Deliverables and Tasks

I planned and successfully completed the following tasks during GSoC 2024, with the support of my mentors, Matteo Lodi and Daniel Rosetti. Below is an expansion on each task, the challenges I encountered, and the learning experiences gained.

As it was a new repository I was given permission to directly push to the repository so Instead of prs to show my work here’s the list of [commits](https://github.com/intelowlproject/docs/commits/main/?author=aryan-bhokare).

### [IntelOwl Project’s Documentation Website](https://intelowlproject.github.io/docs/)

My first task was to design the UI of the documentation site using MkDocs. After discussing with the mentors, we settled on using the Material theme. Upon completing the basic site structure, I collaborated with the mentors to finalize a visually appealing custom theme.

here is the [website](https://intelowlproject.github.io/docs/).

### Docstrings Integration.

Integrating docstrings dynamically into MkDocs using the mkdocstrings package in Python was a complex task.

The challenge arose primarily due to our need for a centralised documentation site. Finding the right approach was difficult, but after some research, we discovered the [mkdocs-monorepo-plugin](https://github.com/backstage/mkdocs-monorepo-plugin), which helped facilitate the integration.

After several iterations, I successfully integrated the plugin, resulting in a more comprehensive and informative documentation site.

### Submodules Integration

Our previous solution had many flaws, as it was not fully compatible with docstrings, and there were issues with CSS not being rendered. Initially, our approach involved having a separate documentation site for each repository and then integrating all the sites into our centralized site.

However, we later decided to move away from this approach and explore other options. During further research, we came across Git submodules, which fit perfectly with our requirements.

One significant challenge was dynamically fetching documentation and docstrings from various IntelOwl repositories to avoid redundant updates. While implementing submodules came with its own set of challenges like how to keep the submodules consistent with latest commits and how will the code will be fetched, I was able to overcome them successfully and implement this [github action](https://github.com/intelowlproject/docs/blob/main/.github/workflows/deploy_and_update_submodules.yml) which handles it.

### [Swagger UI Integration](https://intelowlproject.github.io/docs/IntelOwl/api_docs/)

The integration of Swagger UI for API specs was straightforward, especially after resolving the dynamic update issue with submodules. I also added a dark mode feature to ensure consistency with the overall theme of the documentation site.

Link to [SwaggerUI api-docs](https://intelowlproject.github.io/docs/IntelOwl/api_docs/)

## Deployment Using GitHub Pages

Deploying the site using GitHub Pages was relatively easy, thanks to a pre-existing [GitHub Action](https://github.com/marketplace/actions/deploy-mkdocs) for MkDocs deployment.

However, ensuring that submodules were updated before deployment was crucial. I explored several approaches to trigger the main repo to fetch updates from child repos upon commits, but this proved complex.

Ultimately, we opted for a daily cron job to update submodules and deploy the site with the latest changes.

## Addition of Docstrings

In line with my proposal, I dedicated time to adding comprehensive docstrings across the IntelOwl codebase to leverage the mkdocstrings integration fully. Given the time-intensive nature of writing docstrings, I worked on this in parallel with other tasks.

Link to [PR](https://github.com/intelowlproject/IntelOwl/pull/2430)

## Working and Contribution Guide for New Documentation

My final task involved creating a comprehensive guide for contributing to and working with the new documentation site. After discussions with Matteo and Daniel, we agreed on the structure and flow of the guides, including an example of integrating docstrings into the codebase.

Link to [Guides](https://intelowlproject.github.io/docs/Guide-documentation/)

## Ending Note and Next Steps

Participating in GSoC has been an incredibly enriching experience. I gained far more knowledge than I anticipated, not only in technical aspects but also in communication and time management, particularly in handling unexpected challenges.

Throughout the program, my mentors provided invaluable support, ensuring smooth communication and timely resolution of any issues. This enabled me to stay on track and complete my tasks effectively.

Looking forward, I am eager to continue contributing to open-source projects, particularly within the IntelOwl organization. I have several ideas for new features to further enhance the project’s documentation site. It’s deeply fulfilling to contribute to the community that has been instrumental in my learning journey.
