import { PermissionsScheme, PermRuleItem } from "../../../../types";


export default function getPermissionsRules(_scheme: string, perms: PermissionsScheme) {
  let rules: PermRuleItem = {};

  if (perms?.read?.  [0]) rules.read   = { scheme: _scheme + `r`, label: perms.read   [2] }
  if (perms?.add?.   [0]) rules.add    = { scheme: _scheme + `a`, label: perms.add    [2] }
  if (perms?.change?.[0]) rules.change = { scheme: _scheme + `c`, label: perms.change [2] }
  if (perms?.del?.   [0]) rules.del    = { scheme: _scheme + `d`, label: perms.del    [2] }

  return rules
};