---
title: Private NPM repository and local network package management.
date: '2020-01-10T18:05:00.738Z'
template: 'post'
draft: false
slug: '/posts/private-repo'
category: 'PackageManager'
tags:
    - 'JS Ecosystem'
    - 'Tool'
description: 'Solutions to private npm registry! '
---

Creating packages and modules to distribute is a piece of cake in the JavaScript ecosystem! 
But things get a little complicated when you want to set up private repositories that are available for your consumption only. Of course there is money to help you out in such situations via paid solutions such as [npm private registry](https://www.npmjs.com/products/teams?) or [gemfury](https://gemfury.com/) or other third party solutions.

So another registry?
There are advantages of having a private registry
- Use private packages
- Cache npmjs.org registry
- Override public packages

### Use Git (local git system)
You can specify module URL in package.json file as [git repository path](https://docs.npmjs.com/files/package.json#git-urls-as-dependencies). This private git server can be part of your internal/private network and effectively makes the module to be private. 

You can also have a local shared file system or a provision to download modules into the local system. Module URL can also be [local machine file paths](https://docs.npmjs.com/files/package.json#local-paths). This method is a little complicated and would require a lot of effort, IMHO!

### Sinopia

[Sinopia](https://github.com/rlidwka/sinopia) - Initially started as a caching repository, Sinopia allows you to host private repositories. It is an on-premise solution to handle private repositories. 

To set up sinopia, install it on a private server (docker image is also available) and point npm to use this registry.

```# installation and starting (application will create default
# config in config.yaml you can edit later)
$ npm install -g sinopia
$ sinopia

# npm configuration
$ npm set registry http://localhost:4873/ //private server address
```

Official Repo: [Sinopia](https://github.com/rlidwka/sinopia)


### Verdaccio

[Verdaccio](https://verdaccio.org/) is a fork of sinopia but is widely used. It promises to be a lightweight zero-config-required local private npm registry. Verdaccio comes out of the box with its own tiny database, and the ability to proxy other registries (eg. npmjs.org), caching the downloaded modules along the way.

The installation is same as sinopia, you set up verdaccio on private server (again it has docker image available) and point npm registry to your private server via

```
 $ npm set registry http://localhost:4873/ //private server address
```

Official Repo: [Verdaccio](https://github.com/verdaccio/verdaccio)

### cnpmjs

[cnpmjs](https://cnpmjs.org/) is another private npm registry. It also has its public registry r.cnpmjs.org, syncing from registry.npmjs.com regularly.

It also works in the same manner as other private registries.

Official Repo: [cnpmjs](https://github.com/cnpm/cnpmjs.org)

### [npm-register](https://github.com/jdxcode/npm-register)

Another private registry proxy but also has out of box support for cloud deployment. The inspiration for this project comes from sinopia. This came out of a need for better cache, CDN, and general performance as well as stability of being able to run multiple instances without depending on a local filesystem.

You can set up a private registry available over the internet via Heroku, S3 or Google cloud storage.

The usage is similar to other private registries. Point to the server with `npm set registry` command.

Official Repo: [npm-register](https://github.com/jdxcode/npm-register)

---
