import { UnicItem } from "../../../../types";
import getUnicsRules from "./get-unics-rules";
import { isUnics } from "./is";
import mergeRules from "./merge-rules";



export default function addUnicsRules(
  rules: object, unics: Array<UnicItem>, scheme: string
) {
  if (!isUnics(unics)) return;

  const unicsRules = getUnicsRules(scheme, unics);
  mergeRules(rules, unicsRules);
}