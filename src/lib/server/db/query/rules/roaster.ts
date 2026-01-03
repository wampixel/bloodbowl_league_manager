import { db } from '$lib/server/db';
import { roasterTable } from '$lib/server/db/schema/rules';

import type { SQL } from 'drizzle-orm';
import generic from '../generic';

export type NewTeam = typeof roasterTable.$inferInsert;

const get = async (filters: SQL[]) => generic.get(roasterTable, filters);
const insert = async (newTeams: NewTeam[]) => db.insert(roasterTable).values(newTeams).onConflictDoNothing();

export default {
    get,
    insert,
};
