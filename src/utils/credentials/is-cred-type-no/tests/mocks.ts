import { CredType } from "../../../../types";

export default [
  [CredType.NO,  true ],
  [CredType.OWN, false],
  [CredType.ALL, false],
  [undefined,    false],
  [null,         false],
  [{},           false],
  [``,           false],
  [`not`,        false]
]