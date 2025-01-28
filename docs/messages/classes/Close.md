[**@harmoniclabs/mutexo-messages**](../README.md)

***

[@harmoniclabs/mutexo-messages](../README.md) / Close

# Class: Close

Defined in: [messages/MessageClose.ts:17](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageClose.ts#L17)

## Implements

- `ToCbor`
- `ToCborObj`
- [`IClose`](../interfaces/IClose)
- `ISatisfiesFilter`

## Constructors

### new Close()

> **new Close**(`stuff`?): [`Close`](Close)

Defined in: [messages/MessageClose.ts:20](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageClose.ts#L20)

#### Parameters

##### stuff?

[`IClose`](../interfaces/IClose)

#### Returns

[`Close`](Close)

## Methods

### satisfiesFilter()

> **satisfiesFilter**(`filter`): `boolean`

Defined in: [messages/MessageClose.ts:23](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageClose.ts#L23)

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

Defined in: [messages/MessageClose.ts:22](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageClose.ts#L22)

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

Defined in: [messages/MessageClose.ts:25](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageClose.ts#L25)

#### Returns

`CborString`

#### Implementation of

`ToCbor.toCbor`

***

### toCborBytes()

> **toCborBytes**(): `Uint8Array`

Defined in: [messages/MessageClose.ts:37](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageClose.ts#L37)

#### Returns

`Uint8Array`

***

### toCborObj()

> **toCborObj**(): `CborArray`

Defined in: [messages/MessageClose.ts:29](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageClose.ts#L29)

#### Returns

`CborArray`

#### Implementation of

`ToCbor.toCborObj`

***

### fromCbor()

> `static` **fromCbor**(`cbor`): [`Close`](Close)

Defined in: [messages/MessageClose.ts:42](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageClose.ts#L42)

#### Parameters

##### cbor

`CanBeCborString`

#### Returns

[`Close`](Close)

***

### fromCborObj()

> `static` **fromCborObj**(`cbor`): [`Close`](Close)

Defined in: [messages/MessageClose.ts:48](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageClose.ts#L48)

#### Parameters

##### cbor

`CborObj`

#### Returns

[`Close`](Close)
