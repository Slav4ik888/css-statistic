import { CredType } from "../../../../../../../../../../../types";


export default function getPermissionSize(type: CredType) {
  switch (type) {
    case CredType.NO: return `0.6rem`
    case CredType.OWN: 
    case CredType.ALL: return `0.9rem`

    default: return `0.9rem`
  }
}