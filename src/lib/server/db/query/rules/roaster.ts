import { db } from '$lib/server/db';
import { roasterTable } from '$lib/server/db/schema/rules';

import type { NewRoasterRule } from '$lib/server/db/schema/rules';

const insert = async (newRoasters: NewRoasterRule[]) => db
    .insert(roasterTable)
    .values(newRoasters)
    .onConflictDoNothing()
    .returning();

export default {
    insert,
};
