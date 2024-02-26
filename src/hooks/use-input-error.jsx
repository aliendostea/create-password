import { useContext } from "react";
import { InputErrorContext } from "../store/InputErrorProvider";

export default function useInputErrorContext() {
  const { isInputError, setIsIputError } = useContext(InputErrorContext);

  return { isInputError, setIsIputError };
}
