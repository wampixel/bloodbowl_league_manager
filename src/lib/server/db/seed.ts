import { and, eq } from 'drizzle-orm';

import { db } from '.';

import { playerTable, roasterTable, skillTable } from './schema/rules';

import { normalizedMatch } from './query/filters';
import rulesRoaster from './query/rules/roaster';
import rulesSkill from './query/rules/skill';
import rulesPlayer from './query/rules/player';
import rulesPlayerToSkill from './query/rules/playerToSkill';

import type { NewPlayerToSkill } from './schema/rules';

import { TEAM_RULES } from './static/rules';
import { SKILLS } from './static/skills';

// import type { NewPlayerToSkill } from './query/rules/playerToSkill';

export const seed = async () => {
    // Skills
    const allSkills = await db.query.skillTable.findMany({});
    const missingSkills = SKILLS.filter(skill => !allSkills.some(e => e.name === skill.name));

    if (missingSkills.length > 0)
        await rulesSkill.insert(missingSkills);

    // Teams and players
    Object.entries(TEAM_RULES).forEach(async ([name, teamObject]) => {
        const { players, ...team } = teamObject;

        let teamEntry = await db.query.roasterTable.findMany({ where: eq(roasterTable.name, name) });
        if (teamEntry.length !== 1)
            teamEntry = await rulesRoaster.insert([{
                uid: crypto.randomUUID(),
                name,
                ...team,
            }]);

        for (const item of players) {
            const { skills, ...player } = item;
            const filters = [
                normalizedMatch(playerTable.name, player.name as string),
                eq(playerTable.roaster, teamEntry[0].uid as string),
            ];

            if ((await db.query.playerTable.findMany({ where: and(...filters) })).length > 0)
                continue;

            const newPlayer = await rulesPlayer.insert({
                uid: crypto.randomUUID(),
                roaster: teamEntry[0].uid as string,
                ...player,
            });
            if (newPlayer.length !== 1)
                console.error(`Error while adding ${item}`);

            const playerToSkills = skills.reduce(async (buffer: NewPlayerToSkill[], skill: string) => {
                const found = await db.query.skillTable.findFirst({ where: normalizedMatch(skillTable.name, skill) });
                if (found) {
                    return [
                        ...buffer,
                        {
                            player: newPlayer[0].uid,
                            skill: found.uid,
                            display: skill,
                        } as NewPlayerToSkill,
                    ];
                }
            }, []);

            if (playerToSkills.length > 0)
                await rulesPlayerToSkill.insert(await Promise.all(playerToSkills));
        }
    });
};
