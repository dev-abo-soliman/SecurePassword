export interface PasswordStrengthResult {
  score: number;
  label: "Weak" | "Medium" | "Strong";
}
