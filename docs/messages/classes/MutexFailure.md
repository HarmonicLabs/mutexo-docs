[**@harmoniclabs/mutexo-messages**](../README.md)

***

[@harmoniclabs/mutexo-messages](../README.md) / MutexFailure

# Class: MutexFailure

Defined in: [messages/MessageMutexFailure.ts:29](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageMutexFailure.ts#L29)

## Implements

- `ToCbor`
- `ToCborObj`
- [`IMutexFailure`](../interfaces/IMutexFailure)
- `ISatisfiesFilter`

## Constructors

### new MutexFailure()

> **new MutexFailure**(`stuff`): [`MutexFailure`](MutexFailure)

Defined in: [messages/MessageMutexFailure.ts:36](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageMutexFailure.ts#L36)

#### Parameters

##### stuff

[`IMutexFailure`](../interfaces/IMutexFailure)

#### Returns

[`MutexFailure`](MutexFailure)

## Properties

### id

> `readonly` **id**: `ErrorCode`

Defined in: [messages/MessageMutexFailure.ts:32](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageMutexFailure.ts#L32)

#### Implementation of

[`IMutexFailure`](../interfaces/IMutexFailure).[`id`](../interfaces/IMutexFailure.md#id)

***

### mutexOp

> `readonly` **mutexOp**: [`MutexOp`](../enumerations/MutexOp)

Defined in: [messages/MessageMutexFailure.ts:33](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageMutexFailure.ts#L33)

#### Implementation of

[`IMutexFailure`](../interfaces/IMutexFailure).[`mutexOp`](../interfaces/IMutexFailure.md#mutexop)

***

### utxoRefs

> `readonly` **utxoRefs**: `TxOutRef`[]

Defined in: [messages/MessageMutexFailure.ts:34](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageMutexFailure.ts#L34)

#### Implementation of

[`IMutexFailure`](../interfaces/IMutexFailure).[`utxoRefs`](../interfaces/IMutexFailure.md#utxorefs)

## Methods

### satisfiesFilter()

> **satisfiesFilter**(`filter`): `boolean`

Defined in: [messages/MessageMutexFailure.ts:46](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageMutexFailure.ts#L46)

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

Defined in: [messages/MessageMutexFailure.ts:45](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageMutexFailure.ts#L45)

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

Defined in: [messages/MessageMutexFailure.ts:48](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageMutexFailure.ts#L48)

#### Returns

`CborString`

#### Implementation of

`ToCbor.toCbor`

***

### toCborBytes()

> **toCborBytes**(): `Uint8Array`

Defined in: [messages/MessageMutexFailure.ts:64](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageMutexFailure.ts#L64)

#### Returns

`Uint8Array`

***

### toCborObj()

> **toCborObj**(): `CborArray`

Defined in: [messages/MessageMutexFailure.ts:53](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageMutexFailure.ts#L53)

#### Returns

`CborArray`

#### Implementation of

`ToCbor.toCborObj`

***

### fromCbor()

> `static` **fromCbor**(`cbor`): [`MutexFailure`](MutexFailure)

Defined in: [messages/MessageMutexFailure.ts:69](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageMutexFailure.ts#L69)

#### Parameters

##### cbor

`CanBeCborString`

#### Returns

[`MutexFailure`](MutexFailure)

***

### fromCborObj()

> `static` **fromCborObj**(`cbor`): [`MutexFailure`](MutexFailure)

Defined in: [messages/MessageMutexFailure.ts:75](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageMutexFailure.ts#L75)

#### Parameters

##### cbor

`CborObj`

#### Returns

[`MutexFailure`](MutexFailure)
