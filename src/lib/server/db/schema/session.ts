import { pgTable, uuid, timestamp } from 'drizzle-orm/pg-core';

export const session = pgTable('session', {
    uid: uuid().defaultRandom().primaryKey(),
    expire: timestamp({ withTimezone: true }).defaultNow().notNull(),
    user: uuid(),
});
