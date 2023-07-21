<!--- Section 1 -->
# Chordus Arena Main Website [![Codeship Status for r0ughnex/chordus-arena-main-website](https://app.codeship.com/projects/b11e954c-add2-4c73-a923-2d85e08ad133/status?branch=main)](https://app.codeship.com/projects/456322)

```
NAME: chordus-arena-main-website
AUTHOR: Pradeep Sekar

REPOSITORY:
https://github.com/r0ughnex/chordus-arena-main-website

AWS STAGING (develop):
http://chordus-arena-website.develop.s3-website-ap-southeast-2.amazonaws.com/

AWS STAGING (master):
http://chordus-arena-website.main.s3-website-ap-southeast-2.amazonaws.com/
```



<!--- Section 2 -->
## Table of Contents
- [Repository Details](#chordus-arena-main-website-)
  - [A Brief Overview](#a-brief-overview)
  - [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
  - [`npm start`](#npm-start)
  - [`npm test`](#npm-test)
  - [`npm run build`](#npm-run-build)
  - [`serve -s build`](#serve--s-build)
- [Deploying to `AWS S3`](#deploying-to-aws-s3)
  - [Staging for `develop`](#staging-for-develop)
  - [Staging for `main`](#staging-for-main)

## A Brief Overview

This site is the official extension of an **experiement to play around with building / loading custom `WebGL` models on top of `Sketchfab`'s 3D viewer** for an NFT project called `Chordus Arena`. Apart from helping with the **creation and deployment of its custom smart contracts**, this site was eventually picked up and ported over (with some modifications) to be its **official MVP website at launch** (for a short duration, before it was official discontinued).

## Getting Started

Install the latest `LTS` version of [Node](https://nodejs.org/en/) and its package manager (which were `18.6.0` and `9.6.4` at the time of writing this document). Once `Node` is installed on your machine, open the terminal or command prompt at the root of the site directory and run the following commands.

```
npm install -g webpack
npm install
npm start
```
Then open [http://localhost:3000/](http://localhost:3000/) to see the app run on the **local development** server. There is **no need to configure** tools like `Webpack` or `Babel`, since they have already been pre-configured so that you can focus on the code.

<p align="center">
  <img src="https://github.com/r0ughnex/chordus-arena-main-website/blob/main/src/App.video.gif?raw=true" width="600" height="auto" alt="Short video of the app running on localhost">
</p>



<!--- Section 3 -->
## Available Scripts

This site was **Bootstrapped** with [Create React App](https://github.com/facebookincubator/create-react-app). In the root of the site directory, you can run the following commands (listed below):

### `npm start`

This runs the app in the development mode. You can open [http://localhost:3000/](http://localhost:3000/) to view it in the browser. The current view will reload if you make edits to, and save any of the files imported within the app. You will also see **`ESLint` errors in the console**.

### `npm test`

This launches the **`Jest` test runner** in interactive watch mode. The tests will reload if you make edits to, and save any of the files imported within the app. You can also filter (or skip) and drill-down into each test suite using the commands displayed on the console.

### `npm run build`

This builds the app for production into the `/build` folder. It correctly bundles `React` in **production mode** and optimizes the build for best performance. The build files are minified and the filenames include hashes. The app is now ready to be deployed!

### `serve -s build`

This launches the app in **production mode** (once built) on your local machine using a `Node` server. You can open [http://localhost:5000](http://localhost:5000) to view it in the browser, or follow the instructions and link displayed in the console to view it on a **mobile device** connected to the same network.



<!--- Section 4 -->
## Deploying to `AWS S3`

There are two **`AWS S3` buckets** that have been configured for this site, one on `develop` and another on `main`. If you want a new bucket created on a specific `feature` branch that you are currently working on, contact someone who has admin access to this repository, to create and configure one for you.

### Staging for `develop`

If you are on a `feature` branch and want to deploy to the bucket configured on `develop`, **then merge your `feature` into `develop` through a PR** and get it approved. Once the PR is approved, merged and commited into `develop`, **Codeship** will automatically compile, bundle and build the neccessary files and deploy it to the relevant bucket configured on that branch ([links listed at the top](#chordus-arena-main-website-)).

### Staging for `main`

If you are on `develop` and want to deploy to the bucket configured on `main`, then **use git flow to create a new `release` from `develop`** and get it approved. Once the release is approved, merged and commited into `main`, **Codeship** will automatically compile, bundle and build the neccessary files and deploy it to the relevant bucket configured on that branch ([links listed at the top](#chordus-arena-main-website-)).
