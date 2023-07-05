import {
  StyledParagraph,
  StyledTitleFour,
} from '../../../styles/typography';
import { StyledImg, StyledLike, StyledDivCardPost, StyledFavoriteImage } from './style';
import Favorite from "../../../assets/icons/favorite.svg"

interface ICardPostProps {
  img: string;
  author: string;
  title: string;
}

export const PostInFocus = ({ img, author, title }: ICardPostProps) => {
  return (
    <StyledDivCardPost>
      <StyledParagraph fontStyle='sm'>Por: {author}</StyledParagraph>
      <StyledTitleFour fontStyle='sm'>{title}</StyledTitleFour>
      <StyledImg src={img} alt='Imagem' />
      <StyledLike>
        <StyledFavoriteImage src={Favorite} />
        <StyledParagraph fontStyle='sm'>
          Seja o primeiro a curtir este post
        </StyledParagraph>
      </StyledLike>
      <StyledParagraph fontStyle='lg' className='focusNoticeParagraph'>
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        </StyledParagraph>
    </StyledDivCardPost>
  );
};
