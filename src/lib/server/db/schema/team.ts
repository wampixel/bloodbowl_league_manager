import { integer, pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const team = pgTable('team', {
    id: serial('id').primaryKey(),
    name: varchar(),
    player: varchar(),
    win: integer(),
    loss: integer(),
    year: integer(),
});
