import bcrypt from 'bcryptjs';
import { eq } from 'drizzle-orm';
import { fail } from '@sveltejs/kit';

import { db } from '$lib/server/db';
import { insert } from '$lib/server/db/query/user';
import { userTable } from '$lib/server/db/schema/public.js';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        const username: string = data.get('username') as string;

        const match = await db.query.userTable.findFirst({
            where: eq(userTable.username, username),
        });
        if (!username || username.length > 256 || match) {
            return fail(400,
                { message: 'Invalid username (max. 256 chars)' });
        }

        const password: string = data.get('password') as string;
        if ((password as string).length < 6) {
            return fail(400, { message: 'Invalid password (min. 6 chars)' });
        }

        const salt = await bcrypt.genSalt(10);
        const passphrase = bcrypt.hashSync(password, salt);

        await insert({
            uid: crypto.randomUUID(),
            username: username,
            passphrase,
        });

        // Set session and token here

        return { message: 'Account successfully created ' };
    },
};
