import { PasswordStrengthContext } from "@/store/PasswordStrengthProvider";
import { useContext } from "react";

interface PasswordStrengthSelectedProps {
  name: string;
  emoji: string;
  percentage: number;
}

export function usePasswordStrength() {
  const { passwordStrengthSelected, setPasswordStrengthActive } = useContext(
    PasswordStrengthContext
  );

  return { passwordStrengthSelected, setPasswordStrengthActive };
}
