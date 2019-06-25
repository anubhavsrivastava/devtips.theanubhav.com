---
title: Tool of the Trade for CLI Apps - `execa` 🖥
date: '2019-07-01T18:05:00.738Z'
template: 'post'
draft: true
slug: '/posts/cli-execa'
category: 'CLI Build tool'
tags:
    - 'CLI'
    - 'Tools'
description: 'Node.js CLI App helper for process execution'
---

This is a series of libraries and utilities for building Command-line-interfaces aka CLI using Node.js and ecosystem around it. Similar utilities/helpers may be available for other languages but, these series is focused on JavaScript and its friends.

You can check all articles under [`CLI Build Tool`](/category/cli-build-tool/) tag.

## [execa](https://github.com/sindresorhus/execa)

If you are building a CLI and spawn a process to execute some external task/action, you can use [`child_process`](https://nodejs.org/api/child_process.html) to create Synchronous Process or Asynchronous Process. This works pretty well in most cases but `execa` offers more.

As advertised, this package improves child_process methods with:

-   Promise interface.
-   Strips the final newline from the output so you don't have to do stdout.trim().
-   Supports shebang binaries cross-platform.
-   Improved Windows support.
-   Higher max buffer. 100 MB instead of 200 KB.
-   Executes locally installed binaries by name.
-   Cleans up spawned processes when the parent process dies.
-   Get interleaved output from stdout and stderr similar to what is printed on the terminal. (Async only)
-   Can specify file and arguments as a single string without a shell
-   More descriptive errors.

It provides APIs in both variants , async (Promise) and sync.
`execa` has a very easy to follow, simple to use API. Here is a code example:

```javascript
const execa = require('execa');

(async () => {
	const { stdout } = await execa('echo', ['execa: A better child process management']);
	console.log(stdout);
	//=> 'execa: A better child process management'
})();
```

You can check out official [repo](https://github.com/sindresorhus/execa) for all usage details.

Github Repo: [execa](https://github.com/sindresorhus/execa)

### Related

-   Check [open](/posts/cli-open) - for opening a url/file in third party application
-   Check article - [Execa 2 release — process execution for humans](https://medium.com/@ehmicky/execa-v2-20ffafeedfdf) for detailed explanations

---
