import { SUB } from "../utils/consts";

/**
 * Возвращаем дату от time в нужном формате
 * @return {string} - дата в нужном формате
 */
export default function formatDate(
  ms          : number | string,
  format      : string,
  sub?        : SUB,
): string;