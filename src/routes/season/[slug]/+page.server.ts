import { eq } from 'drizzle-orm';

import { get } from '$lib/server/db/query/roaster';
import { roaster } from '$lib/server/db/schema/roaster';

export async function load({ params }) {
    return {
        year: params.slug,
        teams: await get([
            eq(roaster.year, +params.slug),
        ]),
    };
}
