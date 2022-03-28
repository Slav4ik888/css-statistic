import addAddiRules from "./add-addi-rules";
import addPermissionsRules from "./add-permissions-rules";
import addUnicsRules from "./add-unics-rules";


/**
 * `creds.rules.appoint` - ссылки на все существующие полномочия
 */
export default function getSchemeOfRules(Rules: any) {
  let rules = {};

  for (let key in Rules) {
    if (Object.prototype.hasOwnProperty.call(Rules, key)) {

      const scheme = Rules[key].id + `.`;

      addPermissionsRules(rules, Rules[key]?.permissions, scheme);
      addUnicsRules(rules, Rules[key]?.unics, scheme);
      addAddiRules(rules, Rules[key]?.additionals, scheme);
    }
  }

  // saveRules(rules);
  return rules;
};