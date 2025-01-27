[**@harmoniclabs/mutexo-messages**](../README.md)

***

[@harmoniclabs/mutexo-messages](../README.md) / MutexSuccess

# Class: MutexSuccess

Defined in: [messages/MessageMutexSuccess.ts:27](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageMutexSuccess.ts#L27)

## Implements

- `ToCbor`
- `ToCborObj`
- [`IMutexSuccess`](../interfaces/IMutexSuccess.md)
- `ISatisfiesFilter`

## Constructors

### new MutexSuccess()

> **new MutexSuccess**(`stuff`): [`MutexSuccess`](MutexSuccess.md)

Defined in: [messages/MessageMutexSuccess.ts:34](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageMutexSuccess.ts#L34)

#### Parameters

##### stuff

[`IMutexSuccess`](../interfaces/IMutexSuccess.md)

#### Returns

[`MutexSuccess`](MutexSuccess.md)

## Properties

### id

> `readonly` **id**: `number`

Defined in: [messages/MessageMutexSuccess.ts:30](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageMutexSuccess.ts#L30)

#### Implementation of

[`IMutexSuccess`](../interfaces/IMutexSuccess.md).[`id`](../interfaces/IMutexSuccess.md#id)

***

### mutexOp

> `readonly` **mutexOp**: [`MutexOp`](../enumerations/MutexOp.md)

Defined in: [messages/MessageMutexSuccess.ts:31](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageMutexSuccess.ts#L31)

#### Implementation of

[`IMutexSuccess`](../interfaces/IMutexSuccess.md).[`mutexOp`](../interfaces/IMutexSuccess.md#mutexop)

***

### utxoRefs

> `readonly` **utxoRefs**: `TxOutRef`[]

Defined in: [messages/MessageMutexSuccess.ts:32](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageMutexSuccess.ts#L32)

#### Implementation of

[`IMutexSuccess`](../interfaces/IMutexSuccess.md).[`utxoRefs`](../interfaces/IMutexSuccess.md#utxorefs)

## Methods

### satisfiesFilter()

> **satisfiesFilter**(`filter`): `boolean`

Defined in: [messages/MessageMutexSuccess.ts:43](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageMutexSuccess.ts#L43)

#### Parameters

##### filter

[`IFilter`](../type-aliases/IFilter.md)

#### Returns

`boolean`

#### Implementation of

`ISatisfiesFilter.satisfiesFilter`

***

### satisfiesFilters()

> **satisfiesFilters**(`filters`): `boolean`

Defined in: [messages/MessageMutexSuccess.ts:42](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageMutexSuccess.ts#L42)

#### Parameters

##### filters

[`IFilter`](../type-aliases/IFilter.md)[]

#### Returns

`boolean`

#### Implementation of

`ISatisfiesFilter.satisfiesFilters`

***

### toCbor()

> **toCbor**(): `CborString`

Defined in: [messages/MessageMutexSuccess.ts:45](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageMutexSuccess.ts#L45)

#### Returns

`CborString`

#### Implementation of

`ToCbor.toCbor`

***

### toCborBytes()

> **toCborBytes**(): `Uint8Array`

Defined in: [messages/MessageMutexSuccess.ts:59](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageMutexSuccess.ts#L59)

#### Returns

`Uint8Array`

***

### toCborObj()

> **toCborObj**(): `CborArray`

Defined in: [messages/MessageMutexSuccess.ts:49](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageMutexSuccess.ts#L49)

#### Returns

`CborArray`

#### Implementation of

`ToCbor.toCborObj`

***

### fromCbor()

> `static` **fromCbor**(`cbor`): [`MutexSuccess`](MutexSuccess.md)

Defined in: [messages/MessageMutexSuccess.ts:63](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageMutexSuccess.ts#L63)

#### Parameters

##### cbor

`CanBeCborString`

#### Returns

[`MutexSuccess`](MutexSuccess.md)

***

### fromCborObj()

> `static` **fromCborObj**(`cbor`): [`MutexSuccess`](MutexSuccess.md)

Defined in: [messages/MessageMutexSuccess.ts:68](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageMutexSuccess.ts#L68)

#### Parameters

##### cbor

`CborObj`

#### Returns

[`MutexSuccess`](MutexSuccess.md)
