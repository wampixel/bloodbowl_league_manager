import { db } from '..';
import { team } from '../schema/team';

export type NewTeam = typeof team.$inferInsert;

const get = async () => db.select().from(team);
const insert = async (newTeams: NewTeam[]) => db.insert(team).values(newTeams).onConflictDoNothing();

export {
    get,
    insert,
};
