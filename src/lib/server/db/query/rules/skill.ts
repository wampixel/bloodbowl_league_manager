import type { SQL } from 'drizzle-orm';

import { db } from '$lib/server/db';
import { skillTable } from '$lib/server/db/schema/rules';
import generic from '$lib/server/db/query/generic';

type NewSkill = typeof skillTable.$inferInsert;

const get = async (filters: SQL[]) => generic.get(skillTable, filters);

const insert = async (newSkills: NewSkill[]) => db
    .insert(skillTable)
    .values(newSkills)
    .onConflictDoNothing();

export default {
    get,
    insert,
};
