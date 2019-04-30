---
title: Run VS Code on remote server using `code-server`
date: '2019-04-14T18:05:00.738Z'
template: 'post'
draft: false
slug: '/posts/cloud-vscode-ide'
category: 'Tools'
tags:
    - 'Tools'
    - 'Server'
description: 'Coder is an open source remote development environment serving Visual Studio Code. Improve your workflow and explore the capabilities of your local development machine.'
---

Recently, Coder has open sourced their project called [code-server](https://github.com/codercom/code-server) which helps you to run [VS Code](https://code.visualstudio.com/) on your remote server or cloud server, whatever you may call it, and you can access it via Browser. Which simply means, install VS Code on server and access everything via your favorite browser.

This does not only give you Cloud IDE but also keeps your VS extension, settings and preferences (themes and what not) at one place. Best if you have local server in your company.

Additional advantage that I personally gain is the terminal (part of VS code) that helps me run some build script (of course, its dev not prod), especially with custom webpack scripts and show prototype work to stakeholders. These certainly helps escaping SFTP, rsync and other ssh things. Certainly, should be used with version controlled projects!

![Screenshot](/media/code-server.png)

It can be installed from unzipping [binaries](https://github.com/codercom/code-server/releases) and running `./code-server` on your server. This will expose a port (with password/with https which are part of settings) and IDE will be available on that port from browser. Currently only available for Linux/OSX, these binaries also require some libC++ libraries to run. For detailed instructions and troubleshooting, see the [self-hosted quick start guide](https://github.com/codercom/code-server/blob/master/doc/self-hosted/index.md).

Another clean way to achieve the same is using `docker` image,
you can try out,

    docker run -it -p 127.0.0.1:8443:8443 -v "\${PWD}:/home/coder/project" codercom/code-server:1.621 --allow-http --no-auth

You can explore all the settings and usage options [here](https://github.com/codercom/code-server/blob/master/doc/self-hosted/index.md#usage)

Other guides for code-server,

-   Quick start guides for installing on [Google Cloud](https://github.com/codercom/code-server/blob/master/doc/admin/install/google_cloud.md), [AWS](https://github.com/codercom/code-server/blob/master/doc/admin/install/aws.md), and [Digital Ocean](https://github.com/codercom/code-server/blob/master/doc/admin/install/digitalocean.md).
-   How to [secure your setup](https://github.com/codercom/code-server/blob/master/doc/security/ssl.md) via self-signed certificates.

There is also tool called [sshcode](https://github.com/cdr/sshcode) which is a CLI to automatically install and run code-server over SSH.

Official Site: [Coder](https://coder.com/)
