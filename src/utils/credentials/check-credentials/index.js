import returnValidResult from '../../validators/base/return-valid-result/index.js';
import checkByUserType from '../check-by-user-type/index.js';



export const cred = (checkCredential, user, userCredentials, exception) => {
  const { valid, errors } = checkCredentials(checkCredential, user, userCredentials, exception);
  return valid
};


export const noCred = (checkCredential, user, userCredentials, exception) => {
  return !cred(checkCredential, user, userCredentials, exception)
};


export default function checkCredentials(checkCredential, user, userCredentials, exception) {
  let errors = {};

  // Check exception for user Type
  if (!exception) {
    // Check by user Type
    if (checkByUserType(user)) return returnValidResult(errors);
  }

  // Check by user Role
  

  // if (isNoValidMaxL300(data.description)) errors.description = TPL.auth.invalidDescription;


  return returnValidResult(errors);
}