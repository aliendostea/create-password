export interface CombinationElementsProps {
  comb1: string;
  comb2: string;
  comb3?: string;
  comb4?: string;
  comb5?: string;
  comb6?: string;
}

export interface PasswordStrengthProps {
  name: string;
  specialCharactersLength: number;
  emoji: string;
  percentage: number;
  generate: (props: CombinationElementsProps) => string;
}

export const passwordStrength: PasswordStrengthProps[] = [
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
