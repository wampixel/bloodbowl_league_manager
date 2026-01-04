import { db } from '$lib/server/db';
import generic from '$lib/server/db/query/generic';
import { playerTable } from '$lib/server/db/schema/rules';

import type { SQL } from 'drizzle-orm';

export type NewPlayer = typeof playerTable.$inferInsert;

const get = async (filters: SQL[]) => generic.get(playerTable, filters);

const insert = async (newPlayers: NewPlayer) => db
    .insert(playerTable)
    .values(newPlayers)
    .onConflictDoNothing()
    .returning();

export default {
    get,
    insert,
};
