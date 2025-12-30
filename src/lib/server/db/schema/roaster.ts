import { integer, pgTable, uuid, varchar } from 'drizzle-orm/pg-core';
import { team } from './team';
import { user } from './user';

export const roaster = pgTable('roaster', {
    uid: uuid().defaultRandom().primaryKey(),
    name: varchar(),
    win: integer(),
    loss: integer(),
    year: integer(),
    coach: uuid().references(() => user.uid),
    roaster: uuid().references(() => team.uid),
});
