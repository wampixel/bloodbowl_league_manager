import { and } from 'drizzle-orm';

import { db } from '$lib/server/db/index';
import { roasterTable } from '$lib/server/db/schema/league';

import type { SQL } from 'drizzle-orm';

const get = async (filters: SQL[]) => db
    .select()
    .from(roasterTable)
    .where(filters.length > 0 ? and(...filters) : undefined);

export {
    get,
};
