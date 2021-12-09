import { getRandomEngLitera, getRandomElement, getRandomNumber, getRandomBoolean } from '../random/random.js';


export default function createPassword(length) {
  // Первый символ буква
  let password = getRandomEngLitera();

  for (let i = 0; i < length - 1; i++) {
    let char = ``;
    let letter = ``;

    const isChar = getRandomNumber(0, 25);

    if (isChar < 20) { // Если буква
      letter = getRandomEngLitera();

      const isUp = getRandomBoolean();
      if (isUp) letter = letter.toUpperCase();
    }
    else { // Если символ
      char = getRandomElement([`@`, `#`, `$`, `-`])
    }

    password += char + letter;
  }

  return password;
}