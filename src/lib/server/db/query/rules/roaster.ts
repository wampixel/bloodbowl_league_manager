import { db } from '$lib/server/db';
import { roaster } from '$lib/server/db/schema/rules';

export type NewTeam = typeof roaster.$inferInsert;

const get = async () => db.select().from(roaster);
const insert = async (newTeams: NewTeam[]) => db.insert(roaster).values(newTeams).onConflictDoNothing();

export {
    get,
    insert,
};
