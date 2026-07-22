import { randomUUID } from 'crypto';
import { eq } from 'drizzle-orm';

import { insert, del } from './db/query/session';
import { sessionTable } from './db/schema/public';
import { db } from './db';

export const SESSION_DURATION = 1000 * 60 * 60;

const createSession = async (user: string) => {
    const uid = randomUUID();
    await insert({
        uid,
        expire: new Date(Date.now() + SESSION_DURATION),
        user,
    });

    return uid;
};

const verifySession = async (uid: string): Promise<string | null> => {
    const session = await db.query.sessionTable.findFirst({ where: eq(sessionTable.uid, uid) });
    if (session == undefined)
        return null;

    if (session.expire < new Date()) {
        await del(uid);
        return null;
    }

    return session.user ?? null;
};

export {
    createSession,
    verifySession,
};
