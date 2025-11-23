---
title: Why do we need to learn LeetCode?
date: 2025-11-23T19:59:00.000+07:00
summary: This is probably the question that many new programmers wonder.
---
### **Understanding Big O Through a Simple Example: removeElement()**

When we first start coding, most of us think the same thing:

“As long as the code runs, that’s good enough.”

And honestly, that mindset is completely normal. Every developer begins like that. But as time goes on, you eventually realize that simply making code run is not enough. The real goal is to make it run efficiently.

To understand why this matters, let’s look at a simple LeetCode problem: removeElement.

### The Problem

You are given an array nums and a value val. The task is to remove all elements equal to val in-place and return the number of remaining elements.

It’s a simple problem on the surface, but the way you solve it says a lot about your understanding of algorithm efficiency.

### **Approach 1: The Beginner-Friendly Solution**


This is the kind of solution most beginners write:

```
for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
        nums.splice(i, 1);
        i--;
    }
}

```

### **Pros**

* Very easy to understand
* Simple logic
* Works correctly on small inputs

### **Cons**

* Extremely slow on large arrays
* Using splice forces the array to shift elements each time
* Leads to O(n²) time complexity
* Not suitable for interviews or production-level code

***Here is the Big O chart that this code executes.***

![](/images/uploads/on2.png)

### 
**Approach 2: The Optimized Two-Pointer Solution**




With a better understanding of Big O and performance, you naturally move toward a more efficient solution:

```
let k = 0;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
        nums[k] = nums[i];
        k++;
    }
}

return k;

```

### **Pros**

* Runs in O(n) time
* Uses O(1) extra space
* Efficient even for very large input sizes
* Preferred solution in interviews
* Good example of algorithmic thinking



### **Cons**

* Slightly harder for beginners to understand at first
* Requires understanding how two pointers work

***Here is the Big O chart that this code executes.***

![](/images/uploads/on.png)





### **Why Do We Need to Learn Big O?**

Big O matters because it helps you understand how your code behaves as data grows. Your program might work perfectly with 50 elements, but break completely with 50,000 elements.

Big O allows you to:

* Predict performance
* Write scalable code
* Avoid expensive operations
* Pass technical interviews
* Think like a professional developer
* Prevent performance issues in real systems



In short, Big O helps you avoid slow, inefficient code before it becomes a problem.

### **Final Thoughts**

Understanding Big O is not something you master on the first day of coding. But eventually, every developer reaches a point where they move from:

“Just make the code run,”

to

“Make the code run well.”

The removeElement problem may be small, but the lesson behind it is important:

Writing efficient code matters.

###
