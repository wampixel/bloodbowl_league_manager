import { randomUUID } from 'crypto';
import { eq } from 'drizzle-orm';

import { insert, del } from './db/query/session';
import { sessionTable } from './db/schema/public';
import { db } from './db';

const SESSION_DURATION = 1000 * 60 * 60;

const createSession = async (user: string) => {
    const uid = randomUUID();
    await insert({
        uid,
        expire: new Date(Date.now() + SESSION_DURATION),
        user,
    });

    return uid;
};

const verifySession = async (uid: string) => {
    const session = await db.query.sessionTable.findFirst({ where: eq(sessionTable.uid, uid) });
    if (session == undefined)
        return false;

    if (session.expire < new Date(Date.now())) {
        await del(uid);
        return false;
    }

    return true;
};

export {
    createSession,
    verifySession,
};
