---
title: How to use Redis
date: 2025-11-23T15:23:00.000+07:00
thumbnail: /images/uploads/2023_12_25_638391139949395813_anh-dai-dien.jpg
description: Why do we use redis ?
---
# Why We Use Redis

## 1. Ultra-Fast Caching

Redis is an in-memory data store, meaning data is kept directly in RAM.\
This makes reads/writes insanely fast --- perfect for caching heavy or
repeated queries.

**Example use cases:**\
- Caching API responses\
- Caching database queries (e.g., user profile, trending posts)\
- Storing session tokens for authentication

------------------------------------------------------------------------

## 2. Session Storage

Redis is super popular for storing user sessions because:\
- It's fast\
- It supports TTL (auto-expiry)\
- It works perfectly in distributed systems

**Example:**\
When a user logs in, we store their session in Redis.\
Any backend instance can validate the session instantly.

------------------------------------------------------------------------

## 3. Rate Limiting

Redis supports atomic operations and TTL, making it ideal for rate
limiting.

**Example:**\
Limit each user to 100 requests per minute.\
Redis increments a counter and auto-resets after 60 seconds.

------------------------------------------------------------------------

## 4. Message Queue / Pub-Sub

Redis can handle lightweight real-time messaging.

**Example:**\
- Live notifications\
- Chat systems\
- Real‑time updates

------------------------------------------------------------------------

## 5. Distributed Locking

Redis can provide a simple and fast locking mechanism.

**Example:**\
Avoid two servers updating the same order at the same time.

------------------------------------------------------------------------

## 6. Data Structures

Redis supports many useful data types:\
- String\
- Hash\
- List\
- Set\
- Sorted Set\
- Stream

These make Redis useful for leaderboards, queues, counters, and more.

------------------------------------------------------------------------

## Summary

Redis is used because it is:\
- **Ultra-fast**\
- **Scalable**\
- **Reliable**\
- **Flexible**\
- **Perfect for caching, sessions, queues, rate limiting, and real-time
apps**

Redis = performance booster for your entire system.
