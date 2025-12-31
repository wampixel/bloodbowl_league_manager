import { db } from '$lib/server/db';
import { skillTable } from '$lib/server/db/schema/rules';

type NewSkill = typeof skillTable.$inferInsert;

const get = async () => db.select().from(skillTable);
const insert = async (newSkills: NewSkill[]) => db.insert(skillTable).values(newSkills).onConflictDoNothing();

export {
    get,
    insert,
};
