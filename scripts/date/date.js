// Consts
import conf from '../../config.js';


export const isMaxFrequencyEnd = (lastTime) => {
  if (!lastTime) return true;

  const lastTimeMs = Date.parse(lastTime);
  const currentTimeMs = Date.parse(new Date());

  return conf.MAX_FREQUENCY_FROM_GOOGLE < currentTimeMs - lastTimeMs;
};