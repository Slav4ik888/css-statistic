import { getFixDateTemp } from "../../../../../../templates/db-schema";
import { Role } from "../../../../../../types";


export default function mergeWithTemplate(data: Role, userId: string): Role {
  return {
    id          : data?.id          || ``,
    
    role        : data?.role        || ``,
    creds       : data?.creds       || {},
    description : data?.description || ``,
    
    createdAt   : data?.createdAt   || getFixDateTemp(userId),
    lastChange  : data?.lastChange  || getFixDateTemp(userId)
}};