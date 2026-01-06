import { db } from '$lib/server/db';
import { playerTable } from '$lib/server/db/schema/rules';

import type { NewPlayerRule } from '$lib/server/db/schema/rules';

const insert = async (newPlayers: NewPlayerRule) => db
    .insert(playerTable)
    .values(newPlayers)
    .onConflictDoNothing()
    .returning();

export default {
    insert,
};
