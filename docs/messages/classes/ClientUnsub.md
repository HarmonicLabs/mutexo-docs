[**@harmoniclabs/mutexo-messages**](../README.md)

***

[@harmoniclabs/mutexo-messages](../README.md) / ClientUnsub

# Class: ClientUnsub

Defined in: [clientReqs/ClientUnsub.ts:23](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientUnsub.ts#L23)

## Implements

- `ToCbor`
- `ToCborObj`
- [`IClientUnsub`](../interfaces/IClientUnsub)

## Constructors

### new ClientUnsub()

> **new ClientUnsub**(`stuff`): [`ClientUnsub`](ClientUnsub)

Defined in: [clientReqs/ClientUnsub.ts:29](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientUnsub.ts#L29)

#### Parameters

##### stuff

[`IClientUnsub`](../interfaces/IClientUnsub)

#### Returns

[`ClientUnsub`](ClientUnsub)

## Properties

### chainEventIndex

> `readonly` **chainEventIndex**: [`MutexoChainEventIndex`](../type-aliases/MutexoChainEventIndex)

Defined in: [clientReqs/ClientUnsub.ts:26](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientUnsub.ts#L26)

#### Implementation of

[`IClientUnsub`](../interfaces/IClientUnsub).[`chainEventIndex`](../interfaces/IClientUnsub.md#chaineventindex)

***

### filters

> `readonly` **filters**: [`Filter`](../type-aliases/Filter)[]

Defined in: [clientReqs/ClientUnsub.ts:27](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientUnsub.ts#L27)

#### Implementation of

[`IClientUnsub`](../interfaces/IClientUnsub).[`filters`](../interfaces/IClientUnsub.md#filters)

***

### id

> `readonly` **id**: `number`

Defined in: [clientReqs/ClientUnsub.ts:25](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientUnsub.ts#L25)

#### Implementation of

[`IClientUnsub`](../interfaces/IClientUnsub).[`id`](../interfaces/IClientUnsub.md#id)

## Methods

### toCbor()

> **toCbor**(): `CborString`

Defined in: [clientReqs/ClientUnsub.ts:40](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientUnsub.ts#L40)

#### Returns

`CborString`

#### Implementation of

`ToCbor.toCbor`

***

### toCborBytes()

> **toCborBytes**(): `Uint8Array`

Defined in: [clientReqs/ClientUnsub.ts:37](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientUnsub.ts#L37)

#### Returns

`Uint8Array`

***

### toCborObj()

> **toCborObj**(): `CborObj`

Defined in: [clientReqs/ClientUnsub.ts:43](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientUnsub.ts#L43)

#### Returns

`CborObj`

#### Implementation of

`ToCbor.toCborObj`

***

### fromCbor()

> `static` **fromCbor**(`cbor`): [`ClientUnsub`](ClientUnsub)

Defined in: [clientReqs/ClientUnsub.ts:54](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientUnsub.ts#L54)

#### Parameters

##### cbor

`CanBeCborString`

#### Returns

[`ClientUnsub`](ClientUnsub)

***

### fromCborObj()

> `static` **fromCborObj**(`cbor`): [`ClientUnsub`](ClientUnsub)

Defined in: [clientReqs/ClientUnsub.ts:58](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientUnsub.ts#L58)

#### Parameters

##### cbor

`CborObj`

#### Returns

[`ClientUnsub`](ClientUnsub)
