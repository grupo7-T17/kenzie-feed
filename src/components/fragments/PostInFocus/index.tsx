import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledParagraph, StyledTitleFour } from '../../../styles/typography';
import {
  StyledImg,
  StyledLike,
  StyledDivCardPost,
  StyledFavoriteImage,
  StyledImgContainer,
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
  const { like, likePost, getPostById, dislikePost } =
    useContext(NoticeContext);
  const [numLikes, setNumLikes] = useState(likes);
  const [liked, setLiked] = useState<boolean>(false);
  const userId = localStorage.getItem('@USERID');

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPostById(postId);
      if (post) {
        setLiked(Boolean(like && like.postId === postId));
        setNumLikes(post.likes.length);
      }
    };
    fetchPost();
  }, [like, getPostById, postId]);

  const clickLike = () => {
    if (!userId) {
      window.location.href = '/login';
      return;
    }

    if (liked) {
      dislikePost();
      return;
    }

    likePost(postId);
    setNumLikes((prevNumLikes) => prevNumLikes + 1);
    setLiked(true);
  };

  useEffect(() => {
    if (liked) {
      setNumLikes((prevNumLikes) => prevNumLikes + 1);
    }
  }, [liked]);

  const clickImageChange = liked ? FavoriteChange : Favorite;

  let message;
  if (!userId) {
    message = (
      <Link to='/login' style={{ color: 'inherit', textDecoration: 'none' }}>
        Logue para curtir
      </Link>
    );
  } else if (numLikes === 0) {
    message = 'Seja o primeiro a curtir este post';
  } else if (numLikes === 1) {
    message = '1 curtida';
  } else {
    message = `${numLikes} curtidas`;
  }

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
