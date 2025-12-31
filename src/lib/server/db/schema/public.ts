import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
    uid: uuid().defaultRandom().primaryKey(),
    username: varchar({ length: 256 }),
    passphrase: varchar(),
    created_at: timestamp().defaultNow(),
});

export const session = pgTable('session', {
    uid: uuid().defaultRandom().primaryKey(),
    expire: timestamp({ withTimezone: true }).defaultNow().notNull(),
    user: uuid(),
});
