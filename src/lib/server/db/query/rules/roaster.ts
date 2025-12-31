import { db } from '$lib/server/db';
import { roasterTable } from '$lib/server/db/schema/rules';

export type NewTeam = typeof roasterTable.$inferInsert;

const get = async () => db.select().from(roasterTable);
const insert = async (newTeams: NewTeam[]) => db.insert(roasterTable).values(newTeams).onConflictDoNothing();

export {
    get,
    insert,
};
