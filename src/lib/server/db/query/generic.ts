import { and } from 'drizzle-orm';

import { db } from '..';

import type { SQL } from 'drizzle-orm';
import type { PgTable } from 'drizzle-orm/pg-core';

const get = async (table: PgTable, filters: SQL[]) => db
    .select()
    .from(table)
    .where(filters.length > 0 ? and(...filters) : undefined);

export default {
    get,
};
