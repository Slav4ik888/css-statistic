import { isSuper, isAdmin } from "../check-user-type/index.js";


export default function checkByUserType(user) {
  if (isSuper(user) || isAdmin(user)) return true;
  return false;
}