import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { env } from '$env/dynamic/private';

import { user } from '$lib/server/db/schema/user';
import { team } from './schema/team';

if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

const client = postgres(env.DATABASE_URL);
const config = {
    schema: {
        ...user,
        ...team,
    },
};
export const db = drizzle(client, config);
