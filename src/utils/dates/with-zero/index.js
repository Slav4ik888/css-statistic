
export default function withZero(n) {
  if (!n) return `00`;

  return (`0` + n).slice(-2);
}