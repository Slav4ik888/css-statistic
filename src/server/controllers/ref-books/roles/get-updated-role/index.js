import { getFixDateTemp } from '../../../../../templates/db-schema/index.js';

export const getUpdatedRole = (role, userId) => ({

  role        : role?.role        || '',
  creds       : role?.creds       || {},
  description : role?.description || '',

  lastChange  : getFixDateTemp(userId)
});
