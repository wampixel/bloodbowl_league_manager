import { and } from 'drizzle-orm';

import { db } from '$lib/server/db';
import { userTable } from '$lib/server/db/schema/public';

import type { SQL } from 'drizzle-orm';

type NewUser = typeof userTable.$inferInsert;

const get = async (filters: SQL[]) => db
    .select()
    .from(userTable)
    .where(filters.length > 0 ? and(...filters) : undefined);

const insert = async (newUser: NewUser) => db.insert(userTable).values(newUser);

export {
    get,
    insert,

    type NewUser,
};
