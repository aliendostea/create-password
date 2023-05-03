import { useState } from "react";

const UPPERCASE_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const SPECIAL_CHARACTERS: string[] = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
];

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

interface PasswordStrengthSelectedProps {
  name: string;
  emoji: string;
  percentage: number;
}

interface UseCreatePasswordProps {
  passwordStrength: PasswordStrengthProps[];
  passwordStrengthSelected: PasswordStrengthSelectedProps;
}

const useCreatePassword = ({
  passwordStrength,
  passwordStrengthSelected,
}: UseCreatePasswordProps) => {
  const [password, setPassword] = useState("");
  const date = new Date();

  const mathRandomToString = (
    toStringBase: number,
    substringNumber: number
  ): string => {
    return Math.random().toString(toStringBase).substring(2, substringNumber);
  };

  const getSpecialCharacters = (arrayCharacters: string[] | string): string => {
    const index: number = Math.floor(Math.random() * arrayCharacters.length);
    return arrayCharacters[index];
  };

  const setSpecialCharactersLength = (
    length: number,
    arrayCharacters: string[] | string
  ): string => {
    const newArray: string[] = [];

    for (let index = 0; index < length; index++) {
      const element: string = getSpecialCharacters(arrayCharacters);
      newArray.push(element);
    }
    return newArray.join("");
  };

  const setLettersUpperAndLowerCase = (
    specialCharactersLength: number
  ): string => {
    const stringLetters = setSpecialCharactersLength(
      specialCharactersLength,
      UPPERCASE_CHARACTERS
    ).split("");
    return `${stringLetters[0].toLowerCase()}${stringLetters[1].toLowerCase()}${
      stringLetters[2]
    }${stringLetters[3]}`;
  };

  const createPassword = () => {
    if (passwordStrengthSelected.name === "") return;

    const [selectedTypeStrength] = passwordStrength.filter(
      (item: PasswordStrengthProps) =>
        item.name === passwordStrengthSelected.name
    );
    const { generate, specialCharactersLength } = selectedTypeStrength;

    const comb1 = mathRandomToString(10, 5);
    const comb2 = mathRandomToString(36, 5);
    const comb3 = date.getMilliseconds().toString();
    const comb4 = setLettersUpperAndLowerCase(specialCharactersLength);
    const comb5 = setSpecialCharactersLength(
      specialCharactersLength,
      SPECIAL_CHARACTERS
    );
    const comb6 = setSpecialCharactersLength(2, SPECIAL_CHARACTERS);
    const newPassword = generate({
      comb1,
      comb2,
      comb3,
      comb4,
      comb5,
      comb6,
    });
    setPassword(newPassword);
  };

  return [password, createPassword] as const;
};

export default useCreatePassword;
