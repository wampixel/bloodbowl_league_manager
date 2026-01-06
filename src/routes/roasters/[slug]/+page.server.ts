import { desc, eq } from 'drizzle-orm';

import { db } from '$lib/server/db/index.js';

import { playerTable, roasterTable } from '$lib/server/db/schema/rules.js';

export async function load({ params }) {
    const roaster = params.slug;

    return {
        roaster: await db.query.roasterTable.findFirst({
            where: eq(roasterTable.uid, roaster),
            columns: {
                apothecary: true,
                reroll_cost: true,
            },
        }),
        players: await db.query.playerTable.findMany({
            with: { playerToSkill: true },
            where: eq(playerTable.roaster, roaster),
            orderBy: [desc(playerTable.quantity), playerTable.cost],
            columns: {
                quantity: true,
                name: true,
                keywords: true,
                cost: true,
                move: true,
                strength: true,
                agility: true,
                passing: true,
                armour: true,
            },
        }),
    };
}
