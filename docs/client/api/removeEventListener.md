---
sidebar_position: 6
title: removeEventListener
---


# `removeEventListener`

The `removeEventListener` method removes an event listener for a specific event.

## Signature

```ts
async removeEventListener(
    evt: MutexoEventName,
    callback: ( data: any ) => void
): this
```

### Parameters

- `evt`: [`MutexoEventName`](../../messages/type-aliases/MutexoEventName) - The name of the event to stop listening for.
- `callback`: (data: any) => void - The function to remove from the event listeners.

### Returns

- `this`: The current instance of `MutexoClient`.

## Description

The `removeEventListener` method removes an event listener for a specific event. The listener will no longer be called when the specified event is emitted.

This method is also available as `removeListener` and `off`.

## Examples

### Remove an event listener for the "input" event

```ts
const client = new MutexoClient(webSocket);

const utxoSpentHandler = _evt => {
    console.log("someone spent something")
};

client.addEventListener("input", utxoSpentHandler);

// Later, remove the event listener
client.removeEventListener("input", utxoSpentHandler);
```