import { boolean, pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

export const skill = pgTable('skill', {
    uid: uuid().defaultRandom().primaryKey(),
    type: varchar({ enum: ['agility', 'strength', 'general', 'mutation', 'passing', 'devious', 'traits'] }),
    name: varchar({ length: 50 }),
    mandatory: boolean(),
});
