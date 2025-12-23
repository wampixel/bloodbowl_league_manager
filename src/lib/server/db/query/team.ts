import { and } from 'drizzle-orm';

import type { SQL } from 'drizzle-orm';

import { db } from '$lib/server/db/index';
import { team } from '$lib/server/db/schema/team';

const get = async (filters: SQL[]) => await db
    .select()
    .from(team)
    .where(filters.length > 0 ? and(...filters) : undefined);

export {
    get,
};
