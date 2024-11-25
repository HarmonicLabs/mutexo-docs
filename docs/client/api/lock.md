---
sidebar_position: 2
---

# Lock

The `lock` method in the `MutexoClient` class is used to lock a specified number of UTXOs (Unspent Transaction Outputs). This method is asynchronous and returns a promise that resolves to either a `MessageMutexSuccess`, `MessageMutexFailure`, or `MessageError` object.

### Method Signature

```typescript
async lock(
    utxoRefs: CanBeTxOutRef[],
    required: number = 1
): Promise<MessageMutexSuccess | MessageMutexFailure | MessageError>
```

### Parameters

- **utxoRefs**: `CanBeTxOutRef[]`
  - An array of UTXO references that need to be locked. Each reference can be of a type that can be converted to a `TxOutRef`.

- **required**: `number` (optional, default = 1)
  - The number of UTXOs required to be locked. This must be a positive integer. If not provided, it defaults to 1.

### Return Value

The method returns a promise that resolves to one of the following types:

- **MessageMutexSuccess**
  - Indicates that the UTXOs were successfully locked.
  
- **MessageMutexFailure**
  - Indicates that the UTXOs could not be locked.
  
- **MessageError**
  - Indicates that an error occurred during the locking process.

### Usage Example

```typescript
const client = new MutexoClient(webSocket);

const utxoRefs = [
    // Add UTXO references here
];

client.lock(utxoRefs, 2)
    .then(response => {
        if (response instanceof MessageMutexSuccess) {
            console.log("UTXOs locked successfully:", response);
        } else if (response instanceof MessageMutexFailure) {
            console.log("Failed to lock UTXOs:", response);
        }
    })
    .catch(error => {
        console.error("Error locking UTXOs:", error);
    });
```

### Detailed Description

1. **Initialization**: The method starts by generating a unique ID for the lock request and waits for the WebSocket connection to be ready.

2. **Validation**: It validates the `required` parameter to ensure it is a positive integer. If not, it defaults to 1.

3. **Event Listeners**: The method sets up event listeners for `mtxSuccess`, `mtxFailure`, and `error` events. These listeners handle the respective responses and resolve or reject the promise accordingly.

4. **Sending Request**: The method sends a `ClientReqLock` message over the WebSocket connection with the generated ID, the UTXO references, and the required number of locks.

5. **Handling Responses**: The event listeners handle the responses:
   - On `mtxSuccess`, the promise is resolved with a `MessageMutexSuccess` object.
   - On `mtxFailure`, the promise is resolved with a `MessageMutexFailure` object.
   - On `error`, the promise is rejected with an error message.

This method is crucial for ensuring that specific UTXOs are locked and cannot be used in other transactions until they are explicitly freed, providing a mechanism for managing UTXO state in a concurrent environment.