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
} from './style';

interface ICardPostProps {
  img: string;
  author: string;
  title: string;
}

export const CardPost = ({ img, author, title }: ICardPostProps) => {
  return (
    <StyledLiCardPost>
      <StyledImg src={img} alt='Imagem' />
      <StyledDivBottom>
        <StyledParagraph fontStyle='sm'>Por: {author}</StyledParagraph>
        <StyledTitleFour fontStyle='sm'>{title}</StyledTitleFour>
      </StyledDivBottom>
      <StyledGapLink>
          <StyledParagraph fontStyle='sm'>
            <StyledLink to='/'>Leia Mais</StyledLink>
          </StyledParagraph>
        </StyledGapLink>
    </StyledLiCardPost>
  );
};
