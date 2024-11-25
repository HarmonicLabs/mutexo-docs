---
sidebar_position: 1
---

# Unsub

The `unsub` method of the `MutexoClient` class is used to unsubscribe from a specific event type. This method sends an unsubscribe request to the server and handles the response.

### Method Signature

```typescript
async unsub(
    eventName: MutexoClientEvtName,
    filters: Filter[] = []
): Promise<MessageSubSuccess | MessageSubFailure | MessageError>
```

### Parameters

- `eventName`: The name of the event to unsubscribe from. It must be one of the valid `MutexoClientEvtName` values.
- `filters`: An optional array of filters to apply to the unsubscribe request. The default value is an empty array.

### Returns

A `Promise` that resolves to one of the following message types:
- `MessageSubSuccess`: Indicates that the unsubscribe request was successful.
- `MessageSubFailure`: Indicates that the unsubscribe request failed.
- `MessageError`: Indicates that an error occurred during the unsubscribe request.

### Example Usage

```typescript
const client = new MutexoClient(webSocket);

client.unsub("lock")
    .then(response => {
        if (response instanceof MessageSubSuccess) {
            console.log("Unsubscribed successfully:", response);
        } else if (response instanceof MessageSubFailure) {
            console.error("Failed to unsubscribe:", response);
        }
    })
    .catch(error => {
        console.error("Error during unsubscribe:", error);
    });
```

### Detailed Description

1. **Unique ID Generation**: The method starts by generating a unique ID for the unsubscribe request using the `getUniqueId` function.
2. **WebSocket Readiness**: It waits for the WebSocket connection to be ready using the `waitWsReady` method.
3. **Event Listeners**: The method sets up event listeners for `subSuccess`, `subFailure`, and `error` events to handle the server's response.
4. **Sending the Request**: It sends the unsubscribe request to the server using the `ClientUnsub` message, which includes the unique ID, event type, and filters.
5. **Handling the Response**: The method processes the server's response and resolves or rejects the promise accordingly.

This method ensures that the client can gracefully unsubscribe from events and handle any potential errors that may occur during the process.