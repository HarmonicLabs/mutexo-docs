---
sidebar_position: 3
title: lock
---

# `lock`

The `lock` method signals the intent to lock one or more UTXOs to the server.

The server emits a `"lock"` event if the lock was succesful, to notify the other clients interested that your utxo was locked.

## Signature

```ts
async lock(
    utxoRefs: (ITxOutRef | `${string}#${number}`)[],
    required?: number
): Promise<MutexSuccess | MutexFailure>
```

### Parameters

- `utxoRefs`: (`ITxOutRef` | `string`)[] - An array of UTXO references to be locked.
- `required` (optional): `number` - The number of UTXOs required to be locked. Defaults to 1.

### Returns

A promise that resolves to one of the following messages:
- [`MutexSuccess`](../../messages/classes/MutexSuccess): Indicates that the lock was successful.
- [`MutexFailure`](../../messages/classes/MutexFailure): Indicates that the lock failed.

## Description

The `lock` method sends a lock request to the server and waits for a response indicating whether the lock was successful or not.

After a successful lock, the client will emit a "lock" event.

The method throws an error if the message sent to the server was ill-formed, but not if the lock request was well-formed and fails.

Instead, if the lock request fails, the result will be an instance of `MutexFailure`.

If the lock request is successful, a `MutexSuccess` is returned.

## Examples

### lock any of a set of utxos

```ts
const client = new MutexoClient(webSocket);

const anyOfTheseWorks = [
    { id: "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", index: 0 },
    "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff#2",
    "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff#5",
];

// locks only 1 utxo
const lockResult = await client.lock( anyOfTheseWorks );

if (lockResult instanceof MutexSuccess) {
    console.log(
        "the following utxos were locked",
        lockResult.utxoRefs.map( ref => ref.toString() )
    );
} else {
    console.log("Failed to lock UTXO");
}
```

### Lock N of M utxos

```ts
const client = new MutexoClient(webSocket);

const utxoRefs = [
    { id: "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", index: 0 },
    "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff#2",
    "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff#5",
];

// locks 2 out of 3 utxos
const lockResult = await client.lock(utxoRefs, 2);

if (lockResult instanceof MutexSuccess) {
    console.log(
        "the following utxos were locked",
        lockResult.utxoRefs.map( ref => ref.toString() )
    );
} else {
    console.log("Failed to lock UTXO");
}
```

### Lock all the utxos or fail

```ts
const client = new MutexoClient(webSocket);

const utxoRefs = [
    { id: "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", index: 0 },
    "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff#2",
    "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff#5",
];

// locks all 3, or fail
const lockResult = await client.lock(utxoRefs, utxoRefs.length);

if (lockResult instanceof MutexSuccess) {
    console.log(
        "the following utxos were locked",
        lockResult.utxoRefs.map( ref => ref.toString() )
    );
} else {
    console.log("Failed to lock UTXO");
}
```