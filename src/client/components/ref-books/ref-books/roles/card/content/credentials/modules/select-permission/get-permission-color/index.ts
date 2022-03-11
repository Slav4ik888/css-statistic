import { CredType } from "../../../../../../../../../../../types";


export default function getPermissionColor(type: CredType) {
  switch (type) {
    case CredType.NO: return `#99a1a5`
    case CredType.OWN: 
    case CredType.ALL: return `#000`

    default: return `#000`
  }
}