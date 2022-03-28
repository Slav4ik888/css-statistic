import { PermissionsScheme } from "../../../../types";
import getPermissionsRules from "./get-permissions-rules";
import { isPermissions } from "./is";
import mergeRules from "./merge-rules";



export default function addPermissionsRules(
  rules: object, permissions: PermissionsScheme, scheme: string
) {
  if (!isPermissions(permissions)) return;
  
  const permsRules = getPermissionsRules(scheme, permissions);
  mergeRules(rules, permsRules);
}