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
import { useContext } from 'react';
import { UserContext } from '../../../providers/UserContext';
import { NoticeContext } from '../../../providers/NoticesContext';

interface iCardPostProps {
  id: number;
  img: string;
  title: string;
  owner: string;
}

export const CardEditPost = ({ id, img, title, owner }: iCardPostProps) => {
  const { navigate } = useContext(UserContext);
  const { deletePost } = useContext(NoticeContext);

  const goToEditPage = () => {
    localStorage.setItem('@CARDINFO', JSON.stringify({ id: id, owner: owner }));
    navigate('/edit');
  };

  const deleteCard = (id: number) => {
    localStorage.setItem('@CARDID', JSON.stringify(id));
    deletePost(id);
  };

  return (
    <StyledLiCardEditPost>
      <StyledDivLeft>
        <StyledContainerEditImg>
          <StyledEditImg src={img} alt='Imagem' />
        </StyledContainerEditImg>
        <StyledTitleFour fontStyle='sm'>{title}</StyledTitleFour>
      </StyledDivLeft>
      <StyledDivRight>
        <button onClick={goToEditPage} type='button'>
          <StyledIcon src={Pen} />
        </button>
        <button onClick={() => deleteCard(id)} type='button'>
          <StyledIcon src={Bin} />
        </button>
      </StyledDivRight>
    </StyledLiCardEditPost>
  );
};
