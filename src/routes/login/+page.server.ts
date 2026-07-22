import bcrypt from 'bcryptjs';
import { eq } from 'drizzle-orm';
import { fail } from '@sveltejs/kit';
import { dev } from '$app/environment';

import { db } from '$lib/server/db';
import { userTable } from '$lib/server/db/schema/public';
import { createSession, SESSION_DURATION } from '$lib/server/session.js';

const ERROR = 'Invalid username or password';

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();

        const username = data.get('username') as string;
        const password = data.get('password') as string;

        if (!username || !password)
            return fail(401, { message: ERROR });

        const user = await db.query.userTable.findFirst({
            where: eq(userTable.username, username),
        });

        if (!user || !user.passphrase)
            return fail(401, { message: ERROR });

        const check = await bcrypt.compare(password, user.passphrase);
        if (!check)
            return fail(401, { message: ERROR });

        const uid = await createSession(user.uid);

        cookies.set('session', uid, {
            path: '/',
            httpOnly: true,
            sameSite: 'lax',
            secure: !dev,
            maxAge: SESSION_DURATION / 1000,
        });

        return { message: 'Successfully logged in' };
    },
};
