import { RefBookItem, RefBookStatus } from "../../../../types";
import { ReferenceBooksList } from "../../../consts/reference-books-list";
import { State } from "../../redux-types";

import { getRefBookById } from './get-refbook-by-id';
import { getRoles, getRoleById, getRoleByItem } from './roles';
import { getUsers, getUserById } from './users';

export {
  getRefBookById,
  getRoles, getRoleById, getRoleByItem,
  getUsers, getUserById
};
  

export const getLoadingRef  = (state: State) => state.refbooks.loadingRef;
export const getLoadingUpd  = (state: State) => state.refbooks.loadingUpd;
export const getNewId       = (state: State) => state.refbooks.newId;


export const getRefStatuses = (state: State) => {
  let statuses: keyof RefBookItem = {} as keyof RefBookItem;

  ReferenceBooksList.forEach(book => {
    if (!book.id || book.disabled) return;
    statuses[book.id] = state.refbooks?.[book.id] ? RefBookStatus.SUCCESS : RefBookStatus.ERROR;
  });

  return statuses;
};
