import { eq } from 'drizzle-orm';

import { get } from '$lib/server/db/query/team';
import { team } from '$lib/server/db/schema/team';

export async function load({ params }) {
    return {
        year: params.slug,
        teams: await get([
            eq(team.year, +params.slug),
        ]),
    };
}
