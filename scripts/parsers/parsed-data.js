import { DB_NAME } from '../db.js';
import { parseDbByFields } from './parse-db-by-fields.js';

export default function parsedData(DB) {
  DB.CssDB.db     = parseDbByFields(DB.CssDB.db    , DB_NAME.CssDB);
  DB.CssInstDB.db = parseDbByFields(DB.CssInstDB.db, DB_NAME.CssInstDB);
  DB.CssExpDB.db  = parseDbByFields(DB.CssExpDB.db , DB_NAME.CssExpDB);
  DB.BadcomDB.db  = parseDbByFields(DB.BadcomDB.db , DB_NAME.BadcomDB);
}