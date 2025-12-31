import { and, eq } from 'drizzle-orm';

import { db } from '$lib/server/db';
import { sessionTable } from '$lib/server/db/schema/public';

import type { SQL } from 'drizzle-orm';

type NewSession = typeof sessionTable.$inferInsert;

const get = async (filters: SQL[]) => db
    .select()
    .from(sessionTable)
    .where(filters.length > 0 ? and(...filters) : undefined);

const insert = async (newSession: NewSession) => db.insert(sessionTable).values(newSession);

const del = async (uid: string) => db.delete(sessionTable).where(eq(sessionTable.uid, uid));

export {
    get,
    insert,
    del,
};
