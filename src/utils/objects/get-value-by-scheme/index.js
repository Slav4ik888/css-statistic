import getScheme from '../../../client/utils/hooks/get-scheme/index.js';

export default function getValueByScheme(obj, scheme) {
  const { field1, field2, field3 } = getScheme(scheme);

  if (field3)      return obj?.[field1]?.[field2]?.[field3]
  else if (field2) return obj?.[field1]?.[field2]
  else if (field1) return obj?.[field1]

  return undefined;
}