---
title: Analysis package size of every npm module
date: '2019-05-05T18:05:00.738Z'
template: 'post'
draft: false
slug: '/posts/bundle-phobia'
category: 'JavaScript'
tags:
    - 'JavaScript'
    - 'Performance'
description: 'Find the cost of adding an npm package to your bundle'
---

JavaScript codebase bloat is real thing today than it ever was. Sites gets bigger every single day as more libraries are thrown to solve new problems. Until of-course, the big refactoring/rewrite happens. The community has solved the problem of multiple request to fetch JS script from CDN by bundling everything using tools like webpack, rollup, parcel, etc, but there is no control on increase in bundle size. With every package imported in app, results in increase in size of bundle, sometimes huge than the actual requirement.

Here is an online tool (also CLI available) that would help you analyse size of package module, called [bundlephobia](https://bundlephobia.com). his thing lets you understand the performance cost of `npm install` on a new npm package before actually adding it to your bundle. You can search over all available public packages on npm repository.

Analysis report for package `axios-api-profiler` including download time and size for minified + gzipped.
![Screenshot](/media/bundle1.png)

Another thing about this tool is it shows package size breakdown, which also helps you take a call whether you are wanting to have such dependency size chain.

Below is a screenshot for composition of dependency in `react-router@5.0.0`
![Screenshot](/media/bundle2.png)

Another great feature is to upload your entire `package.json` for analysis. It calculates package size for every module in package.json dependency list.
![Screenshot](/media/bundle3.png)

So next time you are adding a dependency to your project, make sure you know the cost!

Official Site: [bundlephobia.com](https://bundlephobia.com)

Github Repo: [bundlephobia](https://github.com/pastelsky/bundlephobia)

---
