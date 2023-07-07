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

interface iCardPostProps {
  id: number;
  key: number;
  img: string;
  title: string;
  owner: string | null;
}

export const CardEditPost = ({
  id,
  key,
  img,
  title,
  owner,
}: iCardPostProps) => {
  const { navigate } = useContext(UserContext);

  if (!owner) {
    owner = null;
  }

  const goToEditPage = () => {
    localStorage.setItem('@CARDINFO', JSON.stringify({ id: id, owner: owner }));
    navigate('/edit');
  };

  // o delete envia as informaçoes necessarias para o local storage
  const deletePost = () => {
    localStorage.setItem('@CARDINFO', JSON.stringify({ id: id, owner: owner }));
    // funçao de delete aqui
  };

  return (
    <StyledLiCardEditPost key={key}>
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
        <button onClick={deletePost} type='button'>
          <StyledIcon src={Bin} />
        </button>
      </StyledDivRight>
    </StyledLiCardEditPost>
  );
};
