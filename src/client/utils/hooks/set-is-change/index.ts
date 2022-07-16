import { UseBase } from "../types";


export function setChanges(G: UseBase) {
  G && !G.changes && G.setChanges(true);
};
