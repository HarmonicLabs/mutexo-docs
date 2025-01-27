---
sidebar_position: 4
title: free
---

# Free

The `free` method is used to release previously locked UTxOs. This method sends a request to the server to free the specified UTXOs.

### Syntax

```typescript
async free(utxoRefs: CanBeTxOutRef[]): Promise<MessageMutexSuccess | MessageMutexFailure | MessageError>
```

### Parameters

- `utxoRefs`: An array of UTXO references that need to be freed. Each UTXO reference should be of type `CanBeTxOutRef`.

### Returns

A promise that resolves to one of the following types:
- `MessageMutexSuccess`: Indicates that the UTXOs were successfully freed.
- `MessageMutexFailure`: Indicates that the UTXOs could not be freed.
- `MessageError`: Indicates an error occurred during the request.

### Example

```typescript
const utxoRefs = [
    { txHash: "abc123", index: 0 },
    { txHash: "def456", index: 1 }
];

const client = new MutexoClient(new WebSocket("ws://example.com"));

client.free(utxoRefs)
    .then(response => {
        if (response instanceof MessageMutexSuccess) {
            console.log("UTXOs successfully freed:", response);
        } else if (response instanceof MessageMutexFailure) {
            console.log("Failed to free UTXOs:", response);
        }
    })
    .catch(error => {
        console.error("Error freeing UTXOs:", error);
    });
```

### Events

The `free` method may trigger the following events:
- `mtxSuccess`: Emitted when the UTXOs are successfully freed.
- `mtxFailure`: Emitted when the UTXOs could not be freed.
- `error`: Emitted when an error occurs during the request.

### Notes

- Ensure that the WebSocket connection is open before calling the `free` method.
- The method will wait for the WebSocket to be ready if it is not already open.

### See Also

- [`lock` Method](./lock.md)
- [`sub` Method](./sub.md)
- [`unsub` Method](./unsub.md)