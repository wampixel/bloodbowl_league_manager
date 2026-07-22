import { db } from '$lib/server/db';
import { rosterTable } from '$lib/server/db/schema/rules';

export async function load() {
    return {
        rosters: await db.query.rosterTable.findMany({
            orderBy: rosterTable.name,
            columns: {
                uid: true,
                name: true,
            },
        }),
    };
}
