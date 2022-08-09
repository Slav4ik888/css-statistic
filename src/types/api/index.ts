import { User, Users, Roles } from "..";

export * from './ref-books';


export interface ResGetStartResourses {
  data: {
    user      : User,
    users     : Users,
    roleCreds : object
    roles     : Roles
  }
};

 