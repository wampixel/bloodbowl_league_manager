import { sql } from 'drizzle-orm';
import { boolean, check, integer, pgSchema, smallint, uuid, varchar } from 'drizzle-orm/pg-core';

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

export const playerTable = rulesSchema.table(
    'player',
    {
        uid: uuid().defaultRandom().primaryKey(),
        name: varchar({ length: 25 }),
        roaster: uuid().references(() => roasterTable.uid),
        keywords: varchar({ length: 256 }),
        cost: integer(),
        move: smallint(),
        strength: smallint(),
        agility: smallint(),
        passing: smallint(),
        armour: smallint(),
        primary: varchar({ length: 60 }),
        secondary: varchar({ length: 60 }),
    },
    table => [
        check('min_move', sql`${table.move} >= 1`),
        check('max_move', sql`${table.move} <= 9`),
        check('min_strength', sql`${table.move} >= 1`),
        check('max_strength', sql`${table.move} <= 8`),
        check('min_agility', sql`${table.move} >= 1`),
        check('max_agility', sql`${table.move} <= 6`),
        check('min_passing', sql`${table.move} >= 1`),
        check('max_passing', sql`${table.move} <= 6`),
        check('min_armour', sql`${table.move} >= 3`),
        check('max_armour', sql`${table.move} <= 11`),
    ],
);

// Types export
export type RoasterRule = typeof roasterTable.$inferInsert;
export type SkillRule = typeof skillTable.$inferInsert;
export type PlayerRule = typeof playerTable.$inferInsert;
