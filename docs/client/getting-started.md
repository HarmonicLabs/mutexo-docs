---
sidebar_position: 0
---

# Getting Started

## Installation

```shell
npm install @harmoniclabs/mutexo-client
```

## Importing the Library

To use `MutexoClient`, you need to import it into your project. Here is an example of how to do it:

```typescript
import { MutexoClient } from "@harmoniclabs/mutexo-client";
```

## Creating a `MutexoClient` Instance

A `MutexoClient` instance is a useful interface that manages all the events coming from the server.

In order to connect to the client you will need to do so via an unique link provided by the server.

### `getWsUrl`

The `MutexoClient` class provides the `getWsUrl` static method.

you will need to provide the http url where the server is running;
`getWsUrl` will fetch an unique auth token and construct a valid link to pass to the [standard 
`WebSocket` class](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket).

#### usage

using `getWsUrl` the simplest way to get a client is:

```ts
import { MutexoClient } from "@harmoniclabs/mutexo-client";

const myMutexoServerUrl = "http://my-mutexo-sever.io:3001";

const mutexo = new MutexoClient(
    new WebSocket(
        await MutexoClient.getWsUrl( myMutexoServerUrl )
    )
);
```

## Using the client

`MutexoClient` is a class that handles the events emitted by the [`mutexo-server`](../server/getting-started).

To do so it exposes an [API](./api/) that allow you to [subscribe](./api/sub) (or [unsubscribe](./api/unsub)) to events of your interest
and to handle them using callbacks (that you can add and remove using
the [`addEventListener`](./api/addEventListener) and [`removeEventListener`](./api/removeEventListener) methods)


## Closing the Client

To close the `MutexoClient` instance, use the `close` method:

```typescript
client.close();
```

This will close the WebSocket connection and clean up resources.