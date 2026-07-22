import { and, eq } from 'drizzle-orm';

import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js';

import * as schema from './schema/public';
import { playerTable, playerToSkillTable, rosterTable, skillTable } from './schema/rules';

import { normalizedMatch } from './query/filters';

import type { NewPlayerToSkill } from './schema/rules';

import { ROSTERS_RULES } from './static/rules';
import { SKILLS } from './static/skills';

type Database = PostgresJsDatabase<typeof schema>;

export const seed = async (db: Database) => {
    const allSkills = await db.query.skillTable.findMany({});
    const missingSkills = SKILLS.filter(skill => !allSkills.some(e => e.name === skill.name));

    if (missingSkills.length > 0)
        await db.insert(skillTable).values(missingSkills).onConflictDoNothing();

    for (const [name, team] of Object.entries(ROSTERS_RULES)) {
        const { players, ...rosterData } = team;

        let roster = await db.query.rosterTable.findFirst({ where: eq(rosterTable.name, name) });
        if (!roster) {
            const inserted = await db
                .insert(rosterTable)
                .values([{ uid: crypto.randomUUID(), name, ...rosterData }])
                .onConflictDoNothing()
                .returning();
            roster = inserted[0];
        }
        if (!roster)
            continue;

        for (const item of players) {
            const { skills, ...player } = item;
            const filters = [
                normalizedMatch(playerTable.name, player.name as string),
                eq(playerTable.roster, roster.uid),
            ];

            if (await db.query.playerTable.findFirst({ where: and(...filters) }))
                continue;

            const newPlayer = await db
                .insert(playerTable)
                .values({ uid: crypto.randomUUID(), roster: roster.uid, ...player })
                .onConflictDoNothing()
                .returning();
            if (newPlayer.length !== 1) {
                console.error(`Error while adding player ${player.name}`);
                continue;
            }

            const playerToSkills: NewPlayerToSkill[] = [];
            for (const skill of skills) {
                const found = await db.query.skillTable.findFirst({
                    where: normalizedMatch(skillTable.name, skill),
                });
                if (found)
                    playerToSkills.push({
                        player: newPlayer[0].uid,
                        skill: found.uid,
                        display: skill,
                    });
            }

            if (playerToSkills.length > 0)
                await db.insert(playerToSkillTable).values(playerToSkills).onConflictDoNothing();
        }
    }
};