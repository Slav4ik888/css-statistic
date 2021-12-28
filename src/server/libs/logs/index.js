import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import winston from 'winston';
const { createLogger, format, transports } = winston;
const { combine, timestamp, label, printf } = format;
 
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});
 
const logServer = createLogger({
  level: 'info',
  // format: winston.format.json(),
  format: combine(
    // format.json(),
    label({ label: 'server' }),
    timestamp(),
    myFormat
  ),
  // defaultMeta: {service: 'course-service'},
  transports: [
    // сюда будут попадать ошибки уровня error
    new transports.File({ filename: `${__dirname}/logs-storage/error.log`, level: 'error' }),
    // Сюда будет валиться всё
    new transports.File({filename: `${__dirname}/logs-storage/server.log`}),
  ],
});


const logAuth = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'auth' }),
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.File({ filename: `${__dirname}/logs-storage/error.log`, level: 'error' }),
    new transports.File({filename: `${__dirname}/logs-storage/auth.log`}),
  ],
});


const logHelpers = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'helpers' }),
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.File({ filename: `${__dirname}/logs-storage/error.log`, level: 'error' }),
    new transports.File({filename: `${__dirname}/logs-storage/helpers.log`}),
  ],
});


const logUser = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'user' }),
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.File({ filename: `${__dirname}/logs-storage/error.log`, level: 'error' }),
    new transports.File({filename: `${__dirname}/logs-storage/users.log`}),
  ],
});


const logMail = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'mailer' }),
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.File({ filename: `${__dirname}/logs-storage/error.log`, level: 'error' }),
    new transports.File({filename: `${__dirname}/logs-storage/mails.log`}),
  ],
});


const logPdf = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'pdf' }),
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.File({ filename: `${__dirname}/logs-storage/error.log`, level: 'error' }),
    new transports.File({filename: `${__dirname}/logs-storage/pdf.log`}),
  ],
});


const logUI = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'UI' }),
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.File({ filename: `${__dirname}/logs-storage/error.log`, level: 'error' }),
    new transports.File({filename: `${__dirname}/logs-storage/ui.log`}),
  ],
});



if (process.env.NODE_ENV !== 'production') {
  logServer  .add(new transports.Console({ format: combine(format.colorize(),format.simple()) }));
  logAuth    .add(new transports.Console({ format: combine(format.colorize(),format.simple()) }));
  logHelpers .add(new transports.Console({ format: combine(format.colorize(),format.simple()) }));
  logUser    .add(new transports.Console({ format: combine(format.colorize(),format.simple()) }));
  logMail    .add(new transports.Console({ format: combine(format.colorize(),format.simple()) }));
  logPdf     .add(new transports.Console({ format: combine(format.colorize(),format.simple()) }));
  logUI      .add(new transports.Console({ format: combine(format.colorize(),format.simple()) }));
};


export {
  logServer, logAuth, logHelpers, logUser, logMail,
  logPdf, logUI
};
