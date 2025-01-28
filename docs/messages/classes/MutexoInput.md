[**@harmoniclabs/mutexo-messages**](../README.md)

***

[@harmoniclabs/mutexo-messages](../README.md) / MutexoInput

# Class: MutexoInput

Defined in: [messages/MessageInput.ts:26](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageInput.ts#L26)

## Implements

- `ToCbor`
- `ToCborObj`
- [`IMutexoInput`](../interfaces/IMutexoInput)
- `ISatisfiesFilter`

## Constructors

### new MutexoInput()

> **new MutexoInput**(`stuff`): [`MutexoInput`](MutexoInput)

Defined in: [messages/MessageInput.ts:33](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageInput.ts#L33)

#### Parameters

##### stuff

[`IMutexoInput`](../interfaces/IMutexoInput)

#### Returns

[`MutexoInput`](MutexoInput)

## Properties

### addr

> `readonly` **addr**: `Address`

Defined in: [messages/MessageInput.ts:30](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageInput.ts#L30)

#### Implementation of

[`IMutexoInput`](../interfaces/IMutexoInput).[`addr`](../interfaces/IMutexoInput.md#addr)

***

### txHash

> `readonly` **txHash**: `Uint8Array`

Defined in: [messages/MessageInput.ts:31](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageInput.ts#L31)

#### Implementation of

[`IMutexoInput`](../interfaces/IMutexoInput).[`txHash`](../interfaces/IMutexoInput.md#txhash)

***

### utxoRef

> `readonly` **utxoRef**: `TxOutRef`

Defined in: [messages/MessageInput.ts:29](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageInput.ts#L29)

#### Implementation of

[`IMutexoInput`](../interfaces/IMutexoInput).[`utxoRef`](../interfaces/IMutexoInput.md#utxoref)

## Methods

### satisfiesFilter()

> **satisfiesFilter**(`filter`): `boolean`

Defined in: [messages/MessageInput.ts:45](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageInput.ts#L45)

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

Defined in: [messages/MessageInput.ts:41](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageInput.ts#L41)

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

Defined in: [messages/MessageInput.ts:58](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageInput.ts#L58)

#### Returns

`CborString`

#### Implementation of

`ToCbor.toCbor`

***

### toCborBytes()

> **toCborBytes**(): `Uint8Array`

Defined in: [messages/MessageInput.ts:73](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageInput.ts#L73)

#### Returns

`Uint8Array`

***

### toCborObj()

> **toCborObj**(): `CborArray`

Defined in: [messages/MessageInput.ts:62](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageInput.ts#L62)

#### Returns

`CborArray`

#### Implementation of

`ToCbor.toCborObj`

***

### fromCbor()

> `static` **fromCbor**(`cbor`): [`MutexoInput`](MutexoInput)

Defined in: [messages/MessageInput.ts:77](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageInput.ts#L77)

#### Parameters

##### cbor

`CanBeCborString`

#### Returns

[`MutexoInput`](MutexoInput)

***

### fromCborObj()

> `static` **fromCborObj**(`cbor`): [`MutexoInput`](MutexoInput)

Defined in: [messages/MessageInput.ts:82](https://github.com/HarmonicLabs/mutexo-messages/blob/aefac8841dc1fa8aebb577df666016362446522d/src/messages/MessageInput.ts#L82)

#### Parameters

##### cbor

`CborObj`

#### Returns

[`MutexoInput`](MutexoInput)
