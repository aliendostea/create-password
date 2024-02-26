import useCreatePassword from "@/hooks/use-create-password";
import useInputErrorContext from "@/hooks/use-input-error";
import { usePasswordStrength } from "@/hooks/use-password-strength";
import { passwordStrength } from "@/const";
import BtnGeneratePsw from "./BtnGeneratePsw";

export function FormItems() {
  const { isInputError, setIsIputError } = useInputErrorContext();
  const { passwordStrengthSelected } = usePasswordStrength();
  const [password, createPassword] = useCreatePassword({
    passwordStrength,
    passwordStrengthSelected,
  });

  const handleOnClickCopy = () => {
    const value = password ? password : "----";
    navigator.clipboard.writeText(value);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (passwordStrengthSelected.name === "") {
      setIsIputError(true);
      return;
    }

    createPassword();
  };

  return (
    <div className="box1">
      <div className="main-input-box">
        <span className="main-psw">{password ? password : "----"}</span>

        <button onClick={handleOnClickCopy}>Copy</button>
        <form id="main-form" onSubmit={handleOnSubmit}>
          <input
            className="main-input"
            name="main-input-password"
            type="text"
            value={password}
            readOnly
          />
        </form>
      </div>
      <BtnGeneratePsw />

      {isInputError && (
        <span className="span-options-error">
          Please, first choose password strength.
        </span>
      )}
    </div>
  );
}
