

export interface PermRuleItem {
  read?   : RuleItem;
  add?    : RuleItem;
  change? : RuleItem;
  del?    : RuleItem;
};


export interface RuleItem {
  scheme  : string; // `creds.rules.appoint`
  label : string;
};
