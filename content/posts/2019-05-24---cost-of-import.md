---
title: Know bundle size when you import with VSCode Extension
date: '2019-05-24T18:05:00.738Z'
template: 'post'
draft: false
slug: '/posts/cost-of-import'
category: 'JavaScript'
tags:
    - 'JavaScript'
    - 'Performance'
description: 'Find the cost of importing a module in Vscode'
---

Recapping on previous article - [Analyse package size of every npm module](/posts/bundle-phobia), with every package imported in app, results in increase in size of bundle, sometimes huge than the actual requirement.
Multiple attempts have been made in this direction to tackle it with awesome tools such as [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer), cost-of-modules, command line webpack warnings and techniques like code splitting and lazy loading.

As a developer, you can also understand the import cost while you import a module in code in VSCODE via [`Import Cost`](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost) extension. It shows you the size of an imported 3rd party library the moment you import it (or several moments thereafter).

![Screenshot](/media/import-cost.gif)

It indicates the size for import + gzipped with color indicators. For heavy imports it will seek your attention by indicating the size in red colour. You can configure what size is actually small, medium, large via extension's configuration.

![Screenshot](/media/import-cost-screen.png)

It also supports multiple ways by which you can import a module onto your project, currently supports:

-   Default importing: `import Func from 'utils';`
-   Entire content importing: `import * as Utils from 'utils';`
-   Selective importing: `import {Func} from 'utils';`
-   Selective importing with alias: `import {orig as alias} from 'utils';`
-   Submodule importing: `import Func from 'utils/Func';`
-   Require: const Func = `require('utils').Func;`
-   Supports both Javascript and Typescript

So next time you are adding a dependency to your project, make sure you know the cost! Plugins for other IDE are listed in [Github Repo](https://github.com/wix/import-cost) of the project

Official Site: [Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)

Github Repo: [import-cost](https://github.com/wix/import-cost)

---
