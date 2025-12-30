import { boolean, integer, pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

export const team = pgTable('team', {
    uid: uuid().defaultRandom().primaryKey(),
    name: varchar(),
    reroll_cost: integer(),
    Apothecary: boolean(),
});
