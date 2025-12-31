# BLoodbowl League manager

This webapp can be used to manage your bloobbowl league. With this webapp, you can:

- Create your own roaster
- manage your team
- create your account

> The rulebook is mandatory, not all informations are provided.

## Database

This project use PostgresDB with drizzle ORM.

With drizzle you can run some npm scripts:

- `db:generate`to create new migration file
- `db:push`to apply modifications on DB
- `db:migrate` initialize DB

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

once files are created, you can run docker with the command `docker compose up`

And then run the project with the command `npm run dev`

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
- Last: deploy and enjoy