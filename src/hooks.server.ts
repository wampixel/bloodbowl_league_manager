import type { Handle } from '@sveltejs/kit';

import { verifySession } from '$lib/server/session';

export const handle: Handle = async ({ event, resolve }) => {
    const sessionId = event.cookies.get('session');
    if (sessionId) {
        if (!verifySession(sessionId))
            event.cookies.delete('session', { path: '/' });
    }

    return await resolve(event);
};
