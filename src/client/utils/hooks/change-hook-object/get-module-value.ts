import { UseModule } from "../types";
import getScheme from "./get-scheme";

export default function getModuleValue(module: UseModule<any>, scheme: string) {
  const { field1, field2, field3 } = getScheme(scheme);

  if (field3) return module.obj[field1][field2][field3];
  if (field2) return module.obj[field1][field2];
  if (field1) return module.obj[field1];
}