import { ilike } from 'drizzle-orm';
import { db } from '../..';
import { playerToSkill } from '../../schema/rules';

const get = async (uid: string) => db
    .select()
    .from(playerToSkill)
    .where(ilike(playerToSkill.player, uid));

export {
    get,
};
