
const strLength = (n, char) => [...new Array(n)]
  .map(it => char).join(``)


export const getMockStrLength = (n, char) => {
  let c = `_`;

  if (char && typeof char === `string`) c = char[0];

  return strLength(n, c);
}
