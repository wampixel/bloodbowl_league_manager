import { db } from '..';
import { skill } from '../schema/skill';

type NewSkill = typeof skill.$inferInsert;

const get = async () => db.select().from(skill);
const insert = async (newSkills: NewSkill[]) => db.insert(skill).values(newSkills).onConflictDoNothing();

export {
    get,
    insert,
};
