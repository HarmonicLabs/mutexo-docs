[**@harmoniclabs/mutexo-messages**](../README.md)

***

[@harmoniclabs/mutexo-messages](../README.md) / ClientReqFree

# Class: ClientReqFree

Defined in: [clientReqs/ClientReqFree.ts:21](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientReqFree.ts#L21)

## Implements

- `ToCbor`
- `ToCborObj`
- [`IClientReqFree`](../interfaces/IClientReqFree)

## Constructors

### new ClientReqFree()

> **new ClientReqFree**(`stuff`): [`ClientReqFree`](ClientReqFree)

Defined in: [clientReqs/ClientReqFree.ts:26](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientReqFree.ts#L26)

#### Parameters

##### stuff

[`IClientReqFree`](../interfaces/IClientReqFree)

#### Returns

[`ClientReqFree`](ClientReqFree)

## Properties

### id

> `readonly` **id**: `number`

Defined in: [clientReqs/ClientReqFree.ts:23](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientReqFree.ts#L23)

#### Implementation of

[`IClientReqFree`](../interfaces/IClientReqFree).[`id`](../interfaces/IClientReqFree.md#id)

***

### utxoRefs

> `readonly` **utxoRefs**: `TxOutRef`[]

Defined in: [clientReqs/ClientReqFree.ts:24](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientReqFree.ts#L24)

#### Implementation of

[`IClientReqFree`](../interfaces/IClientReqFree).[`utxoRefs`](../interfaces/IClientReqFree.md#utxorefs)

## Methods

### toCbor()

> **toCbor**(): `CborString`

Defined in: [clientReqs/ClientReqFree.ts:39](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientReqFree.ts#L39)

#### Returns

`CborString`

#### Implementation of

`ToCbor.toCbor`

***

### toCborBytes()

> **toCborBytes**(): `Uint8Array`

Defined in: [clientReqs/ClientReqFree.ts:36](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientReqFree.ts#L36)

#### Returns

`Uint8Array`

***

### toCborObj()

> **toCborObj**(): `CborObj`

Defined in: [clientReqs/ClientReqFree.ts:43](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientReqFree.ts#L43)

#### Returns

`CborObj`

#### Implementation of

`ToCbor.toCborObj`

***

### fromCbor()

> `static` **fromCbor**(`cbor`): [`ClientReqFree`](ClientReqFree)

Defined in: [clientReqs/ClientReqFree.ts:53](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientReqFree.ts#L53)

#### Parameters

##### cbor

`CanBeCborString`

#### Returns

[`ClientReqFree`](ClientReqFree)

***

### fromCborObj()

> `static` **fromCborObj**(`cbor`): [`ClientReqFree`](ClientReqFree)

Defined in: [clientReqs/ClientReqFree.ts:57](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/ClientReqFree.ts#L57)

#### Parameters

##### cbor

`CborObj`

#### Returns

[`ClientReqFree`](ClientReqFree)
