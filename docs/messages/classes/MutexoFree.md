[**@harmoniclabs/mutexo-messages**](../README.md)

***

[@harmoniclabs/mutexo-messages](../README.md) / MutexoFree

# Class: MutexoFree

Defined in: [messages/MessageFree.ts:23](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageFree.ts#L23)

## Implements

- `ToCbor`
- `ToCborObj`
- [`IMutexoFree`](../interfaces/IMutexoFree)
- `ISatisfiesFilter`

## Constructors

### new MutexoFree()

> **new MutexoFree**(`stuff`): [`MutexoFree`](MutexoFree)

Defined in: [messages/MessageFree.ts:29](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageFree.ts#L29)

#### Parameters

##### stuff

[`IMutexoFree`](../interfaces/IMutexoFree)

#### Returns

[`MutexoFree`](MutexoFree)

## Properties

### addr

> `readonly` **addr**: `Address`

Defined in: [messages/MessageFree.ts:27](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageFree.ts#L27)

#### Implementation of

[`IMutexoFree`](../interfaces/IMutexoFree).[`addr`](../interfaces/IMutexoFree.md#addr)

***

### utxoRef

> `readonly` **utxoRef**: `TxOutRef`

Defined in: [messages/MessageFree.ts:26](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageFree.ts#L26)

#### Implementation of

[`IMutexoFree`](../interfaces/IMutexoFree).[`utxoRef`](../interfaces/IMutexoFree.md#utxoref)

## Methods

### satisfiesFilter()

> **satisfiesFilter**(`filter`): `boolean`

Defined in: [messages/MessageFree.ts:40](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageFree.ts#L40)

#### Parameters

##### filter

[`IFilter`](../type-aliases/IFilter)

#### Returns

`boolean`

#### Implementation of

`ISatisfiesFilter.satisfiesFilter`

***

### satisfiesFilters()

> **satisfiesFilters**(`filters`): `boolean`

Defined in: [messages/MessageFree.ts:36](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageFree.ts#L36)

#### Parameters

##### filters

[`IFilter`](../type-aliases/IFilter)[]

#### Returns

`boolean`

#### Implementation of

`ISatisfiesFilter.satisfiesFilters`

***

### toCbor()

> **toCbor**(): `CborString`

Defined in: [messages/MessageFree.ts:53](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageFree.ts#L53)

#### Returns

`CborString`

#### Implementation of

`ToCbor.toCbor`

***

### toCborBytes()

> **toCborBytes**(): `Uint8Array`

Defined in: [messages/MessageFree.ts:67](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageFree.ts#L67)

#### Returns

`Uint8Array`

***

### toCborObj()

> **toCborObj**(): `CborArray`

Defined in: [messages/MessageFree.ts:57](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageFree.ts#L57)

#### Returns

`CborArray`

#### Implementation of

`ToCbor.toCborObj`

***

### fromCbor()

> `static` **fromCbor**(`cbor`): [`MutexoFree`](MutexoFree)

Defined in: [messages/MessageFree.ts:71](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageFree.ts#L71)

#### Parameters

##### cbor

`CanBeCborString`

#### Returns

[`MutexoFree`](MutexoFree)

***

### fromCborObj()

> `static` **fromCborObj**(`cbor`): [`MutexoFree`](MutexoFree)

Defined in: [messages/MessageFree.ts:76](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageFree.ts#L76)

#### Parameters

##### cbor

`CborObj`

#### Returns

[`MutexoFree`](MutexoFree)
