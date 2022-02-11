import { User, Users, Role, Roles } from "..";

export interface GetStartResourses {
  data: {
    user      : User,
    users     : Users,
    roleCreds : object
    roles     : Roles
  }
};

export interface AddRole   { data: { role  : Role } };
export interface AddUser   { data: { user  : User } };
export interface LoadUsers { data: { users : Users } };
 