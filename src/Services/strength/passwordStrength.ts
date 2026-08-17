import { PasswordStrengthResult } from "./types";

export function calculatePasswordStrength(
  password: string,
): PasswordStrengthResult {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[!@#$%^&*()_\-+=<>?]/.test(password)) score++;

  if (score <= 2) {
    return {
      score,
      label: "Weak",
    };
  }

  if (score <= 4) {
    return {
      score,
      label: "Medium",
    };
  }

  return {
    score,
    label: "Strong",
  };
}
