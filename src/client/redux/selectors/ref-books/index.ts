import { RefbookItem, RefbookStatus } from "../../../../types";
import { RefbooksList } from "../../../consts/reference-books-list";
import { State } from "../../redux-types";

import { getRefbookById } from './get-refbook-by-id';
import { getRoles, getRoleById, getRoleByItem } from './roles';
import { getUsers, getUserById } from './users';


export {
  getRefbookById,
  getRoles, getRoleById, getRoleByItem,
  getUsers, getUserById
};
  

export const getLoading  = (state: State) => state.refbooks.loading;
export const getNewId    = (state: State) => state.refbooks.newId;


export const getRefStatuses = (state: State) => {
  let statuses = {} as keyof RefbookItem;

  RefbooksList.forEach(book => {
    if (!book.id || book.disabled) return;
    statuses[book.id] = state.refbooks?.[book.id] ? RefbookStatus.SUCCESS : RefbookStatus.ERROR;
  });

  return statuses;
};
