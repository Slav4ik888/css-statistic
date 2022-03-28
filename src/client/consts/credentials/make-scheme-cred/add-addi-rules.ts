import { CredSchemeItem } from "../../../../types";
import addPermissionsRules from "./add-permissions-rules";
import addUnicsRules from "./add-unics-rules";


export default function addAddiRules(
  rules: object, additionals: Array<CredSchemeItem>, scheme: string
) {
  additionals?.forEach(addi => {
    const __scheme = scheme + addi.id + `.`;

    addPermissionsRules(rules, addi?.permissions, __scheme);
    addUnicsRules(rules, addi?.unics, __scheme);
  });
}