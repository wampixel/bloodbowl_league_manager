import type { Handle } from '@sveltejs/kit';

import { verifySession } from '$lib/server/session';

export const handle: Handle = async ({ event, resolve }) => {
    console.log(event.cookies.getAll());
    console.log(event.cookies.get('session'));

    const sessionId = event.cookies.get('session');
    if (sessionId) {
        if (!verifySession(sessionId))
            console.log('delete cookie');

        event.cookies.delete('session', { path: '/' });
        // await del(sessionId);
    }

    return await resolve(event);
};
