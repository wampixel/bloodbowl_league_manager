import { boolean, integer, pgSchema, uuid, varchar } from 'drizzle-orm/pg-core';

export const rulesSchema = pgSchema('rules');

export const roasterTable = rulesSchema.table('roaster', {
    uid: uuid().defaultRandom().primaryKey(),
    name: varchar(),
    reroll_cost: integer(),
    apothecary: boolean(),
});

export const skillTable = rulesSchema.table('skill', {
    uid: uuid().defaultRandom().primaryKey(),
    type: varchar({ enum: ['agility', 'strength', 'general', 'mutation', 'passing', 'devious', 'traits'] }),
    name: varchar({ length: 50 }),
    mandatory: boolean(),
});
