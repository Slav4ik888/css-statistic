import { db } from '../../../firebase/admin.js';
import { DbRef } from '../../../../types/types.js';

/**
 * Ref
 * @param {DbRef} type 
 * @param {object} data 
 * @returns 
 */
export const getRef = (type, data) => {

  switch (type) {
    case DbRef.ROLES_COLLECTION: return db.collection(`roles`);
    case DbRef.ROLES: return db.collection(`roles`).doc(data?.id);
  }
}
