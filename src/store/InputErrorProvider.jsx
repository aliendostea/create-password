import { createContext, useState } from "react";

export const InputErrorContext = createContext(false);

export function InputErrorProvider({ children }) {
  const [isInputError, setIsIputError] = useState(false);

  return (
    <InputErrorContext.Provider value={{ isInputError, setIsIputError }}>
      {children}
    </InputErrorContext.Provider>
  );
}
