import { User } from "../../../../../../../../types";
import { getChanges } from "../../../../../../../../utils/objects";


/**
 * Returns changed fields, with email field
 */
export const getChangesWithRequiredFields = (storeUser: User, updated: Partial<User>): Partial<User> => {
  const newObj = getChanges(storeUser, updated);
  
  newObj.id    = storeUser?.id;
  newObj.email = storeUser?.email;

  return newObj;
};
