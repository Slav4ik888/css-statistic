
export function getArrFromArrsByFieldAndValue(arr, fieldArr, value) {
  if (!arr?.length) return [];

  return arr?.reduce((acc, item) => {
    item[fieldArr].forEach(it => {
      if (it === value) acc.push(item)
    });

    return acc
  }, []);
}
