---
title: Mocking your HTTP endpoints - APIs
date: '2019-04-22T18:05:00.738Z'
template: 'post'
draft: false
slug: '/posts/mocking-your-api'
category: 'JavaScript'
tags:
    - 'Tools'
    - 'Code'
description: 'Tools designed to help developers quickly create mock end points for their applications for faster development.'
---

There are multiple ways to mock an http endpoint in your code. Simply, just return the sample response that you expect! This works perfectly for SOAP or HTTP or whatever endpoint you want to mock. Though they are tedious way, makes your code dirty, requires a cleanup. It is better to disassociate your mocking with actual code, especially when you are mocking HTTP endpoint. For quick mocking and development, I bring to you - 2 tools of the trade.

## [json-server](https://github.com/typicode/json-server)

As mentioned in repository description "Get a full fake REST API with zero coding in less than 30 seconds". It is one of the most used mocking library and for quick prototyping in Front End world. You can also mocking Backend-to-backend API calls based on JSON. Its mocked API follows REST guidelines, and what made me happy was 201 HTTP status being returned when you make a POST request. You can end up creating entire CRUD mocking on these tools.

You can checkout egghead video tutorial here - [Creating Demo APIs with json-server](https://egghead.io/lessons/nodejs-creating-demo-apis-with-json-server)

You can literally do all functionalities that you would implement in server API as well. Routing, middleware, CRUD, full text search, sorting, etc.

![Screenshot](/media/json-server.png)

Official Site: [[json-server](https://github.com/typicode/json-server)

## [mockit](https://mockit.netlify.com/)

Another tool that I have recently come across and use it is MockIt. MockIt was designed and developed to help developers get off the ground faster, and give developers a quick way to create APIS for their applications. It gives you a user interface to configure and create REAL mocked end points for your applications.

It has clean UI to build your mock routes and response. It also has delay (latency) to capture UI behavior for actual APIs that take some time. Live Reload, Chaos Engineering(via Chaos Monkey), Authentication, CORS, are some features that it offers out of the box.

![Screenshot](/media/mockit.png)

Official Site: [mockit](https://mockit.netlify.com/)

---
