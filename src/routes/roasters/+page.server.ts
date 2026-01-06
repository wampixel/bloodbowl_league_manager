import { db } from '$lib/server/db';
import { roasterTable } from '$lib/server/db/schema/rules';

export async function load() {
    return {
        roasters: await db.query.roasterTable.findMany({
            orderBy: roasterTable.name,
            columns: {
                uid: true,
                name: true,
            },
        }),
    };
}
