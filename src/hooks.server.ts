import type { Handle } from '@sveltejs/kit';

import { verifySession } from '$lib/server/session';

export const handle: Handle = async ({ event, resolve }) => {
    const sessionId = event.cookies.get('session');
    if (sessionId) {
        const userId = await verifySession(sessionId);
        if (userId)
            event.locals.user = userId;
        else
            event.cookies.delete('session', { path: '/' });
    }

    return await resolve(event);
};
