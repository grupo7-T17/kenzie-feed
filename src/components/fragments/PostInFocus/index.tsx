import { useState } from 'react';
import {
  StyledParagraph,
  StyledTitleFour,
} from '../../../styles/typography';
import { StyledImg, StyledLike, StyledDivCardPost, StyledFavoriteImage,StyledDivBottom } from './style';
import Favorite from "../../../assets/icons/favorite.svg"
import FavoriteChange from "../../../assets/icons/favoritechange.svg"


interface ICardPostProps {
  img: string;
  author: string;
  title: string;
}

export const PostInFocus = ({ img, author, title }: ICardPostProps) => {
  const [likes, setLikes] = useState(0);
  const [control, setControl] = useState(false);

  const clickLike = () => {
      setLikes(likes + 1);
      setControl(true);
   
  };

  let Message;
  if (likes === 0) {
    Message = 'Seja o primeiro a curtir este post.';
  } else if (likes === 1) {
    Message = '1 curtida';
  } else {
    Message = `${likes} curtidas`;
  }

  const clickImageChange = control ? FavoriteChange : Favorite;

  return (
    <StyledDivCardPost>
      <StyledParagraph fontStyle='sm'>Por: {author}</StyledParagraph>
      <StyledTitleFour fontStyle='sm'>{title}</StyledTitleFour>
      <StyledImg src={img} alt='Imagem' />
      <StyledLike>
        <button onClick={clickLike}>
          <StyledFavoriteImage src={clickImageChange} />
        </button>
        <StyledParagraph fontStyle='sm'>{Message}</StyledParagraph>
      </StyledLike>
      <StyledParagraph fontStyle='lg' className='focusNoticeParagraph'>
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
      </StyledParagraph>
    </StyledDivCardPost>
  );
};
