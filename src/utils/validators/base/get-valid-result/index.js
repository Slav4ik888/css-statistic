export default function getValidResult(errors) {
  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  }
}
