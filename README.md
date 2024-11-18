# mutexo-server-docs

Documentation for the [`mutexo-server`](https://github.com/HarmonicLabs/mutexo-server) library

### Installing
```
npm install
```

### Local Development

IMPORTANT

Before running the application make sure:

* you have a working Cardano node running on the background (more info to run a node [here](https://developers.cardano.org/docs/get-started/cardano-node/running-cardano/))

* you have a `.env` file in the root of the project specifying the following environment variables

```
FIRST_ADDRESS=""
SECOND_ADDRESS=""
```

`FIRST_ADDRESS` and `SECOND_ADDRESS` are test addresses to be followed once the server enters the test mode

Then you can run:

```
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.