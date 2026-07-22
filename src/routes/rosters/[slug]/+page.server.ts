import { desc, eq } from 'drizzle-orm';

import { db } from '$lib/server/db/index.js';

import { playerTable, rosterTable } from '$lib/server/db/schema/rules.js';

export async function load({ params }) {
    const roster = params.slug;

    return {
        roster: await db.query.rosterTable.findFirst({
            where: eq(rosterTable.uid, roster),
            columns: {
                apothecary: true,
                reroll_cost: true,
            },
        }),
        players: await db.query.playerTable.findMany({
            with: { playerToSkill: true },
            where: eq(playerTable.roster, roster),
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
