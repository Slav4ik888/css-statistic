

export function getArrContainValueByField(arr, field, regexp) {

  return arr.filter(item => regexp.test(item[field]))
}
