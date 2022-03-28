import { Role } from "../../../../../../types";
import { Mocks } from "./types";
import * as m from '../../../../../../templates/mocks';
import { getFixDateTemp } from "../../../../../../templates/db-schema";

const empty = m.roleEmpty as Role;
empty.createdAt       = getFixDateTemp(`userId123`);
empty.lastChange      = getFixDateTemp(`userId123`);
empty.createdAt.date  = `28.03.22`;
empty.lastChange.date = `28.03.22`;


export const mocks: Mocks = [
  [{
    description : `All data right`,
    userId      : `userId123`
  }, empty],
];
