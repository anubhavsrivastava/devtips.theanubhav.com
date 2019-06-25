---
title: Tool of the Trade for CLI Apps - `update-notifier` 📮
date: '2019-06-24T18:05:00.738Z'
template: 'post'
draft: false
slug: '/posts/cli-updatenotifier'
category: 'CLI Build tool'
tags:
    - 'CLI'
    - 'Tools'
description: 'Node.js CLI App helper module for app update notification'
---

This is a series of libraries and utilities for building Command-line-interfaces aka CLI using Node.js and ecosystem around it. Similar utilities/helpers may be available for other languages but, these series is focused on JavaScript and its friends.

You can check all articles under [`CLI Build Tool`](/category/cli-build-tool/) tag.

## [update-notifier](https://github.com/yeoman/update-notifier)

If you are building a CLI that is based on npm ecosystem, i.e, installed via magical command called as `npm install`, `update-notifier` is a must utility that you must add in your CLI App. Nearly 3.5+ million packages are dependent on these library.

`update-notifier` inform users of your package of updates in a non-intrusive way.

![Screenshot](./updatenotifier.png)

The best part of the utility is ease of use.

```javascript
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');

updateNotifier({ pkg }).notify();
```

Yes, that's it. It will do the rest for you. There are some options available for more advanced usage but above code does all what you need.

Whenever you initiate the update notifier, it will asynchronously check with npm in the background for available updates, then persist the result. The next time the notifier is initiated, the result will be loaded into the `.update` property. This prevents any impact on your package startup performance. The update check is done in a child process. This means that if you call process.exit, the check will still be performed in its own process.

You can check out official [repo](https://github.com/yeoman/update-notifier) for all usage details.

Github Repo: [update-notifier](https://github.com/yeoman/update-notifier)

---
