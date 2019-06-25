---
title: Tool of the Trade for CLI Apps - `clipboardy`  📋
date: '2019-07-01T18:05:00.738Z'
template: 'post'
draft: true
slug: '/posts/cli-clipboardy'
category: 'CLI Build tool'
tags:
    - 'CLI'
    - 'Tools'
description: 'Node.js CLI App helper for working on clipboard'
---

This is a series of libraries and utilities for building Command-line-interfaces aka CLI using Node.js and ecosystem around it. Similar utilities/helpers may be available for other languages but, these series is focused on JavaScript and its friends.

You can check all articles under [`CLI Build Tool`](/category/cli-build-tool/) tag.

## [clipboardy](https://github.com/sindresorhus/clipboardy)

If you are building a CLI and need to access the system clipboard, `clipboardy` is the package you need. Of course, it is cross-platform and supports macOS, Windows, Linux, OpenBSD, FreeBSD, Android with Termux.

It provides APIs in both variants , async (Promise) and sync.
`clipboardy` has a very easy to follow, simple to use API. Here is a code example:

```javascript
const clipboardy = require('clipboardy');
s;
clipboardy.writeSync('something to copy to clipboard');

clipboardy.readSync(); // read from clipboard
```

You can check out official [repo](https://github.com/sindresorhus/clipboardy) for all usage details.

Github Repo: [clipboardy](https://github.com/sindresorhus/clipboardy)

### Related

-   Check [clipboardy-cli](https://github.com/sindresorhus/clipboardy-cli) - CLI version for this module
-   Check [copy-text-to-clipboard](https://github.com/sindresorhus/copy-text-to-clipboard) for browser version

---
