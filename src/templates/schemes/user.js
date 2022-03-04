import { getPersonTemp, getRoleUserTemp, getFixDateTemp } from '../db-schema/index.js';

export const userScheme = {
  id         : ``,

  active     : true,
  email      : ``,
  person     : getPersonTemp(),
  role       : getRoleUserTemp(),
  createdAt  : getFixDateTemp(),
  lastChange : getFixDateTemp(),
};
