import { PermissionsScheme, UnicItem, CredSchemeItem } from "../../../../types/credentials/scheme";

/**
 * True if permission "true" present
 */
export function isPermissions(perms: PermissionsScheme) {
  if (perms?.read?.[0])   return true;
  if (perms?.add?.[0])    return true;
  if (perms?.change?.[0]) return true;
  if (perms?.del?.[0])    return true;
  return false;
}


export function isUnics(unics: Array<UnicItem>) {
  return Boolean(unics?.length)
}


export function isAdditionals(additionals: Array<CredSchemeItem>) {
  return Boolean(additionals?.length)
}