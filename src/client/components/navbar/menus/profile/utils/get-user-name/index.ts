import { Person } from "../../../../../../../types";


export default function getUserName(person: Person) {
  return (person.firstName + " " + person.secondName).trim() || `Пользователь` ;
}