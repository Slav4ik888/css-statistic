import { User, Users, Role, Roles } from "..";

export interface ResGetStartResourses {
  data: {
    user      : User,
    users     : Users,
    roleCreds : object
    roles     : Roles
  }
};

export interface ResUpdateUser {
  data: {
    message: string
  }
};

export interface ResAddRole   { data: { role  : Role } };

export interface ResUpdateRole   {
  data: {
    role    : Role
    message : string;
  }
};

export interface ResAddUser   { data: { user  : User } };
export interface ResLoadUsers { data: { users : Users } };
 