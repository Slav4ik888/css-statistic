import { PermRuleItem, UnicItem } from "../../../../types";
import getName from "./get-name";


export default function getUnicsRules(_scheme: string, unics: Array<UnicItem>) {
  let rules: PermRuleItem = {};

  unics.forEach(u => {
    if (u.rule[0]) {
      const scheme = _scheme + u.id;
      rules[getName(scheme)] = { scheme, label: u.rule[2]}
    }
  });

  return rules
};