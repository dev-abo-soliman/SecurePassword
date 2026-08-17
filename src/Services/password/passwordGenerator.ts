import { PasswordOptions } from "./types";

const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_-+=<>?";

function getRandomCharacter(characters: string): string {
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

function shuffle(password: string):string {
  let chars = password.split("");
  for (let i = chars.length; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  return chars.join("");
}

export function generatePassword(options: PasswordOptions): string {
  let characterPool = "";

  let password = "";

  // Build Character Pool
  if (options.uppercase) {
    characterPool += UPPERCASE;
    password += getRandomCharacter(UPPERCASE);
  }

  if (options.lowercase) {
    characterPool += LOWERCASE;
    password += getRandomCharacter(LOWERCASE);
  }

  if (options.numbers) {
    characterPool += NUMBERS;
    password += getRandomCharacter(NUMBERS);
  }

  if (options.symbols) {
    characterPool += SYMBOLS;
    password += getRandomCharacter(SYMBOLS);
  }

  // Validation
  if (characterPool.length === 0) {
    return "";
  }

  if (options.length < password.length) {
    throw new Error("Password length is too short.");
  }

  // Fill Remaining Characters
  while (password.length < options.length) {
    password += getRandomCharacter(characterPool);
  }

  // Shuffle
  return shuffle(password);
}
