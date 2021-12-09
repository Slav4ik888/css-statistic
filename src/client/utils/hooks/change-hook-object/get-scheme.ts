
export default function getScheme(str: string) {
  const split = str.split(`.`);

  const field1 = split[0];
  const field2 = split[1];
  const field3 = split[2];

  return { field1, field2, field3 }
};