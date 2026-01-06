import { eq } from 'drizzle-orm';

import { db } from '$lib/server/db';
import { sessionTable } from '$lib/server/db/schema/public';

import type { NewSession } from '$lib/server/db/schema/public';

const insert = async (newSession: NewSession) => db.insert(sessionTable).values(newSession);

const del = async (uid: string) => db.delete(sessionTable).where(eq(sessionTable.uid, uid));

export {
    insert,
    del,
};
