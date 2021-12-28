import { CredType } from "../../../../types";

export default [
  [CredType.NO,  true ],
  [CredType.OWN, true ],
  [CredType.ALL, true ],
  [undefined,    false],
  [null,         false],
  [{},           false],
  [``,           false],
  [`not`,        false]
]