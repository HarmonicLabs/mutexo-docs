[**@harmoniclabs/mutexo-messages**](../README.md)

***

[@harmoniclabs/mutexo-messages](../README.md) / MutexoLock

# Class: MutexoLock

Defined in: [messages/MessageLock.ts:24](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageLock.ts#L24)

## Implements

- `ToCbor`
- `ToCborObj`
- [`IMutexoLock`](../interfaces/IMutexoLock)
- `ISatisfiesFilter`

## Constructors

### new MutexoLock()

> **new MutexoLock**(`stuff`): [`MutexoLock`](MutexoLock)

Defined in: [messages/MessageLock.ts:30](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageLock.ts#L30)

#### Parameters

##### stuff

[`IMutexoLock`](../interfaces/IMutexoLock)

#### Returns

[`MutexoLock`](MutexoLock)

## Properties

### addr

> `readonly` **addr**: `Address`

Defined in: [messages/MessageLock.ts:28](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageLock.ts#L28)

#### Implementation of

[`IMutexoLock`](../interfaces/IMutexoLock).[`addr`](../interfaces/IMutexoLock.md#addr)

***

### utxoRef

> `readonly` **utxoRef**: `TxOutRef`

Defined in: [messages/MessageLock.ts:27](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageLock.ts#L27)

#### Implementation of

[`IMutexoLock`](../interfaces/IMutexoLock).[`utxoRef`](../interfaces/IMutexoLock.md#utxoref)

## Methods

### satisfiesFilter()

> **satisfiesFilter**(`filter`): `boolean`

Defined in: [messages/MessageLock.ts:41](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageLock.ts#L41)

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

Defined in: [messages/MessageLock.ts:37](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageLock.ts#L37)

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

Defined in: [messages/MessageLock.ts:54](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageLock.ts#L54)

#### Returns

`CborString`

#### Implementation of

`ToCbor.toCbor`

***

### toCborBytes()

> **toCborBytes**(): `Uint8Array`

Defined in: [messages/MessageLock.ts:68](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageLock.ts#L68)

#### Returns

`Uint8Array`

***

### toCborObj()

> **toCborObj**(): `CborArray`

Defined in: [messages/MessageLock.ts:58](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageLock.ts#L58)

#### Returns

`CborArray`

#### Implementation of

`ToCbor.toCborObj`

***

### fromCbor()

> `static` **fromCbor**(`cbor`): [`MutexoLock`](MutexoLock)

Defined in: [messages/MessageLock.ts:72](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageLock.ts#L72)

#### Parameters

##### cbor

`CanBeCborString`

#### Returns

[`MutexoLock`](MutexoLock)

***

### fromCborObj()

> `static` **fromCborObj**(`cbor`): [`MutexoLock`](MutexoLock)

Defined in: [messages/MessageLock.ts:77](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageLock.ts#L77)

#### Parameters

##### cbor

`CborObj`

#### Returns

[`MutexoLock`](MutexoLock)
