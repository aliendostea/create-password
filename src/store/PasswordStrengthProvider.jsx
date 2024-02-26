import { createContext, useState } from "react";

export const PasswordStrengthContext = createContext("");

export function PasswordStrengthProvider({ children }) {
  const [passwordStrengthSelected, setPasswordStrengthActive] =
    useState <
    PasswordStrengthSelectedProps >
    {
      name: "",
      emoji: "",
      percentage: 0,
    };

  return (
    <PasswordStrengthContext.Provider value={{ passwordStrengthSelected, setPasswordStrengthActive }}>
      {children}
    </PasswordStrengthContext.Provider>
  );
}
