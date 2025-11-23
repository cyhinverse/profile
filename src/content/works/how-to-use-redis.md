---
title: How to use Redis
date: 2025-11-23T15:23:00.000+07:00
thumbnail: /images/uploads/redsi.jpg
description: How do we use Redis now?
---
Redis là một cơ sở dữ liệu in-memory tốc độ cao thường được dùng để cache dữ liệu, lưu session, token, rate limit và xử lý hàng đợi. Trong Next.js, bạn có thể kết nối Redis thông qua thư viện ioredis bằng cách tạo một file kết nối singleton trong thư mục lib, sau đó import vào API Route hoặc App Router để đọc/ghi dữ liệu. Ví dụ, bạn có thể dùng redis.set để lưu giá trị và redis.get để lấy lại giá trị, hoặc đặt thời gian hết hạn bằng lệnh EX để cache API trong một khoảng thời gian nhất định giúp tăng tốc độ phản hồi. Redis cũng hỗ trợ các kiểu dữ liệu như string, hash, list, set, và cho phép thao tác nhanh bằng các lệnh như SET, GET, DEL, INCR. Ngoài ra, Redis rất phù hợp để giới hạn tần suất request bằng cách tăng biến đếm theo IP và đặt thời gian reset. Khi triển khai lên Vercel, bạn có thể dùng Upstash Redis để có kết nối serverless ổn định. Tổng lại, Redis giúp tối ưu hiệu năng, giảm tải backend và tăng tốc toàn bộ ứng dụng Next.js.
