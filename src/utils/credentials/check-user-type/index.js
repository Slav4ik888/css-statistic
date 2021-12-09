import getUserType from '../get-user-type/index.js';
import { RoleType } from '../../../types/types.js';


export const isSuper = (user) => getUserType(user) === RoleType.SUPER;
export const isAdmin = (user) => getUserType(user) === RoleType.ADMIN;