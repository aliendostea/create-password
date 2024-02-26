import { createContext, useState } from "react";

interface PasswordStrengthSelectedProps {
  name: string;
  emoji: string;
  percentage: number;
}

export const PasswordStrengthContext = createContext("");

export function PasswordStrengthProvider({
  children,
}: {
  children: JSX.Element[];
}) {
  const [passwordStrengthSelected, setPasswordStrengthActive] =
    useState<PasswordStrengthSelectedProps>({
      name: "",
      emoji: "",
      percentage: 0,
    });

  return (
    <PasswordStrengthContext.Provider
      value={{ passwordStrengthSelected, setPasswordStrengthActive }}
    >
      {children}
    </PasswordStrengthContext.Provider>
  );
}
