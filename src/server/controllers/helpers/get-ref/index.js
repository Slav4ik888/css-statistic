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
    case DbRef.FOLDER: return db.collection(`folders`).doc(data?.companyId).collection(`folders`);
  }
}
