export enum ERR_TEMP {
  InvalidData           = `invalidData`,
  InvalidConfirm        = `invalidConfirm`,
  
  NotBeError            = `notBeError`,
  MustBeNumber          = `mustBeNumber`,
  MustBeOneOfSeveral    = `mustBeOneOfSeveral`,
  MustNotBeEmpty        = `mustNotBeEmpty`,
  MustBeLess            = `mustBeLess`,
  MustBeGreater         = `mustBeGreater`,
  MustBeBool            = `mustBeBool`,
  MustBeString          = `mustBeString`,
  MustBeObject          = `mustBeObject`,
  
  MustBePermissions     = `mustBePermissions`,
  
  DevMustBeOneOfSeveral = `devMustBeOneOfSeveral`,
  DevMustNotBeEmpty     = `devMustNotBeEmpty`
};
