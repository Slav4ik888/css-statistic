
/**
 * Возвращает вышло ли время ожидания
 * @param {string} lastTime - предыдущее время
 * @param {number} waiting  - ожидание в ms
 */
export default function isTimeOut(lastTime, waiting) {
  if (!lastTime) return true;

  const lastTimeMs = Date.parse(lastTime);
  const currentTimeMs = Date.parse(new Date());

  return waiting < currentTimeMs - lastTimeMs;
}