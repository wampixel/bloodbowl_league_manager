import { redirect } from '@sveltejs/kit';

import { del } from '$lib/server/db/query/session';

export const POST = async ({ cookies }) => {
    const sessionId = cookies.get('session');
    if (sessionId) {
        await del(sessionId);
        cookies.delete('session', { path: '/' });
    }

    throw redirect(303, '/login');
};
