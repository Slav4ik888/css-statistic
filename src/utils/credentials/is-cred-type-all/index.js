import { CredType } from '../../../types/types.js';

export default function isCredTypeAll(value) {
  if (value === CredType.ALL) return true
  return false
}