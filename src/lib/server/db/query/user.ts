import { db } from '$lib/server/db';
import generic from '$lib/server/db/query/generic';
import { userTable } from '$lib/server/db/schema/public';

import type { SQL } from 'drizzle-orm';

type NewUser = typeof userTable.$inferInsert;

const get = async (filters: SQL[]) => generic.get(userTable, filters);

const insert = async (newUser: NewUser) => db.insert(userTable).values(newUser);

export {
    get,
    insert,

    type NewUser,
};
