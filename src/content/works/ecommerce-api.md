---
title: E-commerce Core API
date: '2024-01-15'
description: High-performance backend infrastructure with Redis, RabbitMQ, and Node.js Cluster Mode.
tags: ['NodeJs', 'MongoDB', 'Redis', 'RabbitMQ']
thumbnail: /img-work/ecommerce_1.png
link: etiso.me
platform: Web / API
stack: NodeJs, MongoDB, Redis, RabbitMQ, Cloudinary
source: https://github.com/cyhinverse/client-ecommerce
---

A robust and scalable e-commerce backend designed to handle high-traffic peak loads while ensuring data integrity and low-latency responses.

![Data Processing Flow](/img-work/ecommerce_2.png)
![Infrastructure Overview](/img-work/ecommerce_3.png)

### Key Achievements

- **Accelerated product creation workflow** for multi-variant items by **60%** by implementing a **Concurrent File Upload** mechanism using Promise-based parallel processing with the **Cloudinary API**.
- **Optimized data retrieval latency** to **under 10ms** for 90% of repeated requests by implementing a centralized **Redis Caching** system with an intelligent cache invalidation strategy.
- **Reduced API response time by 40%** and minimized main server load by decoupling heavy tasks (Email/Notifications) into an asynchronous **RabbitMQ Message Queue** architecture.
- **Optimized core product discovery APIs** to sustain peak loads of **8,000+ Requests Per Second (RPS)** with sub-10ms response times by implementing a strategic **multi-layer Redis Caching** and **Node.js Cluster Mode** across all CPU cores.
