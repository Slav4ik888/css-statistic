import getScheme from "../get-scheme";
import { UseGroup } from "../types";

/**
 * @return value by scheme
 */
export default function getValueByScheme<O>(G: UseGroup<O>, scheme: string) {
  const { field1, field2, field3, field4 } = getScheme(scheme);

  if      (field4) return G?.group?.[field1]?.[field2]?.[field3]?.[field4]
  else if (field3) return G?.group?.[field1]?.[field2]?.[field3]
  else if (field2) return G?.group?.[field1]?.[field2]
  else if (field1) return G?.group?.[field1]
  return undefined;
}