import bcrypt from 'bcryptjs';
import { eq } from 'drizzle-orm';
import { fail } from '@sveltejs/kit';

import { get } from '$lib/server/db/query/user';
import { get as getSession, insert } from '$lib/server/db/query/session';

import { user as userSchema } from '$lib/server/db/schema/user';
import { session as sessionSchema } from '$lib/server/db/schema/session';

const MESSAGE = 'Invalid username or password';
const SESSION_DURATION = 1000 * 60 * 60;

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();

        const username: string = data.get('username') as string;
        const match = await get([eq(userSchema.username, username)]);

        if (!username || match.length == 0)
            return fail(401, { message: MESSAGE });

        const user = match[0];

        const session = await getSession([eq(sessionSchema.user, user.uid as string)]);
        if (session.length > 0)
            return { };

        const password: string = data.get('password') as string;
        const check = await bcrypt.compare(password, user.passphrase as string);

        if (!check)
            return fail(401, { message: MESSAGE });

        const uid = crypto.randomUUID();
        await insert({
            uid,
            expire: new Date(Date.now() + SESSION_DURATION),
            user: user.uid,
        });

        cookies.set('sesion', uid, {
            path: '/',
            httpOnly: true,
            sameSite: 'lax',
            secure: true,
            maxAge: 60 * 60,

        });
    },
};
