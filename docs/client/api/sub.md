---
sidebar_position: 0
---

# Sub

The `sub` method is used to subscribe to a specific event on the MutexoClient. This method sends a subscription request to the server and waits for a response indicating whether the subscription was successful or not.

### Syntax

```typescript
async sub(
    eventName: MutexoClientEvtName,
    filters?: Filter[]
): Promise<MessageSubSuccess | MessageSubFailure | MessageError>
```

### Parameters

- `eventName`: The name of the event to subscribe to. This should be one of the following:
  - `"free"`
  - `"lock"`
  - `"input"`
  - `"output"`
  - `"mtxSuccess"`
  - `"mtxFailure"`
  - `"error"`
  - `"subSuccess"`
  - `"subFailure"`

- `filters` (optional): An array of filters to apply to the subscription. Filters can be used to narrow down the events you are interested in.

### Returns

A promise that resolves to one of the following messages:
- `MessageSubSuccess`: Indicates that the subscription was successful.
- `MessageSubFailure`: Indicates that the subscription failed.
- `MessageError`: Indicates that an error occurred during the subscription process.

### Example

```typescript
const client = new MutexoClient(webSocket);

client.sub("lock", [{ key: "value" }])
    .then(response => {
        if (response instanceof MessageSubSuccess) {
            console.log("Subscription successful:", response);
        } else if (response instanceof MessageSubFailure) {
            console.log("Subscription failed:", response);
        }
    })
    .catch(error => {
        console.error("Subscription error:", error);
    });
```

### Description

The `sub` method is an asynchronous function that sends a subscription request to the server using the WebSocket connection. It waits for the WebSocket to be ready before sending the request. The method listens for success, failure, or error messages related to the subscription and resolves or rejects the promise accordingly.

This method is useful for clients that need to listen for specific events from the server and react to them in real-time. By using filters, clients can fine-tune their subscriptions to receive only the events they are interested in.

### Notes

- Ensure that the WebSocket connection is established before calling the `sub` method.
- Use the `waitWsReady` method to wait for the WebSocket to be ready if necessary.
- Handle the different types of responses (`MessageSubSuccess`, `MessageSubFailure`, `MessageError`) to ensure proper error handling and response processing.
