import { CredType } from '../../../types/types.js';

export default function isCredTypeNo(value) {
  if (value === CredType.NO) return true
  return false
}