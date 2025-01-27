[**@harmoniclabs/mutexo-messages**](../README.md)

***

[@harmoniclabs/mutexo-messages](../README.md) / ClientReqLock

# Class: ClientReqLock

Defined in: [clientReqs/ClientReqLock.ts:22](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientReqLock.ts#L22)

## Implements

- `ToCbor`
- `ToCborObj`
- [`IClientReqLock`](../interfaces/IClientReqLock.md)

## Constructors

### new ClientReqLock()

> **new ClientReqLock**(`stuff`): [`ClientReqLock`](ClientReqLock.md)

Defined in: [clientReqs/ClientReqLock.ts:28](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientReqLock.ts#L28)

#### Parameters

##### stuff

[`IClientReqLock`](../interfaces/IClientReqLock.md)

#### Returns

[`ClientReqLock`](ClientReqLock.md)

## Properties

### id

> `readonly` **id**: `number`

Defined in: [clientReqs/ClientReqLock.ts:24](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientReqLock.ts#L24)

#### Implementation of

[`IClientReqLock`](../interfaces/IClientReqLock.md).[`id`](../interfaces/IClientReqLock.md#id)

***

### required

> `readonly` **required**: `number`

Defined in: [clientReqs/ClientReqLock.ts:26](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientReqLock.ts#L26)

#### Implementation of

[`IClientReqLock`](../interfaces/IClientReqLock.md).[`required`](../interfaces/IClientReqLock.md#required)

***

### utxoRefs

> `readonly` **utxoRefs**: `TxOutRef`[]

Defined in: [clientReqs/ClientReqLock.ts:25](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientReqLock.ts#L25)

#### Implementation of

[`IClientReqLock`](../interfaces/IClientReqLock.md).[`utxoRefs`](../interfaces/IClientReqLock.md#utxorefs)

## Methods

### toCbor()

> **toCbor**(): `CborString`

Defined in: [clientReqs/ClientReqLock.ts:46](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientReqLock.ts#L46)

#### Returns

`CborString`

#### Implementation of

`ToCbor.toCbor`

***

### toCborBytes()

> **toCborBytes**(): `Uint8Array`

Defined in: [clientReqs/ClientReqLock.ts:43](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientReqLock.ts#L43)

#### Returns

`Uint8Array`

***

### toCborObj()

> **toCborObj**(): `CborObj`

Defined in: [clientReqs/ClientReqLock.ts:50](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientReqLock.ts#L50)

#### Returns

`CborObj`

#### Implementation of

`ToCbor.toCborObj`

***

### fromCbor()

> `static` **fromCbor**(`cbor`): [`ClientReqLock`](ClientReqLock.md)

Defined in: [clientReqs/ClientReqLock.ts:61](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientReqLock.ts#L61)

#### Parameters

##### cbor

`CanBeCborString`

#### Returns

[`ClientReqLock`](ClientReqLock.md)

***

### fromCborObj()

> `static` **fromCborObj**(`cbor`): [`ClientReqLock`](ClientReqLock.md)

Defined in: [clientReqs/ClientReqLock.ts:65](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientReqLock.ts#L65)

#### Parameters

##### cbor

`CborObj`

#### Returns

[`ClientReqLock`](ClientReqLock.md)
