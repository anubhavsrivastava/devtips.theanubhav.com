---
title: Spell check your code using `code spell checker` on VS Code
date: '2019-04-15T18:05:00.738Z'
template: 'post'
draft: false
slug: '/posts/spell-check-vscode'
category: 'IDE'
tags:
    - 'Tools'
    - 'IDE'
description: 'A basic spell checker that works well with camelCase code. The goal of this spell checker is to help with catching common spelling errors while keeping the number of false positives low.'
---

Have you ever wanted to 'lint' your spellings as you code? Or have you commented your code with `function` as `funtcion`?
Yes, there is an extension for that called `code spell checker` on VS Code. There might be such extensions for other IDEs but I've personally used this and found it useful.

Though a word of caution, it only works with spellings and not grammar as a whole. So you can get the grammar wrong, like I do in this site. Other than that, it is magic wand.

It is available by default with English Spell checks and other language extensions can be installed to support them. It has multiple settings to tweak according to your needs and supports a wide variety of file extensions.

To Install,
Open up VS Code and hit F1 and type ext, select install and type code-spell-checker hit enter and install it. You may need to reload VS Code.

![Screenshot](/media/codespell.gif)

Official Site: [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
