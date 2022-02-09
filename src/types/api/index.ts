import { User, Users } from "..";

export interface AddUser { data: { user: User } };
export interface LoadUsers { data: { users: Users } };
 