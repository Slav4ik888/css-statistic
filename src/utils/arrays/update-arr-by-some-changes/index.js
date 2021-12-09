
export default function updateArrBySomeChanges(arr, field, changesArr, obj) {
  if (!arr?.length) return [];

  let newArr = [];

  arr.forEach(lastItem => {
    const res = changesArr.find(ch => ch === lastItem[field]);
    if (res) newArr.push({ ...lastItem, ...obj });
    else newArr.push(lastItem)
  })

  return newArr;
}
