import { RoleType, RoleUser } from '../../../types';

export const getRoleUserTemp = (): RoleUser => ({
  type   : RoleType.USER,
  roleId : ``
});
