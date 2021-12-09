

/**
 * Update lastArr by newArr by field, все не обновлённые объекты остаются без изменений
 * @param {Array} lastArr 
 * @param {string} field 
 * @param {Array} newArr 
 */
export default function updateArrByArrByField(lastArr, field, newArr) {
  if (!lastArr?.length) return newArr;

  let updatedArr = [...newArr];

  lastArr.forEach(item => {
    const res = updatedArr.find(updated => updated[field] === item[field]);
    if (!res) updatedArr.push(item);
  });

  console.log('updatedArr: ', updatedArr);
  return updatedArr;
};