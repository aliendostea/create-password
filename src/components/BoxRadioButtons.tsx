import useInputErrorContext from "@/hooks/use-input-error";
import { usePasswordStrength } from "@/hooks/use-password-strength";
import { PasswordStrengthProps } from "@/const";

interface PasswordStrengthSelectedProps {
  name: string;
  emoji: string;
  percentage: number;
}

function InputRadioButton({
  id,
  name,
  onChange,
  value,
  children,
}: {
  id: string;
  name: string;
  onChange: () => void;
  value: string;
  children: JSX.Element;
}) {
  return (
    <div className="input-radio-box">
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        required
      />
      <label htmlFor={id} aria-labelledby={value}>
        {value}
        {children}
      </label>
    </div>
  );
}

export function BoxRadioButtons({
  passwordStrengthLevels,
}: {
  passwordStrengthLevels: PasswordStrengthProps[];
}) {
  const { setIsIputError } = useInputErrorContext();
  const { setPasswordStrengthActive } = usePasswordStrength();

  const handleOnClickSpan = (item: PasswordStrengthSelectedProps) => {
    setIsIputError(false);
    setPasswordStrengthActive({ ...item });
  };

  return (
    <div>
      <p className="p-options">Choose the password strength</p>
      {passwordStrengthLevels.map((item: PasswordStrengthProps) => (
        <InputRadioButton
          key={item.name}
          id={item.name}
          name="radio-password-strength"
          value={item.name}
          onChange={() => handleOnClickSpan({ ...item })}
        >
          <span>{item.emoji}</span>
        </InputRadioButton>
      ))}
    </div>
  );
}
