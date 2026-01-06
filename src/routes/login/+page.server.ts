import bcrypt from 'bcryptjs';
import { eq } from 'drizzle-orm';
import { fail } from '@sveltejs/kit';
import { db } from '$lib/server/db';
// import { get as getUser } from '$lib/server/db/query/user';
// import { get as getSession } from '$lib/server/db/query/session';

import { userTable, sessionTable } from '$lib/server/db/schema/public';
import { createSession } from '$lib/server/session.js';

const ERROR = 'Invalid username or password';

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();

        const username: string = data.get('username') as string;
        const user = await db.query.userTable.findFirst({
            where: eq(userTable.username, username),
        });

        if (!username || !user)
            return fail(401, { message: ERROR });

        const session = await db.query.sessionTable.findFirst({
            where: eq(sessionTable.user, user.uid as string),
        });

        let uid;
        if (!session) {
            const password: string = data.get('password') as string;
            const check = await bcrypt.compare(password, user.passphrase as string);

            if (!check)
                return fail(401, { message: ERROR });

            uid = await createSession(user.uid);
        }
        else {
            uid = session.uid;
        }

        cookies.set('session', uid, {
            path: '/',
            httpOnly: true,
            sameSite: 'lax',
            secure: true,
            maxAge: 60 * 60,

        });

        return { message: 'Successfully logged in' };
    },
};
