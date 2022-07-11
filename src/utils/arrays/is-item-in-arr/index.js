

export const isItemInArr = (arr, item) => {
  if (!arr?.length) return false;
  
  return Boolean(arr.find(it => it === item))
};