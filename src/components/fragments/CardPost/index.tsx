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
  import Error404 from '../../../assets/imgs/404.svg';
  
  interface iCardPostProps {
    img: string;
    author: string;
    title: string;
    postId: number;
  }
  
  export const CardPost = ({ img, author, title, postId }: iCardPostProps) => {
    const postUrl = `/notice/${postId}`;
  
    return (
      <StyledLiCardPost>
        <StyledDivImg>
          {img ? (
            <StyledImg src={img} alt='Imagem' />
          ) : (
            <StyledImg src={Error404} alt='Imagem' />
          )}
        </StyledDivImg>
        <StyledDivBottom>
          {author ? (
            <StyledParagraph fontStyle='sm'>Por: {author}</StyledParagraph>
          ) : (
            <StyledParagraph fontStyle='sm'>Por: Desconhecido</StyledParagraph>
          )}
          {title ? (
            <StyledTitleFour fontStyle='sm' className='noWrap'>{title}</StyledTitleFour>
          ) : (
            <StyledTitleFour fontStyle='sm'>Post sem título</StyledTitleFour>
          )}
        </StyledDivBottom>
        <StyledGapLink>
          <StyledParagraph fontStyle='sm'>
            <StyledLink to={postUrl}>Leia Mais</StyledLink>
          </StyledParagraph>
        </StyledGapLink>
      </StyledLiCardPost>
    );
  };
  