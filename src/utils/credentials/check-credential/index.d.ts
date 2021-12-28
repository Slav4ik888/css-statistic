import { User, Validation, Credential } from "../../../types";


export function cred(
  checkCred: Credential, user: User, roleCreds: object, credTypeAll: boolean, exception?: boolean
): boolean;


export function noCred(
  checkCred: Credential, user: User, roleCreds: object, credTypeAll: boolean, exception?: boolean
): boolean;


/**
 * Check credential - main fn
 * @param checkCred   - проверяемое полномочие
 * @param user 
 * @param roleCreds   - Role credentials
 * @param credTypeAll - true если запрашивается доступ CredType.All (к чужому)
 * @param exception?  - Исключение на доступ по isUserAdmin. Если true - то полномочия Админа не работают
 */
export default function checkCredentials(
  checkCred: Credential, user: User, roleCreds: object, credTypeAll: boolean, exception?: boolean
): Validation
  