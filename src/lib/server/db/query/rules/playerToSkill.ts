import { eq } from 'drizzle-orm';
import { db } from '$lib/server/db';
import { playerToSkillTable } from '$lib/server/db/schema/rules';
import generic from '../generic';

export type NewPlayerToSkill = typeof playerToSkillTable.$inferInsert;

const get = async (uid: string) => generic.get(playerToSkillTable, [eq(playerToSkillTable.player, uid)]);

const insert = async (newPtS: NewPlayerToSkill[]) => db
    .insert(playerToSkillTable)
    .values(newPtS)
    .onConflictDoNothing();

export default {
    get,
    insert,
};
