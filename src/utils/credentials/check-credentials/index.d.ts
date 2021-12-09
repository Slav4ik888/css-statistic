import { Credentials, CredName, User, Validation } from "../../../types";


export function cred(
  checkCredential: CredName, user: User, userCredentials: Credentials, exception?: boolean
): boolean;


export function noCred(
  checkCredential: CredName, user: User, userCredentials: Credentials, exception?: boolean
): boolean;


export default function checkCredentials(
  checkCredential: CredName, user: User, userCredentials: Credentials, exception?: boolean
): Validation
  