[**@harmoniclabs/mutexo-messages**](../README.md)

***

[@harmoniclabs/mutexo-messages](../README.md) / SubSuccess

# Class: SubSuccess

Defined in: [messages/MessageSubSuccess.ts:21](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageSubSuccess.ts#L21)

## Implements

- `ToCbor`
- `ToCborObj`
- [`ISubSuccess`](../interfaces/ISubSuccess.md)
- `ISatisfiesFilter`

## Constructors

### new SubSuccess()

> **new SubSuccess**(`stuff`): [`SubSuccess`](SubSuccess.md)

Defined in: [messages/MessageSubSuccess.ts:25](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageSubSuccess.ts#L25)

#### Parameters

##### stuff

[`ISubSuccess`](../interfaces/ISubSuccess.md)

#### Returns

[`SubSuccess`](SubSuccess.md)

## Properties

### id

> `readonly` **id**: `number`

Defined in: [messages/MessageSubSuccess.ts:23](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageSubSuccess.ts#L23)

#### Implementation of

[`ISubSuccess`](../interfaces/ISubSuccess.md).[`id`](../interfaces/ISubSuccess.md#id)

## Methods

### satisfiesFilter()

> **satisfiesFilter**(`filter`): `boolean`

Defined in: [messages/MessageSubSuccess.ts:33](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageSubSuccess.ts#L33)

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

Defined in: [messages/MessageSubSuccess.ts:32](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageSubSuccess.ts#L32)

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

Defined in: [messages/MessageSubSuccess.ts:39](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageSubSuccess.ts#L39)

#### Returns

`CborString`

#### Implementation of

`ToCbor.toCbor`

***

### toCborBytes()

> **toCborBytes**(): `Uint8Array`

Defined in: [messages/MessageSubSuccess.ts:35](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageSubSuccess.ts#L35)

#### Returns

`Uint8Array`

***

### toCborObj()

> **toCborObj**(): `CborArray`

Defined in: [messages/MessageSubSuccess.ts:43](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageSubSuccess.ts#L43)

#### Returns

`CborArray`

#### Implementation of

`ToCbor.toCborObj`

***

### fromCbor()

> `static` **fromCbor**(`cbor`): [`SubSuccess`](SubSuccess.md)

Defined in: [messages/MessageSubSuccess.ts:53](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageSubSuccess.ts#L53)

#### Parameters

##### cbor

`CanBeCborString`

#### Returns

[`SubSuccess`](SubSuccess.md)

***

### fromCborObj()

> `static` **fromCborObj**(`cbor`): [`SubSuccess`](SubSuccess.md)

Defined in: [messages/MessageSubSuccess.ts:58](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageSubSuccess.ts#L58)

#### Parameters

##### cbor

`CborObj`

#### Returns

[`SubSuccess`](SubSuccess.md)
