import { integer, pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

export const team = pgTable('team', {
    uid: uuid().defaultRandom().primaryKey(),
    name: varchar(),
    player: varchar(),
    win: integer(),
    loss: integer(),
    year: integer(),
});
