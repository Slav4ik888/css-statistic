
export default function getUpdatedUser(user, userId) {
  return Object.assign({}, user, {
    lastChange: {
      userId,
      date: new Date().toISOString(),
    }
  })
  // return ({
  //   // id          : user.id,
  //   description : user?.description  || ``,
    
  //   // active      : user?.active       || true,
  //   // email       : user?.email        || ``,
  //   person      : user?.person,
  //   role        : user?.role,
  //   settings: {
  //     customers: {
  //       orderRow: user?.settings?.customers?.orderRow || []
  //     },
  //     plan      : {
  //       sections  : data?.settings?.plan?.sections  || [],
  //       flightRow : data?.settings?.plan?.flightRow || {}
  //     }
  //   },
  //   lastChange: {
  //     userId,
  //     date: new Date().toISOString(),
  //   }
  // })
};