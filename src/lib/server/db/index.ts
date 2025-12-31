import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { env } from '$env/dynamic/private';

import { TEAMS } from './static/teams';

import { leagueSchema } from './schema/league';
import { rulesSchema } from './schema/rules';

import { get as getTeam, insert as insertTeams } from './query/rules/roaster';
import { get as getSkills, insert as insertSkills } from './query/rules/skill';

import { SKILLS } from './static/skills';

if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

const client = postgres(env.DATABASE_URL);
const config = {
    schema: {
        rulesSchema,
        leagueSchema,
    },
};
export const db = drizzle(client, config);

// Init bases
// Teams
const allTeams = await getTeam();
const missingTeams = TEAMS.filter(team => !allTeams.some(elt => elt.name === team.name));

if (missingTeams.length > 0)
    await insertTeams(missingTeams);

// Skills
const allSkills = await getSkills();
const missingSkills = SKILLS.filter(skill => !allSkills.some(e => e.name === skill.name));

if (missingSkills.length > 0)
    await insertSkills(missingSkills);
