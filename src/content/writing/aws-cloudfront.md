---
title: Amazon CloudFront (CDN)
date: 2025-12-26T12:10:00.000+07:00
thumbnail: /images/uploads/aws-cloudfront.jpg
summary: Securely deliver content with low latency and high transfer speeds.
---

# Amazon CloudFront: Global Content Delivery

**Amazon CloudFront** is a [Content Delivery Network (CDN)](#green) service built for [high performance](#yellow), [security](#yellow), and [developer convenience](#yellow).

### What is it?

CloudFront delivers your content ([videos](#purple), [images](#purple), [APIs](#purple), [applications](#purple)) to users globally through a network of data centers called "[Edge Locations](#green)". When a user requests content, they are routed to the nearest edge location, ensuring the [fastest possible delivery](#underline).

### Key Features

- [Global Network](#green): Over [600+ Points of Presence](#yellow) ([PoPs](#purple)) worldwide.
- [Security](#green): Protection against DDoS ([AWS Shield](#purple)) and application attacks ([AWS WAF](#purple)).
- [Speed](#green): [Caches content at the edge](#purple) to [reduce load on your origin servers](#underline) and [improve latency](#yellow) for users.
- [Programmable](#green): Use [CloudFront Functions](#purple) or [Lambda@Edge](#purple) to customize content delivery logic.

### Use Cases

- Accelerating static website content delivery.
- Streaming video (VOD or Live).
- API acceleration.
- Software distribution (OS updates, game patches).

### Why use it?

It [dramatically improves the user experience](#underline) by making your website or application [load faster](#yellow), no matter where your users are located in the world.
