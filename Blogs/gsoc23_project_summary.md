---
title: Frontend Improvements for Buffalogs, IntelOwl.
date: 2023-08-27
cover: /images/gsoclogo.png
---

Being a designer/frontend dev who knows a thing or two about security, IntelOwl seemed to be pretty intriguing to me with a very real use-case since the first time I was introduced to the project. I started contributing to it from December of 2022, mostly working on frontend issues opened up by Matteo.

### Pre-GSOC Commits/Discussions.

```(js)
#1578 (Merged) Make Observable copy-pastable.
#1407 (Merged) Allow to retry entire job.
#1362 (Merged) Time format to mm:ss in JobHistory Page.
#1672 (Discussion, closed) Added LinkedIn release action.
```

Then i got introduced to [Buffalogs](https://github.com/certego/BuffaLogs), i found the idea to be very cool, and since then wanted to improve upon its frontend and its UI, which was my main goal for the summer, plus working on overall UI development for IntelOwl, with guides and a website refactor.

As stated in my original proposal’s overview:

> My top priority would be BuffaLogs. Implementing Auth using JWT, creating a web interface in Next.Js for BuffaLogs and Working on GUI adjustments for IntelOwl. Plus refactoring IntelOwlProject’s website.
> 

# GSoC Deliverables and Tasks

I planned to work on the following tasks during the GSoC’23 period, and was able to wrap them all up, with the help of my mentors- Matteo Lodi, Daniel Rosetti, Aditya Narayan Sinha, Federico Foschini.

Below, i expand upon each of the tasks plus the challenges i faced and the learning experience that came along with it.

### IntelOwlProject’s website ([v2](https://github.com/intelowlproject/intelowlproject.github.io))

This was my first task, I had to design a new prototype for the project’s website, it had to subtle and professional, yet eye catching enough as being the first view of the product. Unlike the previous one, this time, i took inspiration from IntelOwl’s frontend for colour, maintaining IntelOwl’s design structure similar across the product and the landing website.

After a few iterations, this was the [design](https://www.figma.com/file/1WoQUNP99W1Ou3xMelv9AT/IntelOwl-website?type=design&node-id=235%3A1806&mode=dev) which we decided to go through with, i got started with the development, the challenge here was its deployment on github pages, with Next.js/ContentLayer for rendering markdown in the blogs section.

With some alterations to the deployment CI, i was able to achieve that. Then i worked on feedback from Matteo and Daniel, and handling some UX pitfalls pointed out by my wonderful Mentors.

here is the [website](https://intelowlproject.github.io/).


### Authentication using JWT for Buffalogs. ([#43](https://github.com/certego/BuffaLogs/pull/43))

My task here was working on an auth module for Buffalogs, using django, plus setting up auth ui/middleware in the frontend. I ran into problems here, especially while testing the backend in a docker environment, though with the help of Aditya, i was able to fix it up and move to the frontend part quickly.

I choose Next.js/ts for the frontend of Buffalogs, the dev experience went almost pretty smooth here, whilst running into small challenges with middleware/protected routing.

here is the [pr](https://github.com/certego/BuffaLogs/pull/43).

### Maps, Graphs for BuffaLogs Dashboard([#44](https://github.com/certego/BuffaLogs/pull/44))

My next task was implementing graphs to visualise the login logs, coming from their backend. After a meeting, my mentor Federico and i decided upon 3 charts for the dashboard, first which shows the login locations all over world, second which showed the number of logins, differentiated on their risk factor, and the third which showed risky logins across different time frames.

Thanks to Lorena Goldoni, The DRF endpoints for the same were implemented quickly, and i started with the dashboard’s development.

I faced quite a few challenges while testing out my work on the dashboard, due to some issues on my end, but with the help of new documentation, provided by Lorena, i was able to solve the issues and test it.

p.s i also added up a quick landing page for Buffalogs, explaining a bit about the product there.

after that, Federico suggested some issues with the frontend in general, with /auth as well as the dashboard as well, which then i later fixed we wrapped this up.

here is the [pr](https://github.com/certego/BuffaLogs/pull/44) for that.

### Frontend Guide/tutorial for IntelOwl using react-joyride.(#[1852](https://github.com/intelowlproject/IntelOwl/pull/1852))

This was my last task, and it went pretty smooth, Matteo and I decided upon a flow for the guide and I leveraged react-joyride library to implement it, as suggested by Matteo [here](https://github.com/intelowlproject/IntelOwl/issues/1589).

The only challenge i faced here was, implementing a custom joyride which was both multi-route and had custom components, but after a few hit and trials i was able to make it work.

this is the [pr](https://github.com/intelowlproject/IntelOwl/pull/1852) .

## Ending Note and Next Steps.

GSoC has been a really amazing experience for me, I learnt a lot more than I expected, and not just technical, but better communication as well, to always keep time for unexpected issues, because they arise, and at the most unexpected of times.

My mentors helped me quite a lot through my whole journey, be it technical or tackling other issues. There was never any friction communication wise between me and my mentors throughout the whole program, any issues i faced were quickly resolved so i could be on timeline to wrap up all my work.

As for the future, i love to do open source, and would continue contributing to the IntelOwl organisation and more projects, especially on the project’s site with a few new feature suggestions to make it even better, It always feels awesome to give back to the community which helped me learn all this in the first place :p