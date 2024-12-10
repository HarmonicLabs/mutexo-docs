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

Before running the application make sure you have a properly running [mutexo-server](../server/getting-started.md#getting-started).

## Using MutexoClient

### Importing the Library

To use `MutexoClient`, you need to import it into your project. Here is an example of how to do it:

```typescript
import { MutexoClient } from "@harmoniclabs/mutexo-client";
```

### Creating a MutexoClient Instance

To create an instance of `MutexoClient`, you need to ask the server for your unique token by doing

```typescript
const token = await fetch(
    "http://your-websocket-url/wsAuth", 
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }
);
```

and then pass the tokenized WebSocket instance to its constructor:

```typescript
import WebSocket from "ws";

const ws = new WebSocket("ws://your-websocket-url/events?token=" + token);
const client = new MutexoClient( ws );
```

:::warning 

For this code to work you will need a working [mutexo-server](../server/getting-started.md#getting-started) already running in the background!

:::

### Closing the Client

To close the `MutexoClient` instance, use the `close` method:

```typescript
client.close();
```

This will close the WebSocket connection and clean up resources.

## Ready To Go

Then you can run:

```
npm run start
```