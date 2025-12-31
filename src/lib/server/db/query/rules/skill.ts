import { db } from '$lib/server/db';
import { skill } from '$lib/server/db/schema/rules';

type NewSkill = typeof skill.$inferInsert;

const get = async () => db.select().from(skill);
const insert = async (newSkills: NewSkill[]) => db.insert(skill).values(newSkills).onConflictDoNothing();

export {
    get,
    insert,
};
