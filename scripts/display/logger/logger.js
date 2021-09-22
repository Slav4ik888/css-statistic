import cfg from '../../../config.js';
const isDev = !cfg.isProd;


/**
 * Выводит в консоль сообщение
 * @param {string} tag
 */
export default function logger(tag) {

  return function (message, value, ...args) {
    if (isDev) {
      let str = `[${tag}] ${message}`;
      
      if (args.length) console.log(str, value, args);
      else console.log(str, value);
    }
    return;
  }
};