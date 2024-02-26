import { PasswordStrengthContext } from "@/store/PasswordStrengthProvider";
import { useContext } from "react";

export function usePasswordStrength() {
  const { passwordStrengthSelected, setPasswordStrengthActive } = useContext(PasswordStrengthContext);

  return { passwordStrengthSelected, setPasswordStrengthActive };
}
