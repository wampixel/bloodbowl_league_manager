import { and, eq } from 'drizzle-orm';

import { db } from '$lib/server/db';
import { session } from '$lib/server/db/schema/public';

import type { SQL } from 'drizzle-orm';

type NewSession = typeof session.$inferInsert;

const get = async (filters: SQL[]) => db
    .select()
    .from(session)
    .where(filters.length > 0 ? and(...filters) : undefined);

const insert = async (newSession: NewSession) => db.insert(session).values(newSession);

const del = async (uid: string) => db.delete(session).where(eq(session.uid, uid));

export {
    get,
    insert,
    del,
};
