import { and } from 'drizzle-orm';

import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema/public';

import type { SQL } from 'drizzle-orm';

type NewUser = typeof user.$inferInsert;

const get = async (filters: SQL[]) => db
    .select()
    .from(user)
    .where(filters.length > 0 ? and(...filters) : undefined);

const insert = async (newUser: NewUser) => db.insert(user).values(newUser);

export {
    get,
    insert,

    type NewUser,
};
