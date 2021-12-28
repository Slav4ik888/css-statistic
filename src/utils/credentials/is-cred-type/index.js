import { CredType } from '../../../types/types.js';

export default function isCredType(value) {
  for (let key in CredType) {
    if (Object.prototype.hasOwnProperty.call(CredType, key)) {
      if (CredType[key] === value) return true
    }
  }
  return false
}