
export const getUpdatedUser = (data, userId) => ({

  active      : data.active,
  person      : data.person,
  description : data.description,
  role        : data.role,

  lastChange: {
    userId,
    date: new Date().toISOString(),
  },
});