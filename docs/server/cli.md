---
sidebar_position: 1
---

# CLI

Once you start `mutexo-server` by running

```
npm run start
```

a CLI appear allowing you to possibly enter two different modes:

## Main Mode

This mode is designed to access a (local or remote) [Redis host](https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/) and handles all the requests a [`mutexo-client`](https://github.com/HarmonicLabs/mutexo-client) could ask, such as freeing and locking addresses or utxos.

Once you run

```
npm run cli-main-help
```

the following CLI will be displayed:

```
Usage: mutexo-server main [options] [path]

It starts the WSS

Arguments:
  path                       path to the .env file containing all the redis access credentials

Options:
  -ru, --redis-url <string>  redis url to access the database as described at https://github.com/redis/node-redis/blob/master/docs/client-configuration.md (default: "redis://localhost:6379")
  -h, --help                 display help for command
```

For reference, you could run something like:

```
npm run start mutexo-server main ../folder/.env -ru redis://username:superSecretPassword1234@192.168.1.1:3000/3
```

:::warning `.env` file and `REDIS_URL`

Note that, for this mode to work, at least one between `path` and `--redis-url` must be provided: if neither are given `mutexo-server` won't be able to access Redis.

:::

## Test Mode

This mode is specially designed to return a `test-txs/test-txs.json` file containing a certain amount of transactions that involve or has been triggered by the same addresses specified in the environment variables (see [here](getting-started.md#local-development) to properly set the `.env` file).

Once you run

```
npm run cli-test-help
```

the following CLI will be displayed:

```
Usage: mutexo-server test [options] [path]

It starts the WSS in test mode

Arguments:
  path                       path to the .env file containing test addresses and redis access credentials (default: "./.env")

Options:
  -a, --amount <int>         number of test addresses txs to be saved (default: "2")
  -ru, --redis-url <string>  redis url to access the database as described at https://github.com/redis/node-redis/blob/master/docs/client-configuration.md (default: "redis://localhost:6379")
```

For reference, you could run something like:

```
npm run start mutexo-server test ../folder/.env -a 10 -ru redis://username:superSecretPassword1234@192.168.1.1:3000/3
```

### Default Running

`mutexo-server` test mode can be entered using default values by running:

```
npm run cli-test-default
```