---
title: Tool of the Trade for CLI Apps - `progress-string` 📟
date: '2019-06-28T18:05:00.738Z'
template: 'post'
draft: false
slug: '/posts/cli-progress-string'
category: 'CLI Build tool'
tags:
    - 'CLI'
    - 'Tools'
description: 'Node.js CLI App helper for showing progress on the Terminal'
---

This is a series of libraries and utilities for building Command-line-interfaces aka CLI using Node.js and ecosystem around it. Similar utilities/helpers may be available for other languages but, these series is focused on JavaScript and its friends.

You can check all articles under [`CLI Build Tool`](/category/cli-build-tool/) tag.

## [progress-string](https://github.com/watson/progress-string)

If you are building a CLI and need to show exact progress of where the computation has reached, you need to know `progress-string`. Just like [ora](/posts/cli-ora), it helps you show progress in the terminal. In case of ora, it was a loading spinner, while `progess-string` actually shows the traditional progress bar.

It generates a CLI progress bar as a string that you can then output in any way you like.

![Screenshot](./progressstring.gif)

You can update the progress bar on the go, changing its position in the complete bar. You can also customize it using its `style` option.

`progess-string` has a very easy to follow, simple to use API. Here is a code example:

```javascript
var progress = require('progress-string');
var diff = require('ansi-diff-stream')();

var value = 0;
var total = 42;
var bar = progress({ width: 50, total: total });

setInterval(function() {
	diff.write('The progress of the program is:\n' + bar(++value));
	if (value === total) process.exit();
}, 250);

diff.pipe(process.stdout);
```

You can check out official [repo](https://github.com/watson/progress-string) for all usage details.

Github Repo: [progress-string](https://github.com/watson/progress-string)

---
