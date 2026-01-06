import { db } from '$lib/server/db';
import { skillTable } from '$lib/server/db/schema/rules';

import type { NewSkillRule } from '$lib/server/db/schema/rules';

const insert = async (newSkills: NewSkillRule[]) => db
    .insert(skillTable)
    .values(newSkills)
    .onConflictDoNothing();

export default {
    insert,
};
