# BLoodbowl League manager

This webapp can be used to manage your bloobbowl league. With this webapp, you can:

- Create your own roster
- manage your team
- create your account

> The rulebook is mandatory, not all informations are provided.

## Database

This project use PostgresDB with drizzle ORM.

Available npm scripts:

- `db:start` start the Postgres and pgAdmin containers (`docker compose up`)
- `db:generate` create a new migration file
- `db:push` apply the schema to the DB
- `db:migrate` run migrations
- `db:seed` populate the `rules` schema (skills, rosters, players)
- `db:studio` open Drizzle Studio

The seed is idempotent and is **not** run automatically; run `npm run db:seed` after the schema exists.

## Run on dev

To run this project on dev, you need docker.

You'll need to create 3 env files:
- `.env` (for webapp)
- `.env.db` (for postgres)
- `.env.pgadmin` (for pgadmin)

with:

`.env`
```sh
DATABASE_URL="postgres://postgres:mybestpassw0rd!@localhost:5432/bb_manager"
````

`.env.db`
```sh
POSTGRES_USER="postgres"
POSTGRES_PASSWORD="mybestpassw0rd!"
POSTGRES_DB="bb_manager"
```

`.env.pgadmin`
```sh
PGADMIN_DEFAULT_EMAIL="admin@localhost.com"
PGADMIN_DEFAULT_PASSWORD="MySecretPGADMINPassw0rd!"
PGADMIN_DISABLE_POSTFIX="true"
```

once files are created, set up the database and run the project:

```sh
npm run db:start   # start Postgres (and pgAdmin) via docker
npm run db:push    # create the tables from the schema
npm run db:seed    # load the rules data (skills, rosters, players)
npm run dev        # start the app
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Roadmap

- First, code
- second: ?
- TESTS
- Last: deploy and enjoy