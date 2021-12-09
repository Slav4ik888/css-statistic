
/**
 * All values in string separated by commas 
 * @param {*} obj 
 */
export default function getAllObjValue(obj) {
  let str = ``;

  if (!obj || typeof obj !== `object`) {
    console.log(`obj - не является объектом. ${obj}`);
    return str;
  }


  const values = Object.values(obj);
  if (!values.length) {
    console.log(`obj - пустой. ${obj}`);
    return str;
  }

  values.forEach(v => v && (str += v + `, `));
  return str.slice(0, str.length - 2);
}