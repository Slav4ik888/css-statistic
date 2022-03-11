
export const getUpdatedRole = (role, userId) => ({

  id          : role.id,
  role        : role.role,
  creds       : role.creds,
  description : role.description,

  lastChange  : {
    userId,
    date: new Date().toISOString(),
  },
});