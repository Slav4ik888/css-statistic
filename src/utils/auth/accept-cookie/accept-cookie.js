// Functions
import logger from '../../../client/utils/client-logger/client-logger.js';

const log = logger(`accept-cookie`);


// Check, is accept cookie - читаем, принимали ли cookie
const isAcceptCookie = () => {
  const value = localStorage.getItem(`OsnovaCourseCookieAccepted`);
  return value === `true`;
};


// Set accept cookie - if user разрешил
export const setAcceptCookie = () => localStorage.setItem(`OsnovaCourseCookieAccepted`, `true`);


// Check accept cookie and set in Store
export const checkAcceptCookie = (setAcceptCookieToStore) => {

  if (isAcceptCookie()) {
    log(`Пользователь ранее дал разрешение на использование cookie`);
    setAcceptCookieToStore(true);
  }
  else {
    log(`Пользователь не давал разрешение на использование cookie`);
  }
};