import { RoleType, Users } from "../../../types";

export const mocksUsers: Users = [
  {
    id     : `idUserSuper`,
    active : true,
    email  : `userSuper@mail.ru`,
    person : {
      firstName: `SlavaSuper`,   
      secondName: `KorzanSuper`,
      middleName: `Alex-chSuper`
    },
    role: {
      type: RoleType.SUPER,
      roleId: `roleIdSuper`
    },
    
  }, {
    id     : `idUserAdmin`,
    active : true,
    email  : `userAdmin@mail.ru`,
    person : {
      firstName: `SlavaAdmin`,   
      secondName: `KorzanAdmin`,
      middleName: `Alex-chAdmin`
    },
    role: {
      type: RoleType.ADMIN,
      roleId: `roleIdAdmin`
    },
    
  }, {
    id     : `idUserUser`,
    active : true,
    email  : `userUser@mail.ru`,
    person : {
      firstName: `SlavaUser`,   
      secondName: `KorzanUser`,
      middleName: `Alex-chUser`
    },
    role: {
      type: RoleType.USER,
      roleId: `roleIdUser`
    },
    
  }, {
    id     : `idUserInvalidRoleType`,
    active : true,
    email  : `userInvalidRoleType@mail.ru`,
    person : {
      firstName: `VasyaInvalidRoleType`,   
      secondName: `FamiliaInvalidRoleType`,
      middleName: `IchInvalidRoleType`
    },
    role: {
      type: null,
      roleId: `roleIdInvalidRoleType`
    },
    
  }, {
    id     : `idUserActiveFalse`,
    active : false,
    email  : `userActiveFalse@mail.ru`,
    person : {
      firstName: `VasyaActiveFalse`,   
      secondName: `FamiliaActiveFalse`,
      middleName: `IchActiveFalse`
    },
    role: {
      type: RoleType.ADMIN,
      roleId: `roleIdActiveFalse`
    },
    
  }, 
  null
];