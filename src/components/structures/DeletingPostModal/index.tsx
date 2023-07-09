import Modal from 'react-modal';
import closeModalIcon from '../../../../src/assets/icons/close-modal-icon.svg';
import { useContext } from 'react';
import { ModalContext } from '../../../providers/ModalContext';
import { StyledButton } from '../../../styles/buttons';
import { StyledTitleTwo } from '../../../styles/typography';
import { StyledModalContent } from './style';
import { NoticeContext } from '../../../providers/NoticesContext';

export const DeletePostModal = () => {
  const { modalDelete, customModalStyles, handleCloseDeleteModal } =
    useContext(ModalContext);
  const { deletePost } = useContext(NoticeContext);

  const id = localStorage.getItem('@CARDID');
  const idCard = Number(id);

  const submit = () => {
    deletePost(idCard);
    handleCloseDeleteModal();
  };

  return (
    <>
      <Modal
        isOpen={modalDelete}
        onRequestClose={handleCloseDeleteModal}
        style={customModalStyles}
      >
        <StyledModalContent>
          <StyledTitleTwo fontStyle='md'>
            Você deseja excluir este post?
          </StyledTitleTwo>
          <div>
            <StyledButton
              onClick={submit}
              buttonsize='sm-max'
              buttontype='primary'
            >
              Sim
            </StyledButton>
            <StyledButton
              onClick={handleCloseDeleteModal}
              buttonsize='sm-max'
              buttontype='primary'
            >
              Não
            </StyledButton>
          </div>
          <button type='button' onClick={handleCloseDeleteModal}>
            <img
              src={closeModalIcon}
              alt='icone de fechar o modal da pagina de deletar post'
            />
          </button>
        </StyledModalContent>
      </Modal>
    </>
  );
};
