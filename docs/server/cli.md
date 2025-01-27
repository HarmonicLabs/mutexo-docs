---
sidebar_position: 1
title: CLI
---

# CLI

Once you have [installed mutexo-server](./getting-started#installation) you should have the `mutexo-server` comand aviable in you shell.

```shell
mutexo-server
```

by running it you should get something like the following output

```shell
Usage: mutexo-server [options] [command]

Mutexo Web Socket Server CLI

Options:
  -V, --version    output the version number
  -h, --help       display help for command

Commands:
  version          Prints the version of the program
  start [options]  Starts the mutexo server
  help [command]   display help for command
```

## `start` command

as you can see from above, pretty much the only command aviable is `mutexo-server start`.

however you could use the other `help` command to gather some more infos about it:

```shell
mutexo-client help start
```

that should output:

```shell
Usage: mutexo-server start [options]

Starts the mutexo server

Options:
  -c, --config <string>            path to the json configuration file (default: "./mutexo-config.json")
  -n, --network <string>           specify the network to use, either mainnet | preview | preprod; otherwise the network magic number (default: "mainnet")
  -a, --addr <string...>           cardano address to be monitored, can be specified multiple times (default: [])
  -l, --log-level <string>         either "debug" | "info" | "warn" | "error" | "none" (default: "info")
  -t, --threads <string>           percentage or number of threads to use; if percentage, the number will be calculated based on the number of cores; minimum 2 threads (chain-sync and ws-server) (default: "50%")
  -s, --node-socket-path <string>  path to the cardano-node socket
  -hp, --http-port <number>        port of the http server (main thread) (default: "3001")
  -ws, --ws-port <number...>       port(s) of the web socket server(s); if not enough ports are specified, random (aviable) ports will be used
  --ignore-env                     explicitly ignores the .env file (default: false)
  --disable-log-colors             disables colors in the log output (default: false)
  -h, --help                       display help for command
```

Other than the `--config` option, all others can be specified in a [configuration file](./config).

:::info cli options have the precedence

While you can specify all these options in the config file, if you do specify them as options these will overwrite the respective value in the config file.

That is unless the option can have many values (eg. `--addr`), where it will just be prepended to the array of values in the config (if any).

:::

### configuration path resolution

You can use the `--config` option to specify a path where to find the configuration file.

If `--config` is not specified, `mutexo-server` will try to look for a configuration at the path `./mutexo-config.json`.

If no configuration is found, the default values will be used.

In short, the steps to derive the configurations are

1) use path specified using the `--config` option
2) if `--config` is not used, `./mutexo-config.json` will be used
3) if no cofiguration is found, all the default values will be used