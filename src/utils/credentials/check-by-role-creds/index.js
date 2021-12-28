import getValueByScheme from '../../objects/get-value-by-scheme/index.js';
import isCredType from '../is-cred-type/index.js';
import isCredTypeAll from '../is-cred-type-all/index.js';
import isCredTypeNo from '../is-cred-type-no/index.js';


/**
 * True if "roleCreds" contains "checkCred"
 */
export default function checkByRoleCreds(checkCred, roleCreds, CredTypeAll) {
  

  const value = getValueByScheme(roleCreds, checkCred?.scheme);

  if (typeof value === undefined || !value) return false

  if (isCredType(value)) {
    if (isCredTypeNo(value)) return false

    // Если есть право доступа CredType.ALL
    if (isCredTypeAll(value)) return true

    // Если нет, то проверяем к чьему контенту запрашивается доступ
    if (!CredTypeAll) return true

    // Значит запрашивают доступ к чужому, а полномочий нет :)
    return false
  }
  else return true;
}