import { StyledTitleFour } from '../../../styles/typography';
import {
  StyledDivLeft,
  StyledDivRight,
  StyledLiCardEditPost,
  StyledEditImg,
  StyledIcon,
  StyledContainerEditImg,
} from './style';
import Pen from '../../../assets/icons/pen.svg';
import Bin from '../../../assets/icons/bin.svg';

interface iCardPostProps {
  img: string;
  title: string;
}

export const CardEditPost = ({ img, title }: iCardPostProps) => {
  return (
    <StyledLiCardEditPost>
      <StyledDivLeft>
        <StyledContainerEditImg>
          <StyledEditImg src={img} alt='Imagem' />
        </StyledContainerEditImg>
        <StyledTitleFour fontStyle='sm'>{title}</StyledTitleFour>
      </StyledDivLeft>
      <StyledDivRight>
        <StyledIcon src={Pen} />
        <StyledIcon src={Bin} />
      </StyledDivRight>
    </StyledLiCardEditPost>
  );
};
