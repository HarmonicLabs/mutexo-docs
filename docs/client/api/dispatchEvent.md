---
sidebar_position: 8
title: dispatchEvent
---

# `dispatchEvent`

The `dispatchEvent` method emits a specific event, calling all registered listeners for that event.

## Signature

async dispatchEvent<EvtName extends MutexoEventName>(
    evt: EvtName,
    msg: DataOf<EvtName>
): boolean

### Parameters

- `evt`: [`MutexoEventName`](../../messages/type-aliases/MutexoEventName) - The name of the event to emit.
- `msg`: [`DataOf<EvtName>`](../../messages/type-aliases/DataOf) - The data to pass to the event listeners.

### Returns

- `boolean`: `true` if the event had listeners, `false` otherwise.

## Description

The `dispatchEvent` method emits a specific event, calling all registered listeners for that event.

This method is also available as `emit`.

## Examples

### Emit an "input" event

const client = new MutexoClient(webSocket);

const utxoSpentHandler = _evt => {
    console.log("someone spent something")
};

client.addEventListener("input", utxoSpentHandler);

// Emit the "input" event
client.dispatchEvent("input", { /* event data */ });
