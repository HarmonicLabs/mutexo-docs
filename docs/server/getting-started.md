---
sidebar_position: 0
---

# Getting Started

## Installation

```
npm install -g @harmoniclabs/mutexo-server
```

## Cardano node

Before running `mutexo-server` you will need a properly working Cardano node running for the tool to connect to.


<details>
<summary>

### `cardano-node` quickstart

</summary>

<p>

Here we'll go over some quick comands to quicly setup a node in preprod testnet.

First create a fresh directory if you don't have already one to work in

```shell
mkdir tmp-cardano
cd tmp-cardano
```

#### installation

If you don't already have one, install the `cardano-node` binaries from the [official github repository](https://github.com/IntersectMBO/cardano-node/releases/)

once you have the binaries, move or copy them in a directory where the computer can find it.

In linux usually `/usr/bin` should work

```shell
cp path/to/binary/cardano-node /usr/bin/cardano-node
```

if you have installed it correctly running

```shell
cardano-node --version
```

should work without errors.

### running

Once you have the node, inside our directory, we'll create a place for all the configurations files the cardano node needs

```shell
mkdir config_files
cd config_files
```

where we'll fetch the files needed as described in the [`cardano-node` documentation](https://developers.cardano.org/docs/get-started/cardano-node/running-cardano/#testnet--preprod)

```shell
curl -O -J https://book.play.dev.cardano.org/environments/preprod/config.json
curl -O -J https://book.play.dev.cardano.org/environments/preprod/db-sync-config.json
curl -O -J https://book.play.dev.cardano.org/environments/preprod/submit-api-config.json
curl -O -J https://book.play.dev.cardano.org/environments/preprod/topology.json
curl -O -J https://book.play.dev.cardano.org/environments/preprod/byron-genesis.json
curl -O -J https://book.play.dev.cardano.org/environments/preprod/shelley-genesis.json
curl -O -J https://book.play.dev.cardano.org/environments/preprod/alonzo-genesis.json
curl -O -J https://book.play.dev.cardano.org/environments/preprod/conway-genesis.json
```

with this configuration files we can go back

```shell
cd ..
```

and finally we can run the node

```shell
cardano-node run \
   --topology ./config_files/topology.json \
   --database-path ./db \
   --socket-path ./db/node.socket \
   --config ./config_files/config.json \
   --host-addr 0.0.0.0 \
   --port 3000
```

</p>

</details>


### `cardano-node` docs

more info on how to run a node [here](https://developers.cardano.org/docs/get-started/cardano-node/running-cardano/).