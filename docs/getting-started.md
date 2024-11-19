---
sidebar_position: 2
---

# Getting Started

## Installation

### from `npm`
```
npm install @harmoniclabs/mutexo-server
```

:::tip npm

`npm` is the package manager use by `NodeJS` you can install `node` and `npm` from the [`NodeJS` website](https://nodejs.org/en/)

:::

### from source

```
git clone https://github.com/HarmonicLabs/mutexo-server
cd mutexo-server
npm run build
```

:::tip The `dist` folder

The library is then available in the `dist` folder.

You can move the directory where you need it

:::

## Local Development

IMPORTANT

Before running the application make sure:

* you have a working Cardano node running on the background (more info on how to run a node [here](https://developers.cardano.org/docs/get-started/cardano-node/running-cardano/))

* you have a `.env` file in the root of the project specifying the following environment variables

```
FIRST_ADDRESS=""
SECOND_ADDRESS=""
```

`FIRST_ADDRESS` and `SECOND_ADDRESS` are addresses that are followed as soon as the server detects a transaction that involves them from the node

Then you can run:

```
npm run start
```