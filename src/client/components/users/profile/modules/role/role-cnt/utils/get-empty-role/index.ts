import { Role } from "../../../../../../../../../types";

export const getEmptyRole = (): Role => ({
  id    : ``,
  role  : ``,
  creds : {}
});
