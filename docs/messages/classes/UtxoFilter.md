[**@harmoniclabs/mutexo-messages**](../README.md)

***

[@harmoniclabs/mutexo-messages](../README.md) / UtxoFilter

# Class: UtxoFilter

Defined in: [clientReqs/filters/UtxoFilter.ts:8](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/filters/UtxoFilter.ts#L8)

## Implements

- `ToCbor`
- `ToCborObj`
- [`IUtxoFilter`](../interfaces/IUtxoFilter.md)

## Constructors

### new UtxoFilter()

> **new UtxoFilter**(`__namedParameters`): [`UtxoFilter`](UtxoFilter.md)

Defined in: [clientReqs/filters/UtxoFilter.ts:12](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/filters/UtxoFilter.ts#L12)

#### Parameters

##### \_\_namedParameters

[`IUtxoFilter`](../interfaces/IUtxoFilter.md)

#### Returns

[`UtxoFilter`](UtxoFilter.md)

## Properties

### utxoRef

> `readonly` **utxoRef**: `TxOutRef`

Defined in: [clientReqs/filters/UtxoFilter.ts:10](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/filters/UtxoFilter.ts#L10)

#### Implementation of

[`IUtxoFilter`](../interfaces/IUtxoFilter.md).[`utxoRef`](../interfaces/IUtxoFilter.md#utxoref)

## Methods

### toCbor()

> **toCbor**(): `CborString`

Defined in: [clientReqs/filters/UtxoFilter.ts:17](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/filters/UtxoFilter.ts#L17)

#### Returns

`CborString`

#### Implementation of

`ToCbor.toCbor`

***

### toCborObj()

> **toCborObj**(): `CborArray`

Defined in: [clientReqs/filters/UtxoFilter.ts:22](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/filters/UtxoFilter.ts#L22)

#### Returns

`CborArray`

#### Implementation of

`ToCbor.toCborObj`

***

### fromCbor()

> `static` **fromCbor**(`cbor`): [`UtxoFilter`](UtxoFilter.md)

Defined in: [clientReqs/filters/UtxoFilter.ts:30](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/filters/UtxoFilter.ts#L30)

#### Parameters

##### cbor

`CanBeCborString`

#### Returns

[`UtxoFilter`](UtxoFilter.md)

***

### fromCborObj()

> `static` **fromCborObj**(`cbor`): [`UtxoFilter`](UtxoFilter.md)

Defined in: [clientReqs/filters/UtxoFilter.ts:36](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/clientReqs/filters/UtxoFilter.ts#L36)

#### Parameters

##### cbor

`CborObj`

#### Returns

[`UtxoFilter`](UtxoFilter.md)
