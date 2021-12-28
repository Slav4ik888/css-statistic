// import { loggerMail } from '../loggers/index.js';
// loggerMail.info(`[config] - process.env.SENDER_EMAIL: ${process.env.SENDER_EMAIL} process.env.SENDER_EMAIL_PASSWORD: ${process.env.SENDER_EMAIL_PASSWORD}`)

// console.log(`process.env.SENDER_EMAIL: `, process.env.SENDER_EMAIL);
// console.log(`process.env.SENDER_EMAIL_PASSWORD: `, process.env.SENDER_EMAIL_PASSWORD);


export default {
  user: process.env.SENDER_EMAIL || `osnova.mailer@gmail.com`,
  password: process.env.SENDER_EMAIL_PASSWORD || `wlenhqbynudwxotz`, // `461@R2deR01A`,
};
