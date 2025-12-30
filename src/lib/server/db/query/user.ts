import { and } from 'drizzle-orm';

import { db } from '..';
import { user } from '../schema/user';

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
