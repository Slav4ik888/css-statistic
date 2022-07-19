
export const getNewUser = (data, userId) => ({
  id: ``,
  ...data,

  createdAt: {
    userId,
    date: new Date().toISOString(),
  },
  lastChange: {
    userId,
    date: new Date().toISOString(),
  },
});
