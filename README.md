# react-micro-frontend-example

Simple example of using React in a micro-frontend architecture with Webpack Module Federation

# Blog

## Prerequisites

- Create React App

## Getting started

We are building 2 apps: A `host` and a `remote`. For simplicity the `host` app is the "main" app and remote is a sub-app plugging into it. You could also treat the `host` as a remote and make the architecture a peer-to-peer instead of host-to-remote the way we are doing here.

`npx create-react-app host`

`npx create-react-app remote`

## Module Federation

### In the Host

The important part is:

```
  new ModuleFederationPlugin({
    name: "host",
    remotes: {
      remote: `remote@localhost:4000/moduleEntry.js`,
    },
  })
```

This tells the Host app to look for a remote at `localhost:4000/moduleEntry.js` which we will define next.

### In the Remote

The important part is:

```
  new ModuleFederationPlugin({
    name: 'remote',
    filename:
      'moduleEntry.js',
    exposes: {
      './Cart': './src/Cart'
    },
  });
```

Webpack's example app for peer-to-peer structure: https://stackblitz.com/github/webpack/webpack.js.org/tree/master/examples/module-federation?terminal=start&terminal=

Webpack docs: https://webpack.js.org/concepts/module-federation/
