import { db } from '$lib/server/db/index.js';
import { rosterTable } from '$lib/server/db/schema/rules';

export async function load({ depends }) {
    depends('app:team');

    return {
        available_rosters: await db.query.rosterTable.findMany({
            orderBy: rosterTable.name,
            columns: {
                uid: true,
                name: true,
            },
        }),
    };
}

// export const actions = {
//     default: async ({ request, cookies }) => {

//     },
// };
