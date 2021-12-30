import { db } from '../../../firebase/admin.js';
import getUserRoleId from '../../../../utils/credentials/get-user-role-id/index.js';

export default async function loadRoleCreds(user) {

  const roleId = getUserRoleId(user);
  if (!roleId) return null

  const credsRes = await db.collection(`roles`).doc(roleId).get();
  if (credsRes.exists) return credsRes.data()?.creds || {}
  
  return null
}