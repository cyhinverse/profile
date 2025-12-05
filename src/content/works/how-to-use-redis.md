---
title: How to use Redis
date: 2025-11-23T15:23:00.000+07:00
thumbnail: /images/uploads/system_architecture.png
description: Why do we use redis ?
---
Redis in System Design — Full Explanation

Redis is a high-performance, in-memory data store commonly used to accelerate systems, reduce database load, and enable real-time features. Below is a complete explanation focused purely on Redis and its role in large-scale architectures.

1. Redis as a Cache (extremely fast reads)

Redis runs entirely in RAM, giving response times around 0.1–1 ms.
This makes it perfect for caching frequently accessed data such as:

User profiles

Post metadata

Home feed fragments

API responses

Search results

Frequently accessed objects

How it works

The API checks Redis first.

If the data exists → return immediately.

If not → fetch from DB → store into Redis → return.

Goal: Reduce database queries and dramatically increase performance.

2. Redis for Session & Token Storage

Applications rarely store sessions in SQL because it is too slow.

Redis is ideal for tracking:

Login sessions

Refresh tokens

JWT blacklists

Temporary authentication states

Redis supports TTL (time-to-live), making it easy to auto-expire sessions.

3. Redis for Rate Limiting (anti-spam / security)

Rate limiting helps prevent abuse, such as too many login attempts or rapid API calls.

Redis supports atomic operations like INCR and EXPIRE, perfect for:

Limit login attempts per IP

Limit API requests per user

Prevent brute-force attacks

```css
INCR login:ip:113.22.44.66
EXPIRE login:ip:113.22.44.66 60

```
If the counter exceeds the threshold → block the request.

4) Redis as a Job Queue (BullMQ, RSMQ)

Redis can act as a lightweight, extremely fast task queue for background jobs:

Send emails

Resize images

Process uploaded files

Handle notifications

Offload CPU-heavy tasks

This reduces load on your main application servers.

5) Redis Pub/Sub for Real-Time Systems

Redis has built-in pub/sub messaging, great for:

Real-time chat

Live notifications

Event broadcasting

WebSocket systems

Live counters (views, reactions, online users)

It allows services to communicate instantly without delays.

6) Redis for Distributed Locking (Redlock)

When multiple servers attempt to update the same resource, race conditions occur.

Redis provides distributed locks to ensure only one server updates at a time.

Used for:

Updating likes counter

Updating wallet balance

Preventing double writes

Coordinating background jobs

7) Redis Counters / Leaderboards

Redis supports data structures like sorted sets, perfect for:

Ranking systems (leaderboard)

Trending posts

Like counters

View counters

Real-time analytics

These operations are extremely fast compared to SQL.

8) Redis Streams / Lists for Event Processing

Redis Streams enable lightweight event pipelines without the complexity of Kafka.

Use cases:

Activity feeds

Notification pipelines

Logging streams

Internal event bus

Real-time message ingestion

Ideal for small and medium systems needing high throughput with low complexity.

Why Redis is crucial in system design

Redis is used because it provides:

Ultra-fast performance

Reduced database load

Real-time capability

Flexible data structures

Easy scalability

Support for locking, queues, pub/sub, counters, and caching—all in one system

Without Redis, a large backend system becomes slower, harder to scale, and more expensive to operate.
