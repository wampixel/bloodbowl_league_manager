import { boolean, integer, pgSchema, uuid, varchar } from 'drizzle-orm/pg-core';

export const rulesSchema = pgSchema('rules');

export const roaster = rulesSchema.table('roaster', {
    uid: uuid().defaultRandom().primaryKey(),
    name: varchar(),
    reroll_cost: integer(),
    apothecary: boolean(),
});

export const skill = rulesSchema.table('skill', {
    uid: uuid().defaultRandom().primaryKey(),
    type: varchar({ enum: ['agility', 'strength', 'general', 'mutation', 'passing', 'devious', 'traits'] }),
    name: varchar({ length: 50 }),
    mandatory: boolean(),
});

export const databaseSchema = {
    roaster,
    skill,
};
