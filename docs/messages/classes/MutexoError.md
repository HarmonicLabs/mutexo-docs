[**@harmoniclabs/mutexo-messages**](../README.md)

***

[@harmoniclabs/mutexo-messages](../README.md) / MutexoError

# Class: MutexoError

Defined in: [messages/MessageError.ts:22](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageError.ts#L22)

## Implements

- `ToCbor`
- `ToCborObj`
- [`IMutexoError`](../interfaces/IMutexoError)
- `ISatisfiesFilter`

## Constructors

### new MutexoError()

> **new MutexoError**(`stuff`): [`MutexoError`](MutexoError)

Defined in: [messages/MessageError.ts:32](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageError.ts#L32)

#### Parameters

##### stuff

[`IMutexoError`](../interfaces/IMutexoError)

#### Returns

[`MutexoError`](MutexoError)

## Properties

### errorCode

> `readonly` **errorCode**: `ErrorCode`

Defined in: [messages/MessageError.ts:25](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageError.ts#L25)

#### Implementation of

[`IMutexoError`](../interfaces/IMutexoError).[`errorCode`](../interfaces/IMutexoError.md#errorcode)

## Accessors

### message

#### Get Signature

> **get** **message**(): `string`

Defined in: [messages/MessageError.ts:27](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageError.ts#L27)

##### Returns

`string`

## Methods

### satisfiesFilter()

> **satisfiesFilter**(`filter`): `boolean`

Defined in: [messages/MessageError.ts:40](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageError.ts#L40)

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

Defined in: [messages/MessageError.ts:39](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageError.ts#L39)

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

Defined in: [messages/MessageError.ts:46](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageError.ts#L46)

#### Returns

`CborString`

#### Implementation of

`ToCbor.toCbor`

***

### toCborBytes()

> **toCborBytes**(): `Uint8Array`

Defined in: [messages/MessageError.ts:42](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageError.ts#L42)

#### Returns

`Uint8Array`

***

### toCborObj()

> **toCborObj**(): `CborArray`

Defined in: [messages/MessageError.ts:50](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageError.ts#L50)

#### Returns

`CborArray`

#### Implementation of

`ToCbor.toCborObj`

***

### fromCbor()

> `static` **fromCbor**(`cbor`): [`MutexoError`](MutexoError)

Defined in: [messages/MessageError.ts:60](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageError.ts#L60)

#### Parameters

##### cbor

`CanBeCborString`

#### Returns

[`MutexoError`](MutexoError)

***

### fromCborObj()

> `static` **fromCborObj**(`cbor`): [`MutexoError`](MutexoError)

Defined in: [messages/MessageError.ts:65](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageError.ts#L65)

#### Parameters

##### cbor

`CborObj`

#### Returns

[`MutexoError`](MutexoError)
