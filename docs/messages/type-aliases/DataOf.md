[**@harmoniclabs/mutexo-messages**](../README.md)

***

[@harmoniclabs/mutexo-messages](../README.md) / DataOf

# Type Alias: DataOf\<EventName\>

> **DataOf**\<`EventName`\>: `EventName` *extends* `"free"` ? [`MutexoFree`](../classes/MutexoFree) : `EventName` *extends* `"lock"` ? [`MutexoLock`](../classes/MutexoLock) : `EventName` *extends* `"input"` ? [`MutexoInput`](../classes/MutexoInput) : `EventName` *extends* `"output"` ? [`MutexoOutput`](../classes/MutexoOutput) : `EventName` *extends* `"mutexSuccess"` ? [`MutexSuccess`](../classes/MutexSuccess) : `EventName` *extends* `"mutexFailure"` ? [`MutexFailure`](../classes/MutexFailure) : `EventName` *extends* `"close"` ? [`Close`](../classes/Close) : `EventName` *extends* `"error"` ? [`MutexoError`](../classes/MutexoError) : `EventName` *extends* `"subSuccess"` ? [`SubSuccess`](../classes/SubSuccess) : `EventName` *extends* `"subFailure"` ? [`SubFailure`](../classes/SubFailure) : `never`

Defined in: [events/DataOfEvent.ts:13](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/events/DataOfEvent.ts#L13)

## Type Parameters

• **EventName** *extends* [`MutexoEventName`](MutexoEventName)
