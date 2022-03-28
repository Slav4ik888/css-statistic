
export default function getName(str: string) {
  return str.replace(/\./g, `_`).toUpperCase()
}