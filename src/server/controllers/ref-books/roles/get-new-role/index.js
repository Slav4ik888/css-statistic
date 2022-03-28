import { getFixDateTemp } from '../../../../../templates/db-schema/index.js';


export const getNewRole = (userId) => ({
  id          : ``,

  role        : ``,
  creds       : {},
  description : ``,

  createdAt   : getFixDateTemp(userId),
  lastChange  : getFixDateTemp(userId)
});
