
export function getFirstFieldKey(obj) {
  if (typeof obj !== `object`) return ``;

  const key = Object.keys(obj);
  if (!key.length || key.length > 1) return ``;

  return key[0];
}
