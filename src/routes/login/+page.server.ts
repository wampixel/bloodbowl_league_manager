import bcrypt from 'bcryptjs';
import { eq } from 'drizzle-orm';
import { fail } from '@sveltejs/kit';

import { get as getUser } from '$lib/server/db/query/user';
import { get as getSession } from '$lib/server/db/query/session';

import { user as userSchema } from '$lib/server/db/schema/user';
import { session as sessionSchema } from '$lib/server/db/schema/session';
import { createSession } from '$lib/server/session.js';

const ERROR = 'Invalid username or password';

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();

        const username: string = data.get('username') as string;
        const match = await getUser([eq(userSchema.username, username)]);

        if (!username || match.length == 0)
            return fail(401, { message: ERROR });

        const user = match[0];

        const session = await getSession([eq(sessionSchema.user, user.uid as string)]);
        let uid;
        if (session.length === 0) {
            const password: string = data.get('password') as string;
            const check = await bcrypt.compare(password, user.passphrase as string);

            if (!check)
                return fail(401, { message: ERROR });

            uid = await createSession(user.uid);
        }
        else {
            uid = session[0].uid;
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
