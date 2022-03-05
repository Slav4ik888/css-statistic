import getValidResult from '../../validators/base/get-valid-result/index.js';
import checkByUserType from '../check-by-user-type/index.js';
import { noActive } from '../is-active/index.js';
import checkByRoleCreds from '../check-by-role-creds/index.js';
import { isSuper, isUser } from '../check-user-type/index.js';


const validTrue = () => getValidResult({});


export const cred = (checkCred, user, roleCreds, CredTypeAll, exception) => {
  const { valid } = checkCredential(checkCred, user, roleCreds, CredTypeAll, exception);
  return valid
};


export const noCred = (checkCred, user, roleCreds, CredTypeAll, exception) => {
  return !cred(checkCred, user, roleCreds, CredTypeAll, exception)
};


export default function checkCredential(checkCred, user, roleCreds, CredTypeAll, exception) {

  if (isSuper(user)) return validTrue()

  if (noActive(user))
    return getValidResult({ noActive: `У пользователя параметр active = false` })


  // Check exception for user Type
  if (!exception) {
    // Check by user Type
    if (checkByUserType(user)) return validTrue()

    // If по какой то причине отсутствует тип у пользователя
    if (!isUser(user))
      return getValidResult({ noType: `Отсутствует тип Роли пользователя` })
  }


  // Check by user Role
  if (!checkByRoleCreds(checkCred, roleCreds, CredTypeAll))
    return getValidResult({ noCred: `Нет полномочий на: ${checkCred?.label}` })

  
  return validTrue()
}
