---
title: YIBU – Visual Discovery & Social Stream
date: '2023-11-20'
description: Social stream platform with advanced security and hybrid recommendation engine.
tags: ['Vite', 'NodeJs', 'Redis', 'Mongodb']
thumbnail: /img-work/yibu_1.png
link: https://yibu.app
platform: Web / Mobile
stack: Vite, React, NodeJs, Redis, MongoDB
source: https://github.com/cyhinverse/YiBu
---

YIBU is a visual-centric social platform focused on discovery and real-time engagement, featuring a sophisticated recommendation system and enterprise-grade security.

![Community Interaction](/img-work/yibu_2.png)
![Architecture Overview](/img-work/yibu_3.png)

### Key Achievements

- **Mitigated session hijacking risks** as measured by **automated detection and immediate revocation** of compromised sessions by designing a **JWT Token Family** architecture with **automated rotation** and **family-based reuse detection**.
- **Increased user engagement** through personalized content discovery, **optimizing content relevance** via multi-dimensional ranking, by building a **Hybrid Recommendation Engine** using **Collaborative Filtering** and real-time **Trending Score** calculations.
- **Optimized system-wide data integrity and read performance** as measured by **eliminating expensive runtime aggregations** for high-traffic feeds, by implementing **ACID Transactions** and a **Denormalized counter strategy** for **constant-time data retrieval**.
- **Reduced initial bundle size by ~40%** and **improved Time to Interactive (TTI)** by implementing a **Granular Code Splitting strategy** with **React Lazy/Suspense**, optimizing delivery for 92+ unique components.
