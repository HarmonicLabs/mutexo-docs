---
sidebar_position: 7
title: removeAllListeners
---


# `removeAllListeners`

The `removeAllListeners` method removes all event listeners for a specific event or for all events.

## Signature

```ts
async removeAllListeners(
    event?: MutexoEventName
): this
```

### Parameters

- `event` (optional): [`MutexoEventName`](../../messages/type-aliases/MutexoEventName) - The name of the event to remove listeners for. If omitted, all listeners for all events will be removed.

### Returns

- `this`: The current instance of `MutexoClient`.

## Description

The `removeAllListeners` method removes all event listeners for a specific event or for all events.

This method is also available as `clearListeners`.

## Examples

### Remove all event listeners for the "input" event

```ts
const client = new MutexoClient(webSocket);

const utxoSpentHandler = _evt => {
    console.log("someone spent something")
};
const utxoReceivedHandler = _evt => {
    conosle.log("someone received something")
}

client.addEventListener("input", utxoSpentHandler);
client.addEventListener("output", utxoReceivedHandler);

// Remove all event listeners of the input event
// (the client still receives these events from the server)
client.removeAllListeners("input");

// listeners for the "output" event are still there
```

### Remove all event listeners for all events

```ts
const client = new MutexoClient(webSocket);

const utxoSpentHandler = _evt => {
    console.log("someone spent something")
};
const utxoReceivedHandler = _evt => {
    conosle.log("someone received something")
}

client.addEventListener("input", utxoSpentHandler);
client.addEventListener("output", utxoReceivedHandler);

// Remove all event listeners for all events
client.removeAllListeners();
```