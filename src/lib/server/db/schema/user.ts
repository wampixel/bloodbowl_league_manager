import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
    id: serial('id').primaryKey(),
    name: varchar(),
    last_name: varchar(),
});
