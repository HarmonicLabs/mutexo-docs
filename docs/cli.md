---
sidebar_position: 3
---

# CLI

Once you start `mutexo-server` running

```
npm run start
```

a CLI will be displayed allowing you to enter two different modes:

## Main Mode

## Test Mode

This mode is specially designed to return a `test-txs/test-txs.json` file containing a certain amount of transactions that involve or has been triggered by the same addresses specified into the enviroment variables (see [here](getting-started.md#local-development) to properly set the `.env` file).

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
npm run start mutexo-server test ./.env -a 10 -ru redis://username:superSecretPassword1234@192.168.1.1:3000/3
```

### Default Running

`mutexo-server` test mode can be entered using default values by running:

```
npm run cli-test-default
```