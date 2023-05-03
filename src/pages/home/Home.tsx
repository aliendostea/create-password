import useCreatePassword from "@/hooks/use-create-password";
import TestResponsive from "@/testResponsive/TestResponsive";
import { useEffect, useRef, useState } from "react";
import style from "./home.module.css";

interface CombinationElementsProps {
  comb1: string;
  comb2: string;
  comb3?: string;
  comb4?: string;
  comb5?: string;
  comb6?: string;
}

interface PasswordStrengthProps {
  name: string;
  specialCharactersLength: number;
  emoji: string;
  percentage: number;
  generate: (props: CombinationElementsProps) => string;
}

const passwordStrength: PasswordStrengthProps[] = [
  {
    name: "low",
    specialCharactersLength: 4,
    emoji: "🥴",
    percentage: 20,
    generate: ({ comb1, comb2 }: CombinationElementsProps) => {
      return `${comb1}-${comb2}`;
    },
  },
  {
    name: "medium",
    specialCharactersLength: 4,
    emoji: "😐",
    percentage: 45,
    generate: ({ comb1, comb2, comb3 }: CombinationElementsProps) => {
      return `${comb1}-${comb2}-${comb3}`;
    },
  },
  {
    name: "hard",
    specialCharactersLength: 4,
    emoji: "😀😬",
    percentage: 70,
    generate: ({ comb1, comb2, comb3, comb4 }: CombinationElementsProps) => {
      return `${comb1}-${comb2}-${comb3}-${comb4}`;
    },
  },
  {
    name: "veryhard",
    specialCharactersLength: 4,
    emoji: "💪😈",
    percentage: 95,
    generate: ({
      comb1,
      comb2,
      comb3,
      comb4,
      comb5,
      comb6,
    }: CombinationElementsProps) => {
      return `${comb6}-${comb1}-${comb2}-${comb3}-${comb4}-${comb5}`;
    },
  },
];

const gradients = [
  {
    value: `linear-gradient(90deg, rgba(234, 193, 234, 0.64) 0%, rgba(234, 193, 234, 0) 52%, rgba(255, 255, 255, 0) 90%)`,
    name: "low",
  },
  {
    value: `linear-gradient(90deg, rgba(234, 193, 234, 0.78) 0%, rgba(234, 193, 234, 0) 52%, rgba(255, 255, 255, 0) 90%)`,
    name: "medium",
  },
  {
    value: `linear-gradient(90deg, rgba(234, 193, 234, 0.78) 0%, rgba(234, 193, 234, 0.76) 22%, rgba(255, 255, 255, 0) 95%)`,
    name: "hard",
  },
  {
    value: `linear-gradient(90deg, rgb(234, 193, 234) 0%, rgba(234, 193, 234, 0.76) 22%, rgba(255, 255, 255, 0) 95%)`,
    name: "veryhard",
  },
];

interface PasswordStrengthSelectedProps {
  name: string;
  emoji: string;
  percentage: number;
}

interface HelperElementProps {
  isActive: boolean;
  passwordExist: string;
  label: string;
  icon: string;
  mainClassName: string;
}

const HelperElement = ({
  isActive,
  passwordExist,
  label,
  icon,
  mainClassName,
}: HelperElementProps) => {
  const [classNameHelperElement, setClassNameHelperElement] = useState(
    `${style[mainClassName]}`
  );

  useEffect(() => {
    if (isActive && passwordExist) {
      setClassNameHelperElement(
        `${style[mainClassName]} ${style["el-created--active"]}`
      );
    }
    if (isActive === false && passwordExist) {
      setClassNameHelperElement(
        `${style[mainClassName]} ${style["el-created--disabled"]}`
      );
    }
  }, [isActive]);
  return (
    <span className={classNameHelperElement}>
      {label} <span>{icon}</span>
    </span>
  );
};

const Home = () => {
  const [passwordStrengthSelected, setPasswordStrengthActive] =
    useState<PasswordStrengthSelectedProps>({
      name: "",
      emoji: "",
      percentage: 0,
    });
  const [openCloseSelectElement, setOpenCloseSelectElement] =
    useState<boolean>(false);
  const [isElementCreatedActive, setIsElementCreatedActive] =
    useState<boolean>(false);
  const [isPwdCopied, setIsPwdCopied] = useState<boolean>(false);
  const [password, createPassword] = useCreatePassword({
    passwordStrength,
    passwordStrengthSelected,
  });
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleOnClickSpan = (item: PasswordStrengthSelectedProps) => {
    setPasswordStrengthActive({ ...item });
    setOpenCloseSelectElement(false);
  };

  const handleOnClickSelectButton = () => {
    setOpenCloseSelectElement((prevState) => !prevState);
  };

  const handleOnClickCopy = () => {
    const value = inputRef?.current?.value ? inputRef?.current?.value : "----";
    navigator.clipboard.writeText(value);
    setIsPwdCopied(true);
  };

  const handleOnClickCreatePassword = () => {
    if (passwordStrengthSelected.name === "") return;

    console.log("----", passwordStrengthSelected);
    createPassword();
    setIsElementCreatedActive(true);
  };

  useEffect(() => {
    const idSetTimeout = setTimeout(() => {
      setIsElementCreatedActive(false);
    }, 1000);

    return () => {
      clearTimeout(idSetTimeout);
    };
  }, [isElementCreatedActive]);
  useEffect(() => {
    const idSetTimeout = setTimeout(() => {
      setIsPwdCopied(false);
    }, 1000);

    return () => {
      clearTimeout(idSetTimeout);
    };
  }, [isPwdCopied]);

  ///// low background: linear-gradient(90deg, rgba(234, 193, 234, 0.64) 0%, rgba(234, 193, 234, 0) 52%, rgba(255, 255, 255, 0) 90%);
  ///// medium background: linear-gradient(90deg, rgba(234, 193, 234, 0.78) 0%, rgba(234, 193, 234, 0) 52%, rgba(255, 255, 255, 0) 90%);
  ///// hard background: linear-gradient(90deg, rgba(234, 193, 234, 0.78) 0%, rgba(234, 193, 234, 0.76) 22%, rgba(255, 255, 255, 0) 95%);
  ///// veryhard background: linear-gradient(90deg, rgb(234, 193, 234) 0%, rgba(234, 193, 234, 0.76) 22%, rgba(255, 255, 255, 0) 95%);

  const createLinearGradient = (strengthSelected: string): string => {
    if (strengthSelected === "") return "";

    const [filteredItem] = gradients.filter(
      (gradient) => gradient.name === strengthSelected
    );
    return filteredItem.value;
  };

  return (
    <div className={style.home}>
      <TestResponsive />
      <h3 className={style["main-title"]}>Create your new password</h3>
      <div className={style["box-psw"]}>
        <span className={style["box-psw__psw"]}>
          {password ? password : "----"}
        </span>

        <button className={style["box-psw__btn"]} onClick={handleOnClickCopy}>
          Copy
          <HelperElement
            isActive={isPwdCopied}
            passwordExist={password}
            label="Copied"
            icon="📋"
            mainClassName="el-created--2"
          />
        </button>
        <input
          ref={inputRef}
          className={style.input}
          name="passwordCopy"
          type="text"
          value={password}
          readOnly
        />
      </div>

      <div className={`${style["card"]} ${style["card-1"]}`}>
        <p>You can create it with different security levels</p>
        <div className="span">
          <button
            className={`${style["select_btn"]}`}
            onClick={handleOnClickSelectButton}
          >
            {passwordStrengthSelected.name
              ? passwordStrengthSelected.name
              : "Please choose an option"}
            <span></span>
          </button>
          {openCloseSelectElement && (
            <div className={`${style["select_parent_span"]}`}>
              {passwordStrength.map((item: PasswordStrengthProps) => (
                <span
                  key={item.name}
                  className={
                    passwordStrengthSelected.name === item.name
                      ? `${style["select_span"]} ${style["select_span--active"]}`
                      : `${style["select_span"]}`
                  }
                  onClick={() => handleOnClickSpan({ ...item })}
                >
                  {item.name} <span>{item.emoji}</span>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={`${style["card"]} ${style["card-2"]}`}>
        <HelperElement
          isActive={isElementCreatedActive}
          passwordExist={password}
          label="Created"
          icon="🎉"
          mainClassName="el-created"
        />
        <button className={style.btn} onClick={handleOnClickCreatePassword}>
          Generate <br /> new password
          <span>🔑</span>
        </button>
      </div>
      <div className={`${style["card"]} ${style["card-3"]}`}>
        <div className={`${style["progress-bar__title"]}`}>
          <span>Security level:</span>
          <span>
            {passwordStrengthSelected.name
              ? passwordStrengthSelected.name
              : "-"}
            <span>
              {passwordStrengthSelected.emoji && passwordStrengthSelected.emoji}
            </span>
          </span>
        </div>
        <div className={`${style["progress-bar__box"]}`}>
          <span className={`${style["progress-bar__element"]}`}>
            <span
              className={`${style["progress-bar__lines"]} ${style["progress-bar__lines1"]}`}
            ></span>
            <span
              className={`${style["progress-bar__lines"]} ${style["progress-bar__lines2"]}`}
            ></span>
            <span
              className={`${style["progress-bar__lines"]} ${style["progress-bar__lines3"]}`}
            ></span>
            <span
              className={style["progress-bar__element-inner"]}
              style={{
                transform: `translateX(calc(${passwordStrengthSelected.percentage}%)) rotate(180deg)`,
                background: createLinearGradient(passwordStrengthSelected.name),
              }}
            ></span>
          </span>
          <span className={style["progress-bar__num"]}>
            {passwordStrengthSelected.percentage}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
