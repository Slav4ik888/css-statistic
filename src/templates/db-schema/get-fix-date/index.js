
export const getFixDateTemp = (userId) => ({
  userId: userId || ``,
  date: new Date().toISOString()
});