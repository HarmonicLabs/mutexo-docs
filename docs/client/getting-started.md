---
sidebar_position: 0
---

# Getting Started

## Installation

### from `npm`
```
npm install @harmoniclabs/mutexo-client
```

:::tip npm

`npm` is the package manager use by `NodeJS` you can install `node` and `npm` from the [`NodeJS` website](https://nodejs.org/en/)

:::

### from source

```
git clone https://github.com/HarmonicLabs/mutexo-client
cd mutexo-client
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

If you are going to use `mutexo-client` in test mode, you will need to pass some test addresses into your `.env` file by the following way:

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

## Using MutexoClient

### Importing the Library

To use `MutexoClient`, you need to import it into your project. Here is an example of how to do it:

```typescript
import { MutexoClient } from "@harmoniclabs/mutexo-client";
```

### Creating a MutexoClient Instance

To create an instance of `MutexoClient`, you need to pass a WebSocket instance to its constructor:

```typescript
import WebSocket from "ws";

const ws = new WebSocket("ws://your-websocket-url");
const client = new MutexoClient(ws);
```

### Subscribing to Events

You can subscribe to various events using the `sub` method. Here is an example of how to subscribe to an event:

```typescript
client.sub("lock").then((response) => {
    console.log("Subscribed to lock event:", response);
}).catch((error) => {
    console.error("Failed to subscribe:", error);
});
```

### Unsubscribing from Events

To unsubscribe from an event, use the `unsub` method:

```typescript
client.unsub("lock").then((response) => {
    console.log("Unsubscribed from lock event:", response);
}).catch((error) => {
    console.error("Failed to unsubscribe:", error);
});
```

### Locking UTXOs

To lock UTXOs, use the `lock` method:

```typescript
client.lock([utxo1, utxo2], 2).then((response) => {
    console.log("UTXOs locked:", response);
}).catch((error) => {
    console.error("Failed to lock UTXOs:", error);
});
```

### Freeing UTXOs

To free UTXOs, use the `free` method:

```typescript
client.free([utxo1, utxo2]).then((response) => {
    console.log("UTXOs freed:", response);
}).catch((error) => {
    console.error("Failed to free UTXOs:", error);
});
```

### Handling Events

You can handle events by adding event listeners:

```typescript
client.on("lock", (msg) => {
    console.log("Lock event received:", msg);
});

client.on("error", (msg) => {
    console.error("Error event received:", msg);
});
```

### Closing the Client

To close the `MutexoClient` instance, use the `close` method:

```typescript
client.close();
```

This will close the WebSocket connection and clean up resources.