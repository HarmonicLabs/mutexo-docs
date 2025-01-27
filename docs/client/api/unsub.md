---
sidebar_position: 1
title: unsub
---

# `unsub`

The `unsub` method primary purpose is to notify the server that we are no longer interested in receiving some events.

## Signature

```ts
async unsub(
    eventName: MutexoChainEventName,
    filters?: IFilter[]
): Promise<SubSuccess | SubFailure>
```

### Parameters

- `eventName`: [`MutexoChainEventName`](../../messages/type-aliases/MutexoChainEventName)
- `filters` (optional): [`Filter`](../../messages/type-aliases/IFilter)[]

### Returns

A promise that resolves to one of the following messages:
- `SubSuccess`: Indicates that the unsubscription was successful.
- `SubFailure`: Indicates that the unsubscription failed.

## Description

The `unsub` method sends an unsubscription request to the server and waits for a response indicating whether the unsubscription was successful or not.

After a successful unsubscription, the server will stop sending events corresponding to the [`MutexoChainEventName`](../../messages/type-aliases/MutexoChainEventName) and filters specified;
if no filters were specified, the client is unsubscribed entirely by the event.

The method throws an error if the message sent to the server was ill-formed, but not if the unsubscription was well-formed and fails.

Instead, if the unsubscription fails, the result will be an instance of `SubFailure`.

If the unsubscription is successful, a `SubSuccess` is returned.

## Examples

### subscribe and unsubscribe

```ts
const client = new MutexoClient(webSocket);

const utxoSpentHandler = _evt => {
    console.log("someone spent something")
};

client.addEventListener("input", utxoSpentHandler);

const subResult = await client.sub("input");

if (subResult instanceof SubSuccess) {
    const unsubResult = await client.unsub("input");

    if (unsubResult instanceof SubSuccess) {
        client.removeEventListener("input", utxoSpentHandler);
    }
}
```

### Unsubscribe from `"input"` events of a single address

```ts
const client = new MutexoClient(webSocket);

const myFavoriteAddress = "addr1...";
const filters = [
    { addr: myFavoriteAddress }
];

// only unsubscribe `myFavoriteAddress` "input" events
// keeps all other subscriptions to the "input" event (if any)
const unsubResult = await client.unsub("input", filters);

if( unsubResult instanceof SubSuccess ) {
    // remove event listeners no longer needed here
} else { // unsubResult instanceof SubFailure
    console.warn("something went wrong during unsubcription; maybe you were not subscribed")
}
```