import { CredType } from "../../../../types";

export default [
  [CredType.NO,  false],
  [CredType.OWN, false],
  [CredType.ALL, true ],
  [undefined,    false],
  [null,         false],
  [{},           false],
  [``,           false],
  [`not`,        false]
]