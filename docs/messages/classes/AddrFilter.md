[**@harmoniclabs/mutexo-messages**](../README.md)

***

[@harmoniclabs/mutexo-messages](../README.md) / AddrFilter

# Class: AddrFilter

Defined in: [clientReqs/filters/AddrFilter.ts:15](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/filters/AddrFilter.ts#L15)

## Implements

- `ToCbor`
- `ToCborObj`
- [`IAddrFilter`](../interfaces/IAddrFilter.md)

## Constructors

### new AddrFilter()

> **new AddrFilter**(`__namedParameters`): [`AddrFilter`](AddrFilter.md)

Defined in: [clientReqs/filters/AddrFilter.ts:19](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/filters/AddrFilter.ts#L19)

#### Parameters

##### \_\_namedParameters

[`IAddrFilter`](../interfaces/IAddrFilter.md)

#### Returns

[`AddrFilter`](AddrFilter.md)

## Properties

### addr

> `readonly` **addr**: `Address`

Defined in: [clientReqs/filters/AddrFilter.ts:17](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/filters/AddrFilter.ts#L17)

#### Implementation of

[`IAddrFilter`](../interfaces/IAddrFilter.md).[`addr`](../interfaces/IAddrFilter.md#addr)

## Methods

### toCbor()

> **toCbor**(): `CborString`

Defined in: [clientReqs/filters/AddrFilter.ts:24](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/filters/AddrFilter.ts#L24)

#### Returns

`CborString`

#### Implementation of

`ToCbor.toCbor`

***

### toCborObj()

> **toCborObj**(): `CborObj`

Defined in: [clientReqs/filters/AddrFilter.ts:29](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/filters/AddrFilter.ts#L29)

#### Returns

`CborObj`

#### Implementation of

`ToCbor.toCborObj`

***

### fromCbor()

> `static` **fromCbor**(`cbor`): [`AddrFilter`](AddrFilter.md)

Defined in: [clientReqs/filters/AddrFilter.ts:37](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/filters/AddrFilter.ts#L37)

#### Parameters

##### cbor

`CanBeCborString`

#### Returns

[`AddrFilter`](AddrFilter.md)

***

### fromCborObj()

> `static` **fromCborObj**(`cbor`): [`AddrFilter`](AddrFilter.md)

Defined in: [clientReqs/filters/AddrFilter.ts:42](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/filters/AddrFilter.ts#L42)

#### Parameters

##### cbor

`CborObj`

#### Returns

[`AddrFilter`](AddrFilter.md)
