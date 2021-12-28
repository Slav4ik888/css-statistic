
export default function whoseCred(createdAt, user) {
  if (!createdAt || !createdAt?.userId || !user || !user?.id) return false;
  
  return createdAt?.userId === user?.id
}