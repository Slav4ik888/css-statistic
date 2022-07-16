
export function getScheme(str) {
  const values = {
    field1: ``,
    field2: ``,
    field3: ``,
    field4: ``
  };

  if (!str) return values;

  const split = str.split(`.`);

  values.field1 = split[0];
  values.field2 = split[1];
  values.field3 = split[2];
  values.field4 = split[3];

  return values;
};
