import { DB_NAME } from '../db.js';
import { parseDbByFields } from './parse-db-by-fields.js';


export default function getParsedData(DB) {
  DB.CssDB     = parseDbByFields(DB.CssDB, DB_NAME.CssDB);
  DB.CssInstDB = parseDbByFields(DB.CssInstDB, DB_NAME.CssInstDB);
  DB.CssExpDB  = parseDbByFields(DB.CssExpDB, DB_NAME.CssExpDB);
  DB.BadcomDB  = parseDbByFields(DB.BadcomDB, DB_NAME.BadcomDB);
}