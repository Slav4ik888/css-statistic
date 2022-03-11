import { User, Users, Role, Roles, RefBookId, RefBookItem } from "..";

export interface ResGetStartResourses {
  data: {
    user      : User,
    users     : Users,
    roleCreds : object
    roles     : Roles
  }
};


// REF-BOOKS
export interface ResLoadRefBook {
  data: {
    items: [],
    message: string
  }
};

export interface ResLoadRefbooksByList {
  data: {
    refBooks: Array<{ id: RefBookId, refbook: RefBookItem }>
  }
};


// USERS
export interface ResUpdateUser {
  data: {
    message: string
  }
};


export interface ResAddUser   { data: { user  : User } };
export interface ResLoadUsers { data: { users: Users } };


// ROLES
export interface ResAddRole   { data: { role  : Role } };

export interface ResUpdateRole   {
  data: {
    role    : Role
    message : string;
  }
};

 