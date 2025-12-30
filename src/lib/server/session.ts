import { randomUUID } from 'crypto';
import { eq } from 'drizzle-orm';

import { get, insert, del } from './db/query/session';
import { session as sessionSchema } from './db/schema/session';

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
    const result = await get([eq(sessionSchema.uid, uid)]);

    if (result.length < 0)
        return false;

    const session = result[0];
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
