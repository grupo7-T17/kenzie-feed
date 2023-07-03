import { StyledTitle } from "../../../styles/typography";
import { StyledDivBottom, StyledLiCardPost, StyledImg } from "./style";

interface ICardPostProps {
   img: string;
   author: string;
   title: string;
}

export const CardPost = ({ img, author, title }: ICardPostProps) => {
   return (
      <StyledLiCardPost>
         <StyledImg src={img} alt="Imagem" />
         <StyledDivBottom>
            <StyledTitle fontStyle="sd">Por: {author}</StyledTitle>
            <StyledTitle fontStyle="md">{title}</StyledTitle>
            <StyledTitle fontStyle="sd">Leia mais</StyledTitle>
         </StyledDivBottom>
      </StyledLiCardPost>
   );
};
