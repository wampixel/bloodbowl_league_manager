import rulesRoaster from './query/rules/roaster';
import RulesSkill from './query/rules/skill';

import { TEAMS } from './static/teams';
import { SKILLS } from './static/skills';

export const seed = async () => {
// Init bases
    // Teams
    const allTeams = await rulesRoaster.get();
    const missingTeams = TEAMS.filter(team => !allTeams.some(elt => elt.name === team.name));

    if (missingTeams.length > 0)
        await rulesRoaster.insert(missingTeams);

    // Skills
    const allSkills = await RulesSkill.get();
    const missingSkills = SKILLS.filter(skill => !allSkills.some(e => e.name === skill.name));

    if (missingSkills.length > 0)
        await RulesSkill.insert(missingSkills);
};
