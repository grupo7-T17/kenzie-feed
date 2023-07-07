import {
  StyledLink,
  StyledParagraph,
  StyledTitleFour,
} from '../../../styles/typography';
import {
  StyledDivBottom,
  StyledLiCardPost,
  StyledImg,
  StyledGapLink,
  StyledDivImg,
} from './style';
import Ops from '../../../assets/ops.svg';
interface iCardPostProps {
  key: number;
  img: string;
  author: string;
  title: string;
}

export const CardPost = ({ key, img, author, title }: iCardPostProps) => {
  return (
    <StyledLiCardPost key={key}>
      <StyledDivImg>
        {img ? (
          <StyledImg src={img} alt='Imagem' />
        ) : (
          <StyledImg src={Ops} alt='Imagem' />
        )}
      </StyledDivImg>
      <StyledDivBottom>
        {author ? (
          <StyledParagraph fontStyle='sm'>Por: {author}</StyledParagraph>
        ) : (
          <StyledParagraph fontStyle='sm'>Por: Desconhecido</StyledParagraph>
        )}
        {title ? (
          <StyledTitleFour fontStyle='sm'>{title}</StyledTitleFour>
        ) : (
          <StyledTitleFour fontStyle='sm'>Um título qualquer</StyledTitleFour>
        )}
      </StyledDivBottom>
      <StyledGapLink>
        <StyledParagraph fontStyle='sm'>
          <StyledLink to='/notice'>Leia Mais</StyledLink>
        </StyledParagraph>
      </StyledGapLink>
    </StyledLiCardPost>
  );
};
