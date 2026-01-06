import { db } from '$lib/server/db';
import { userTable } from '$lib/server/db/schema/public';

import type { NewUser } from '$lib/server/db/schema/public';

const insert = async (newUser: NewUser) => db.insert(userTable).values(newUser);

export {
    insert,

    type NewUser,
};
