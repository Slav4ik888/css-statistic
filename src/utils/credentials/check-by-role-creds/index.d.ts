import { Credential } from '../../../types';

/**
 * True if "roleCreds" contains "checkCred"
 * @param {boolean} credTypeAll - если запрашивается доступ CredType.All
 */
export default function checkByRoleCreds(
  checkCred: Credential, roleCreds: object, credTypeAll: boolean): boolean;