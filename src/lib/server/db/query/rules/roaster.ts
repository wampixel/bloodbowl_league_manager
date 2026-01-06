import { db } from '$lib/server/db';
import { roasterTable } from '$lib/server/db/schema/rules';

import type { NewRoasterRule } from '$lib/server/db/schema/rules';

const insert = async (newTeams: NewRoasterRule[]) => db
    .insert(roasterTable)
    .values(newTeams)
    .onConflictDoNothing()
    .returning();

export default {
    insert,
};
