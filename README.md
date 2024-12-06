## Decisions & Thoughts

Chose SQLite as it has no external dependencies and it simplified the setup, in
production I'd pick PostgreSQL or another client/server DB.

Would use some sort of UUID as the primary key in production but SQLite
automatically generates integer primary keys, and it simplified my work.

Could be deployed to EC2 with Kubernetes/Terraform, with other infrastructure provisioned like RDS

## Todos & Improvements

Add user authentication

Add an OrderStatus table so status could be kept track of in chronological
order. Currently only the latest status is known.

Add an OrderShipping table, so orders could be split into multiple shipments

Properly defined response objects

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
