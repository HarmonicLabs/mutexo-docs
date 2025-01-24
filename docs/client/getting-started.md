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

### easiest way to construct a `MutexoClient`

using `getWsUrl` the simplest way to get a client is:

```ts
const myMutexoServerUrl = "http://my-mutexo-sever.io:3001";

const mutexo = new MutexoClient(
    new WebSocket(
        await MutexoClient.getWsUrl( myMutexoServerUrl )
    )
);
```

notice that `getWsUrl` is `async` so you will need to use `await` when you call it.

## Using the client

have a look at the [API](../category/api) section to see what the client can do for you.

## Closing the Client

To close the `MutexoClient` instance, use the `close` method:

```typescript
client.close();
```

This will close the WebSocket connection and clean up resources.