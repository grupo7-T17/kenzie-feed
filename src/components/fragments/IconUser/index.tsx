import { StyledIconLetter } from "./style";

interface iIconUserProps {
  letter: string;
}

export const IconUser = ({ letter }: iIconUserProps) => {
  return (
    <StyledIconLetter>
      {letter}
    </StyledIconLetter>
  );
};