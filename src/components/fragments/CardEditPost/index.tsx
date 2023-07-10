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
import { ModalContext } from '../../../providers/ModalContext';
import { DeletePostModal } from '../../structures/DeletingPostModal';

interface iCardPostProps {
  id: number;
  img: string;
  title: string;
  owner: string;
}

export const CardEditPost = ({ id, img, title, owner }: iCardPostProps) => {
  const { navigate } = useContext(UserContext);
  const { handleOpenDeleteModal } = useContext(ModalContext);

  const goToEditPage = () => {
    localStorage.setItem('@CARDINFO', JSON.stringify({ id: id, owner: owner }));
    localStorage.setItem('@CARDID', JSON.stringify(id));
    navigate('/edit');
  };

  const deleteCard = () => {
    localStorage.setItem('@CARDID', JSON.stringify(id));
    handleOpenDeleteModal();
  };

  return (
    <>
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
          <button onClick={deleteCard} type='button'>
            <StyledIcon src={Bin} />
          </button>
        </StyledDivRight>
      </StyledLiCardEditPost>
      <DeletePostModal />
    </>
  );
};
