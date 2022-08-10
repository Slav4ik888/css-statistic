import { RefbookId, RefbookItem, Role, User, Users } from "..";


export interface ResLoadRefbook { data: { items: [], message: string } };

export interface ResLoadRefbooksByIds {
  data: {
    refBooks: Array<{ id: RefbookId, refbook: RefbookItem }>
  }
};

// USERS
export interface ResRefAddUser    { data: { user: User } };
export interface ResRefUpdateUser { data: { user: User } };
export interface ResRefDeleteUser { data: { message: string } };
export interface ResRefLoadUsers  { data: { users: Users } };

// ROLES
export interface ResRefAddRole    { data: { role: Role } };
export interface ResRefUpdateRole { data: { role: Role, message: string } };
export interface ResRefDeleteRole { data: { message: string } };
