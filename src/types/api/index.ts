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
export interface ResRefUpdateUser {
  data: {
    message: string
  }
};


export interface ResRefAddUser   { data: { user  : User } };
export interface ResRefLoadUsers { data: { users: Users } };


// ROLES
export interface ResRefAddRole   { data: { role  : Role } };

export interface ResRefUpdateRole   {
  data: {
    role    : Role
    message : string;
  }
};

 