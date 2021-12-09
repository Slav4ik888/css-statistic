export default function returnValidResult(errors) {
  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  }
};