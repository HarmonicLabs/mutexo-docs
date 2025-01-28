[**@harmoniclabs/mutexo-messages**](../README.md)

***

[@harmoniclabs/mutexo-messages](../README.md) / MutexoOutput

# Class: MutexoOutput

Defined in: [messages/MessageOutput.ts:22](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageOutput.ts#L22)

## Implements

- `ToCbor`
- `ToCborObj`
- [`IMutexoOutput`](../interfaces/IMutexoOutput)
- `ISatisfiesFilter`

## Constructors

### new MutexoOutput()

> **new MutexoOutput**(`stuff`): [`MutexoOutput`](MutexoOutput)

Defined in: [messages/MessageOutput.ts:28](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageOutput.ts#L28)

#### Parameters

##### stuff

[`IMutexoOutput`](../interfaces/IMutexoOutput)

#### Returns

[`MutexoOutput`](MutexoOutput)

## Properties

### addr

> `readonly` **addr**: `Address`

Defined in: [messages/MessageOutput.ts:26](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageOutput.ts#L26)

#### Implementation of

[`IMutexoOutput`](../interfaces/IMutexoOutput).[`addr`](../interfaces/IMutexoOutput.md#addr)

***

### utxoRef

> `readonly` **utxoRef**: `TxOutRef`

Defined in: [messages/MessageOutput.ts:25](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageOutput.ts#L25)

#### Implementation of

[`IMutexoOutput`](../interfaces/IMutexoOutput).[`utxoRef`](../interfaces/IMutexoOutput.md#utxoref)

## Methods

### satisfiesFilter()

> **satisfiesFilter**(`filter`): `boolean`

Defined in: [messages/MessageOutput.ts:39](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageOutput.ts#L39)

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

Defined in: [messages/MessageOutput.ts:35](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageOutput.ts#L35)

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

Defined in: [messages/MessageOutput.ts:52](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageOutput.ts#L52)

#### Returns

`CborString`

#### Implementation of

`ToCbor.toCbor`

***

### toCborBytes()

> **toCborBytes**(): `Uint8Array`

Defined in: [messages/MessageOutput.ts:66](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageOutput.ts#L66)

#### Returns

`Uint8Array`

***

### toCborObj()

> **toCborObj**(): `CborArray`

Defined in: [messages/MessageOutput.ts:56](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageOutput.ts#L56)

#### Returns

`CborArray`

#### Implementation of

`ToCbor.toCborObj`

***

### fromCbor()

> `static` **fromCbor**(`cbor`): [`MutexoOutput`](MutexoOutput)

Defined in: [messages/MessageOutput.ts:70](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageOutput.ts#L70)

#### Parameters

##### cbor

`CanBeCborString`

#### Returns

[`MutexoOutput`](MutexoOutput)

***

### fromCborObj()

> `static` **fromCborObj**(`cbor`): [`MutexoOutput`](MutexoOutput)

Defined in: [messages/MessageOutput.ts:75](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageOutput.ts#L75)

#### Parameters

##### cbor

`CborObj`

#### Returns

[`MutexoOutput`](MutexoOutput)
