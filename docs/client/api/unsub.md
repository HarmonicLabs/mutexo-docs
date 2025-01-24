---
sidebar_position: 1
title: unsub
---

# Unsub

The `unsub` method sends an unsubscribe request to the server.

## Signature

```typescript
async unsub(
    eventName: MutexoClientEvtName,
    filters?: IFilter[]
): Promise<SubSuccess | SubFailure>
```

## Parameters

- `eventName`: The name of the event to unsubscribe from. It must be one of the valid `MutexoClientEvtName` values.
- `filters`: An optional array of filters to be unsubscribed by, keeping any other subscription if present. The default value is an empty array (unsubscribes entirely by the event).

## Returns

A `Promise` that resolves to one of the following message types:
- `SubSuccess`: Indicates that the unsubscribe request was successful.
- ` SubFailure`: Indicates that the unsubscribe request failed.

## Example Usage

```typescript
const client = new MutexoClient(webSocket);

const response = await client.unsub("input");

if( response instanceof SubSuccess )
{
    // unsub will not remove listeners automatically
    // in case of success, if desired, remove the listeners
    client.removeAllListeners("input");
}
```