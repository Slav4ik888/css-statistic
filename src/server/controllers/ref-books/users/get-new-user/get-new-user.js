
export const getNewUser = (data, userId) => ({
  id: ``,

  active: true,
  email: data.email,
  person: data.person,
  description: data.description,
  role: data.role,

  createdAt: {
    userId,
    date: new Date().toISOString(),
  },
  lastChange: {
    userId,
    date: new Date().toISOString(),
  },
});
