import { and, eq } from 'drizzle-orm';

import { db } from '.';

import { playerTable, roasterTable, skillTable } from './schema/rules';

import { normalizedMatch } from './query/filters';
import rulesRoaster from './query/rules/roaster';
import rulesSkill from './query/rules/skill';
import rulesPlayer from './query/rules/player';
import rulesPlayerToSkill from './query/rules/playerToSkill';

import type { NewPlayerToSkill } from './schema/rules';

import { ROASTERS_RULES } from './static/rules';
import { SKILLS } from './static/skills';

// import type { NewPlayerToSkill } from './query/rules/playerToSkill';

export const seed = async () => {
    // Skills
    const allSkills = await db.query.skillTable.findMany({});
    const missingSkills = SKILLS.filter(skill => !allSkills.some(e => e.name === skill.name));

    if (missingSkills.length > 0)
        await rulesSkill.insert(missingSkills);

    // Roasters and players
    Object.entries(ROASTERS_RULES).forEach(async ([name, team]) => {
        const { players, ...roasterData } = team;

        let roaster = await db.query.roasterTable.findFirst({ where: eq(roasterTable.name, name) });
        if (!roaster)
            roaster = (await rulesRoaster.insert([{
                uid: crypto.randomUUID(),
                name,
                ...roasterData,
            }]))[0];

        for (const item of players) {
            const { skills, ...player } = item;
            const filters = [
                normalizedMatch(playerTable.name, player.name as string),
                eq(playerTable.roaster, roaster.uid as string),
            ];

            if (await db.query.playerTable.findFirst({ where: and(...filters) }))
                continue;

            const newPlayer = await rulesPlayer.insert({
                uid: crypto.randomUUID(),
                roaster: roaster.uid as string,
                ...player,
            });
            if (newPlayer.length !== 1)
                console.error(`Error while adding ${item}`);

            let playerToSkills: NewPlayerToSkill[] = [];
            for (const skill of skills) {
                const found = await db.query.skillTable.findFirst({
                    where: normalizedMatch(skillTable.name, skill),
                });
                if (found)
                    playerToSkills = [
                        ...playerToSkills,
                        {
                            player: newPlayer[0].uid,
                            skill: found.uid,
                            display: skill,
                        },
                    ];
            }

            if (playerToSkills.length > 0)
                await rulesPlayerToSkill.insert(await Promise.all(playerToSkills));
        }
    });
};
