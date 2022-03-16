import { RefBookId, RefBookItem, Role, User, Users } from "..";


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

export interface ResRefAddUser {
  data: { user: User }
};

export interface ResRefUpdateUser {
  data: { user: User, message: string }
}

export interface ResRefDeleteUser {
  data: { user: User, message: string }
}

export interface ResRefLoadUsers { data: { users : Users } };


// ROLES
export interface ResRefAddRole   { data: { role  : Role } };

export interface ResRefUpdateRole   {
  data: { role: Role, message: string }
};
