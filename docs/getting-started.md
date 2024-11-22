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

Before running the application make sure:

* you have a properly working Cardano node running on the background (more info on how to run a node [here](https://developers.cardano.org/docs/get-started/cardano-node/running-cardano/))

* you have a `.env` file in the root of the project specifying the following environment variables:

### ADDRESSES

If you are going to use `mutexo-server` in test mode, you will need to pass some test addresses into your `.env` file by the following way:

```
ADDRESSES=ADDRESS_1,ADDRESS_2,...
ADDRESS_1="♠"
ADDRESS_2="♥"
...
```

where ♠ and ♥ are the wallets addresses string, e.g.:

```
ADDRESS_1="addr_test1qrglcpgt7ssmdf32q9x4fjst04thlyxj7lj9md3kgcu42u2sdfsuhtax90u3pyxdc73wshpfw24jj2p4m8g30es3ej8ql9d3gg"
ADDRESS_2="addr_test1qrcdeqdkpup2acyn3tpus0dmgs54kew8uqhd4v23ke6a2p6ac7yptelhy9alxgma2l9xfcxme2pl0ruun7jvslfs7pqqufnp59"
```

:::warning Look closely

The addresses must all belong to the same net (see [this](https://cips.cardano.org/cip/CIP-19)).

:::

Those fields allow you to automatically detect and save a certain number of txs triggered by or involving the given addresses. The amount of txs to be recorded must be specified during the CLI invocation (if the value is not declared a parachute value will be passed by default).

### REDIS_URL

`REDIS_URL` is a necessary field if your intent is to access easly a remote Redis database.

It works in both test and server modes and it must be declared inside your `.env` file in the following way:

```
REDIS_URL="♦"
```

where ♦ follow the syntax described [here](https://github.com/redis/node-redis/blob/master/docs/client-configuration.md).

If the URL is not considered valid, a default `REDIS_URL` ("redis://localhost:6379") will be used to access the database.

## Ready To Go

Then you can run:

```
npm run start
```