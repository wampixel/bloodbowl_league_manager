import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { env } from '$env/dynamic/private';

import { leagueSchema } from './schema/league';
import { rulesSchema } from './schema/rules';
import { seed } from './seed';

if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

const client = postgres(env.DATABASE_URL);
const config = {
    schema: {
        rulesSchema,
        leagueSchema,
    },
};

export const db = drizzle(client, config);

await seed();
