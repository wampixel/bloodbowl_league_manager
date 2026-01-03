import { roasterTable } from '$lib/server/db/schema/league';

import type { SQL } from 'drizzle-orm';
import generic from '../generic';

const get = async (filters: SQL[]) => generic.get(roasterTable, filters);

export {
    get,
};
