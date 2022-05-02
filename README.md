# react-micro-frontend-example

Simple example of using React in a micro-frontend architecture with Webpack Module Federation

## How to use

Run the following commands in the root directory.

```bash
yarn
yarn start
```

# Blog

## Prerequisites

- Create React App

## Getting started

We are building 2 apps: A `host` and a `remote`. For simplicity the `host` app is the "main" app and remote is a sub-app plugging into it. You could also treat the `host` as a remote and make the architecture a peer-to-peer instead of host-to-remote the way we are doing here.

`npx create-react-app host`

`npx create-react-app remote`

## Installs

```bash
npm install --save-dev webpack webpack-cli html-webpack-plugin webpack-dev-server babel-loader
```

## Setup Host/Remote App.js

## Module Federation

### In the Host

The important part is:

```js
new ModuleFederationPlugin({
  name: "host",
  remotes: {
    remote: `remote@localhost:4000/moduleEntry.js`,
  },
});
```

This tells the Host app to look for a remote at `localhost:4000/moduleEntry.js` which we will define next.

### In the Remote

The important part is:

```js
new ModuleFederationPlugin({
  name: "remote",
  filename: "moduleEntry.js",
  exposes: {
    "./RemoteApp": "./src/App",
    "./Button": "./src/Button",
  },
});
```

Webpack's example app for peer-to-peer structure: https://stackblitz.com/github/webpack/webpack.js.org/tree/master/examples/module-federation?terminal=start&terminal=

Webpack docs: https://webpack.js.org/concepts/module-federation/
