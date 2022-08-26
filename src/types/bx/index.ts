

export interface BxMenuItem {
  id          : string;
  label       : string;
  /** Доступно ли для использования */
  active      : boolean;
  instruction : string;
  toolTitle   : string;
};


export type BxMenuItemEnts = { [k: string]: BxMenuItem };
