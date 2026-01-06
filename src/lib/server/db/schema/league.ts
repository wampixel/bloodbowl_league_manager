import { boolean, integer, pgSchema, uuid, varchar } from 'drizzle-orm/pg-core';

export const leagueSchema = pgSchema('league');

export const teamTable = leagueSchema.table('team', {
    uid: uuid().defaultRandom().primaryKey(),
    name: varchar(),
    reroll_cost: integer(),
    apothecary: boolean(),
});
