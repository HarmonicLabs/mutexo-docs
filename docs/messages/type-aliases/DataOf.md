[**@harmoniclabs/mutexo-messages**](../README.md)

***

[@harmoniclabs/mutexo-messages](../README.md) / DataOf

# Type Alias: DataOf\<EventName\>

> **DataOf**\<`EventName`\>: `EventName` *extends* `"free"` ? [`MutexoFree`](../classes/MutexoFree.md) : `EventName` *extends* `"lock"` ? [`MutexoLock`](../classes/MutexoLock.md) : `EventName` *extends* `"input"` ? [`MutexoInput`](../classes/MutexoInput.md) : `EventName` *extends* `"output"` ? [`MutexoOutput`](../classes/MutexoOutput.md) : `EventName` *extends* `"mutexSuccess"` ? [`MutexSuccess`](../classes/MutexSuccess.md) : `EventName` *extends* `"mutexFailure"` ? [`MutexFailure`](../classes/MutexFailure.md) : `EventName` *extends* `"close"` ? [`Close`](../classes/Close.md) : `EventName` *extends* `"error"` ? [`MutexoError`](../classes/MutexoError.md) : `EventName` *extends* `"subSuccess"` ? [`SubSuccess`](../classes/SubSuccess.md) : `EventName` *extends* `"subFailure"` ? [`SubFailure`](../classes/SubFailure.md) : `never`

Defined in: [events/DataOfEvent.ts:13](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/events/DataOfEvent.ts#L13)

## Type Parameters

• **EventName** *extends* [`MutexoEventName`](MutexoEventName.md)
