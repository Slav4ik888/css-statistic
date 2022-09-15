import { getData } from './get-data.js';


export const getDbs = async (url) => {
  const data = await getData(url)
  console.log('data: ', data);
   
  let db = [];
  // data?.messages.forEach(m => db.push(m))
  // console.log(`db: `, db);
  return db;
}
