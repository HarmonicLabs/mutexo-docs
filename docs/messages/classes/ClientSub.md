[**@harmoniclabs/mutexo-messages**](../README.md)

***

[@harmoniclabs/mutexo-messages](../README.md) / ClientSub

# Class: ClientSub

Defined in: [clientReqs/ClientSub.ts:24](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientSub.ts#L24)

## Implements

- `ToCbor`
- `ToCborObj`
- [`IClientSub`](../interfaces/IClientSub.md)

## Constructors

### new ClientSub()

> **new ClientSub**(`stuff`): [`ClientSub`](ClientSub.md)

Defined in: [clientReqs/ClientSub.ts:30](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientSub.ts#L30)

#### Parameters

##### stuff

[`IClientSub`](../interfaces/IClientSub.md)

#### Returns

[`ClientSub`](ClientSub.md)

## Properties

### chainEventIndex

> `readonly` **chainEventIndex**: [`MutexoChainEventIndex`](../type-aliases/MutexoChainEventIndex.md)

Defined in: [clientReqs/ClientSub.ts:27](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientSub.ts#L27)

#### Implementation of

[`IClientSub`](../interfaces/IClientSub.md).[`chainEventIndex`](../interfaces/IClientSub.md#chaineventindex)

***

### filters

> `readonly` **filters**: [`Filter`](../type-aliases/Filter.md)[]

Defined in: [clientReqs/ClientSub.ts:28](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientSub.ts#L28)

#### Implementation of

[`IClientSub`](../interfaces/IClientSub.md).[`filters`](../interfaces/IClientSub.md#filters)

***

### id

> `readonly` **id**: `number`

Defined in: [clientReqs/ClientSub.ts:26](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientSub.ts#L26)

#### Implementation of

[`IClientSub`](../interfaces/IClientSub.md).[`id`](../interfaces/IClientSub.md#id)

## Methods

### toCbor()

> **toCbor**(): `CborString`

Defined in: [clientReqs/ClientSub.ts:41](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientSub.ts#L41)

#### Returns

`CborString`

#### Implementation of

`ToCbor.toCbor`

***

### toCborBytes()

> **toCborBytes**(): `Uint8Array`

Defined in: [clientReqs/ClientSub.ts:38](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientSub.ts#L38)

#### Returns

`Uint8Array`

***

### toCborObj()

> **toCborObj**(): `CborObj`

Defined in: [clientReqs/ClientSub.ts:44](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientSub.ts#L44)

#### Returns

`CborObj`

#### Implementation of

`ToCbor.toCborObj`

***

### fromCbor()

> `static` **fromCbor**(`cbor`): [`ClientSub`](ClientSub.md)

Defined in: [clientReqs/ClientSub.ts:55](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientSub.ts#L55)

#### Parameters

##### cbor

`CanBeCborString`

#### Returns

[`ClientSub`](ClientSub.md)

***

### fromCborObj()

> `static` **fromCborObj**(`cbor`): [`ClientSub`](ClientSub.md)

Defined in: [clientReqs/ClientSub.ts:59](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientSub.ts#L59)

#### Parameters

##### cbor

`CborObj`

#### Returns

[`ClientSub`](ClientSub.md)
