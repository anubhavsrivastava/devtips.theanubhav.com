---
title: How does `undefined` and `null` sorted in `Array.prototype.sort` function
date: '2019-08-27T18:05:00.738Z'
template: 'post'
draft: false
slug: '/posts/undefined-sort'
category: 'JS pitfall'
series: true
tags:
    - 'Javascript'
    - 'JS Ecosystem'
description: 'Simple understanding of `undefined` and `null` sort behavior for default and custom sort functions'
---

I have already covered basic sorting behavior of `Array.prototype.sort` function in JS in a [blog post](https://theanubhav.com/2019/06/10/up-your-js-sort-game/).

Sort function is not straightforward due to some internal interpretation on default sort function. Also, its default behavior on any type is to convert to string and then compare.

On the same lines, `null` and `undefined` are treated differently.

In default implementation (no custom sort function)

-   `undefined` is handled as a primitive as they are ignored and sorted to the end.
-   Sorting will convert `null` to the string "null" which will appear somewhere in the middle of the alphabet.

---
