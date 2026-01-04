import { sql } from 'drizzle-orm';

import type { SQL } from 'drizzle-orm';
import type { PgColumn } from 'drizzle-orm/pg-core';

const normalizedMatch = (column: PgColumn, value: string): SQL => sql`
    REGEXP_REPLACE(LOWER(${column}), '\\s*\\([^)]*\\)', '', 'g') 
    =  REGEXP_REPLACE(LOWER(${value}), '\\s*\\([^)]*\\)', '', 'g')
`;

export {
    normalizedMatch,
};
