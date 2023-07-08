import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StyledParagraph, StyledTitleFour } from '../../../styles/typography';
import {
  StyledImg,
  StyledLike,
  StyledDivCardPost,
  StyledFavoriteImage,
  StyledImgContainer
} from './style';
import Favorite from '../../../assets/icons/favorite.svg';
import FavoriteChange from '../../../assets/icons/favoritechange.svg';
import { NoticeContext } from '../../../providers/NoticesContext';

interface ICardPostProps {
  img: string;
  author: string;
  title: string;
  description: string;
  postId: number;
  likes: number;
}

export const PostInFocus = ({
  img,
  author,
  title,
  description,
  postId,
  likes,
}: ICardPostProps) => {
  const { like, likePost, dislikePost } = useContext(NoticeContext);
  const userId = localStorage.getItem('@USERID');

  const clickLike = () => {
    if (!userId) {
      window.location.href = '/login';
      return;
    }

    if (like && like.postId === postId) {
      dislikePost(postId);
    } else {
      likePost(postId);
    }
  };

  const control = like && like.postId === postId;

  let message;
  if (!userId) {
    message = (
      <Link to='/login' style={{ color: 'inherit', textDecoration: 'none' }}>
        Logue para curtir
      </Link>
    );
  } else if (likes === 0) {
    message = 'Seja o primeiro a curtir este post';
  } else if (likes === 1) {
    message = '1 curtida';
  } else {
    message = `${likes} curtidas`;
  }

  const clickImageChange = control ? FavoriteChange : Favorite;

  return (
    <StyledDivCardPost>
      <StyledParagraph fontStyle='sm'>Por: {author}</StyledParagraph>
      <StyledTitleFour fontStyle='sm'>{title}</StyledTitleFour>
      <StyledImgContainer>
        <StyledImg src={img} alt='Imagem' />
      </StyledImgContainer>
      <StyledLike>
        <StyledFavoriteImage src={clickImageChange} onClick={clickLike} />
        <StyledParagraph fontStyle='sm'>{message}</StyledParagraph>
      </StyledLike>
      <StyledParagraph fontStyle='lg' className='focusNoticeParagraph'>
        {description}
      </StyledParagraph>
    </StyledDivCardPost>
  );
};
