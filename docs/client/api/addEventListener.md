---
sidebar_position: 5
title: addEventListener
---

# `addEventListener`

The `addEventListener` method adds an event listener for a specific event.

## Signature

```ts
async addEventListener<Evt extends MutexoEventName>(
    evt: Evt,
    callback: ( data: DataOf<Evt> ) => void,
    opts?: AddEventListenerOptions
): this
```

### Parameters

- `evt`: [`MutexoEventName`](../../messages/type-aliases/MutexoEventName) - The name of the event to listen for.
- `callback`: (data: [`DataOf<Evt>`](../../messages/type-aliases/DataOf)) => void - The function to call when the event is emitted.
- `opts` (optional): [`AddEventListenerOptions`](../../messages/type-aliases/AddEventListenerOptions) - Options for the event listener.

### Returns

- `this`: The current instance of `MutexoClient`.

## Description

The `addEventListener` method adds an event listener for a specific event. The listener will be called whenever the specified event is emitted.

This method is also available as `addListener` and `on`.

## Examples

### Add an event listener for the "input" event

```ts
const client = new MutexoClient(webSocket);

const utxoSpentHandler = _evt => {
    console.log("someone spent something")
};

// logs every time someone spends something
client.addEventListener("input", utxoSpentHandler);
```