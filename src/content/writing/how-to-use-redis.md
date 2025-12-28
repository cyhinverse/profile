---
title: How to use Redis
date: 2025-11-23T15:23:00.000+07:00
thumbnail: /images/uploads/2023_12_25_638391139949395813_anh-dai-dien.jpg
summary: Why do we use redis ?
---

# Why We Use Redis

## 1. Ultra-Fast Caching

Redis is an [in-memory data store](#green), meaning data is kept directly in [RAM](#purple).\
This makes reads/writes [insanely fast](#yellow) --- perfect for [caching heavy or repeated queries](#underline).

**Example use cases:**\

- Caching API responses\
- Caching database queries (e.g., user profile, trending posts)\
- Storing session tokens for authentication

---

## 2. Session Storage

Redis is [super popular](#yellow) for storing user sessions because:\

- It's [fast](#yellow)\
- It supports [TTL (auto-expiry)](#purple)\
- It works perfectly in [distributed systems](#green)

**Example:**\
When a user logs in, we store their session in Redis.\
Any backend instance can validate the session instantly.

---

## 3. Rate Limiting

Redis supports [atomic operations](#purple) and [TTL](#purple), making it ideal for [rate limiting](#green).

**Example:**\
Limit each user to [100 requests per minute](#underline).\
Redis increments a counter and [auto-resets](#purple) after 60 seconds.

---

## 4. Message Queue / Pub-Sub

Redis can handle lightweight real-time messaging.

**Example:**\

- Live notifications\
- Chat systems\
- Real‑time updates

---

## 5. Distributed Locking

Redis can provide a [simple and fast](#yellow) [locking mechanism](#underline).

**Example:**\
Avoid two servers updating the same order at the same time.

---

## 6. Data Structures

Redis supports many useful [data types](#green):\

- [String](#purple)\
- [Hash](#purple)\
- [List](#purple)\
- [Set](#purple)\
- [Sorted Set](#purple)\
- [Stream](#purple)

These make Redis useful for leaderboards, queues, counters, and more.

---

## Summary

Redis is used because it is:\

- **Ultra-fast**\
- **Scalable**\
- **Reliable**\
- **Flexible**\
- **Perfect for caching, sessions, queues, rate limiting, and real-time
  apps**

Redis = performance booster for your entire system.
