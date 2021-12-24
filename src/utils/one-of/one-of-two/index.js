
export default function getOneOf(bool, arr) {
  if (bool) return arr[0]
  return arr[1];
};