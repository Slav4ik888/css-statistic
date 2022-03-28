import getName from "./get-name";

export default function mergeRules(originRules: object, rules: object) {

  for (let key in rules) {
    if (Object.prototype.hasOwnProperty.call(rules, key)) {
      const scheme = rules[key].scheme;
      const label  = rules[key].label;
      originRules[getName(scheme)] = { scheme, label };
    }
  }
}