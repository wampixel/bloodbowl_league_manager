import { db } from '$lib/server/db';
import { playerToSkillTable } from '$lib/server/db/schema/rules';

import type { NewPlayerToSkill } from '$lib/server/db/schema/rules';

const insert = async (newPtS: NewPlayerToSkill[]) => db
    .insert(playerToSkillTable)
    .values(newPtS)
    .onConflictDoNothing();

export default {
    insert,
};
