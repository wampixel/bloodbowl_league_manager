import { sql } from 'drizzle-orm';
import { boolean, check, integer, pgSchema, primaryKey, smallint, uuid, varchar } from 'drizzle-orm/pg-core';

export const rulesSchema = pgSchema('rules');

export const roasterTable = rulesSchema.table(
    'roaster',
    {
        uid: uuid().defaultRandom().primaryKey(),
        name: varchar(),
        reroll_cost: integer(),
        apothecary: boolean(),
    },
);

export const skillTable = rulesSchema.table(
    'skill',
    {
        uid: uuid().defaultRandom().primaryKey(),
        type: varchar({ enum: ['agility', 'strength', 'general', 'mutation', 'passing', 'devious', 'traits'] }),
        name: varchar({ length: 50 }),
        mandatory: boolean(),
    },
);

export const playerTable = rulesSchema.table(
    'player',
    {
        uid: uuid().defaultRandom().primaryKey(),
        name: varchar({ length: 30 }),
        roaster: uuid().references(() => roasterTable.uid),
        keywords: varchar({ length: 256 }),
        quantity: integer(),
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
        check('max_quantity', sql`${table.quantity} <= 16`),
        check('min_move', sql`${table.move} >= 1`),
        check('max_move', sql`${table.move} <= 9`),
        check('min_strength', sql`${table.strength} >= 1`),
        check('max_strength', sql`${table.strength} <= 8`),
        check('min_agility', sql`${table.agility} >= 1`),
        check('max_agility', sql`${table.agility} <= 6`),
        check('min_passing', sql`${table.passing} >= 0`),
        check('max_passing', sql`${table.passing} <= 6`),
        check('min_armour', sql`${table.armour} >= 3`),
        check('max_armour', sql`${table.armour} <= 11`),
    ],
);

export const playerToSkillTable = rulesSchema.table(
    'playerToSkill',
    {
        player: uuid().notNull().references(() => playerTable.uid),
        skill: uuid().notNull().references(() => skillTable.uid),
        display: varchar({ length: 30 }),
    },
    table => ([
        primaryKey({ columns: [table.player, table.skill] }),
    ]),
);

// Types export
export type RoasterRule = typeof roasterTable.$inferInsert;
export type SkillRule = typeof skillTable.$inferInsert;
export type PlayerRule = typeof playerTable.$inferInsert;
