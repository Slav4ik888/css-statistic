
export const getNewRole = (userId) => ({
  id: ``,

  role: ``,
  creds: {},
  description : ``,

  createdAt: {
    userId,
    date: new Date().toISOString(),
  },
  lastChange: {
    userId,
    date: new Date().toISOString(),
  },
});