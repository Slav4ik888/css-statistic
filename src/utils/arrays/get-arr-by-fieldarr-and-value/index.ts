export default function getArrByFieldArrAndValue<T>(arr: Array<T>, fieldArr: string, value: string) {
  let result = [];
  

  arr?.forEach(item => {
    item[fieldArr].forEach(it => {
      if (it === value) result.push(item)
    });
  });

  return result
}