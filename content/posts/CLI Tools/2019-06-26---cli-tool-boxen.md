---
title: Tool of the Trade for CLI Apps - `Boxen` 🔲
date: '2019-06-26T18:05:00.738Z'
template: 'post'
draft: true
slug: '/posts/cli-boxen'
category: 'CLI Build tool'
tags:
    - 'CLI'
    - 'Tools'
description: 'Node.js CLI App helper to create boxes in the Terminal'
---

This is a series of libraries and utilities for building Command-line-interfaces aka CLI using Node.js and ecosystem around it. Similar utilities/helpers may be available for other languages but, these series is focused on JavaScript and its friends.

You can check all articles under [`CLI Build Tool`](/category/cli-build-tool/) tag.

## [boxen](https://github.com/sindresorhus/boxen)

If you are building a CLI and need to present some good output wrapped in box! Yes, square box, 'boxen' is the tool for you. Just like you had seen boxes around output of `update-notifier`. It makes the CLI app more appealing.

![Screenshot](./updatenotifier.png)

It can present your application output in boxes with various styles like 'double dashed', 'rounded corners' along with some 'margin' and 'padding' options.

![Screenshot](./boxen.png)

Boxen has a very easy to follow, simple to use API. Here is a code example:

```javascript
const boxen = require('boxen');

console.log(boxen('unicorn', { padding: 1 }));
/*
┌─────────────┐
│             │
│   unicorn   │
│             │
└─────────────┘
*/

console.log(boxen('unicorn', { padding: 1, margin: 1, borderStyle: 'double' }));
/*

   ╔═════════════╗
   ║             ║
   ║   unicorn   ║
   ║             ║
   ╚═════════════╝

*/
```

You can check out official [repo](https://github.com/sindresorhus/boxen) for all usage details.

Github Repo: [boxen](https://github.com/sindresorhus/boxen)

---
