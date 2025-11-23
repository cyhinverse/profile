---
title: Why do we need to learn LeetCode?
date: 2025-11-23T19:59:00.000+07:00
summary: This is probably the question that many new programmers wonder.
---

**\# Understanding Big O Through a Simple Example: removeElement()**
When we first start coding, we often think the same thing:
"As long as the code runs, I’m happy."
This is completely normal. Every developer goes through this phase.  But eventually, you realize something important:
Running is not enough — your code must run efficiently.
To explain why, let’s look at a simple example from LeetCode: **\*\*removeElement\*\***.
---
**\## The Problem**
Given an array \`nums\` and a value \`val\`, remove all occurrences of \`val\` in-place and return how many elements remain.
Simple problem.  But the way you solve it can be very different.
---
**\## Approach 1: The Beginner-Friendly Solution**
Most beginners write something like this:
\`\`\`jsfor (let i = 0; i < nums.length; i++) {    if (nums\[i] === val) {        nums.splice(i, 1);        i--;    }}\`\`\`
**\### Pros**- Easy to understand  - Works correctly  - Simple logic  
**\### Cons**- Very slow for large arrays  - \`splice()\` shifts many elements → results in **\*\*O(n²)\*\*** time  - Not suitable for interviews or real production  
---
**\## Approach 2: The Optimized Two-Pointer Solution**
A more efficient and professional approach:
\`\`\`jslet k = 0;
for (let i = 0; i < nums.length; i++) {    if (nums\[i] !== val) {        nums\[k] = nums\[i];        k++;    }}
return k;\`\`\`
**\### Pros**- Runs in **\*\*O(n)\*\*** time  - Uses **\*\*O(1)\*\*** extra memory  - Very efficient for large data  - The approach expected in coding interviews  
**\### Cons**- Slightly harder for beginners  - Requires understanding two-pointer logic  
---
**\## Side-by-Side Comparison**
| Feature | Beginner Solution | Optimized Solution ||--------|-------------------|--------------------|| Time Complexity | O(n²) | O(n) || Space Usage | O(1) | O(1) || Works for large input | No | Yes || Easy to write | Yes | Medium || Interview-ready | No | Yes |
---
**\## Why Do We Need Big O?**
Let’s talk honestly.  Your code might work fine with 50 items.  But with 50,000 items?  That’s when slow algorithms break everything.
Big O helps you:
- predict performance  - write scalable code  - avoid slow operations  - pass coding interviews  - think like a real developer  - prevent servers from crashing under real load  
Big O tells you *\*how your code behaves when your data grows\**.  And trust me: data always grows.
---
**\## Final Thoughts**
You don’t need to master Big O on your first day.  But eventually, every developer reaches the moment where they realize:
"I want my code to run well, not just run."
Understanding Big O is what helps you make that transition.
removeElement is a small example — but the lesson behind it is big.
