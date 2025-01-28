[**@harmoniclabs/mutexo-messages**](../README.md)

***

[@harmoniclabs/mutexo-messages](../README.md) / SubFailure

# Class: SubFailure

Defined in: [messages/MessageSubFailure.ts:24](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageSubFailure.ts#L24)

## Implements

- `ToCbor`
- `ToCborObj`
- [`ISubFailure`](../interfaces/ISubFailure)
- `ISatisfiesFilter`

## Constructors

### new SubFailure()

> **new SubFailure**(`stuff`): [`SubFailure`](SubFailure)

Defined in: [messages/MessageSubFailure.ts:34](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageSubFailure.ts#L34)

#### Parameters

##### stuff

[`ISubFailure`](../interfaces/ISubFailure)

#### Returns

[`SubFailure`](SubFailure)

## Properties

### errorCode

> `readonly` **errorCode**: `ErrorCode`

Defined in: [messages/MessageSubFailure.ts:27](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageSubFailure.ts#L27)

#### Implementation of

[`ISubFailure`](../interfaces/ISubFailure).[`errorCode`](../interfaces/ISubFailure.md#errorcode)

***

### id

> `readonly` **id**: `number`

Defined in: [messages/MessageSubFailure.ts:26](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageSubFailure.ts#L26)

#### Implementation of

[`ISubFailure`](../interfaces/ISubFailure).[`id`](../interfaces/ISubFailure.md#id)

## Accessors

### message

#### Get Signature

> **get** **message**(): `string`

Defined in: [messages/MessageSubFailure.ts:29](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageSubFailure.ts#L29)

##### Returns

`string`

## Methods

### satisfiesFilter()

> **satisfiesFilter**(`filter`): `boolean`

Defined in: [messages/MessageSubFailure.ts:43](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageSubFailure.ts#L43)

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

Defined in: [messages/MessageSubFailure.ts:42](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageSubFailure.ts#L42)

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

Defined in: [messages/MessageSubFailure.ts:49](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageSubFailure.ts#L49)

#### Returns

`CborString`

#### Implementation of

`ToCbor.toCbor`

***

### toCborBytes()

> **toCborBytes**(): `Uint8Array`

Defined in: [messages/MessageSubFailure.ts:45](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageSubFailure.ts#L45)

#### Returns

`Uint8Array`

***

### toCborObj()

> **toCborObj**(): `CborArray`

Defined in: [messages/MessageSubFailure.ts:53](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageSubFailure.ts#L53)

#### Returns

`CborArray`

#### Implementation of

`ToCbor.toCborObj`

***

### fromCbor()

> `static` **fromCbor**(`cbor`): [`SubFailure`](SubFailure)

Defined in: [messages/MessageSubFailure.ts:64](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageSubFailure.ts#L64)

#### Parameters

##### cbor

`CanBeCborString`

#### Returns

[`SubFailure`](SubFailure)

***

### fromCborObj()

> `static` **fromCborObj**(`cbor`): [`SubFailure`](SubFailure)

Defined in: [messages/MessageSubFailure.ts:69](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageSubFailure.ts#L69)

#### Parameters

##### cbor

`CborObj`

#### Returns

[`SubFailure`](SubFailure)
