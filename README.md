# Dummy Accounting API

This dummy API is for testing the Slurm banking plugin. It provides deterministic outputs based on inputs. For example, the initial allocation and usage for an account is based on the account name.

## Spec
The API spec is documented using the [OpenAPI Specification](https://www.openapis.org/) in [spec/openapi.json](/tree/master/spec/openapi.json). HTML documentation can be built with `yarn spec` (after installing dependencies).

## Usage

### Requirements
- [node](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/en/)

### Setup
```bash
yarn # Install node dependencies, such as express server, etc.
```

### Running
```bash
yarn start
```

API server runs on port 8080 by default. You can interact with it like:

```bash
$ curl 'localhost:8080/api/accounts?username=nicolaschan'
[{"name":"night","usage":34,"allocation":189},{"name":"dew","usage":86,"allocation":192}]
```

