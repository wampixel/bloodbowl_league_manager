import { and } from 'drizzle-orm';

import { session } from '../schema/session';
import { db } from '..';

import type { SQL } from 'drizzle-orm';

type NewSession = typeof session.$inferInsert;

const get = async (filters: SQL[]) => db
    .select()
    .from(session)
    .where(filters.length > 0 ? and(...filters) : undefined);

const insert = async (newSession: NewSession) => db.insert(session).values(newSession);

export {
    get,
    insert,
};
