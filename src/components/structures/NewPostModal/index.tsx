import { useContext } from 'react';
import { ModalContext } from '../../../providers/ModalContext';
import Modal from 'react-modal';
import { StyledModalContent } from './style';
import { StyledParagraph, StyledTitleTwo } from '../../../styles/typography';
import { InputLabel } from '../../fragments/InputLabel';
import { TextareaLabel } from '../../fragments/TextareaLabel';
import { StyledButton } from '../../../styles/buttons';
import closeModalIcon from '../../../../src/assets/icons/close-modal-icon.svg';

export const NewPostModal = () => {
  const { modalNewPost, customModalStyles, handleCloseModal } =
    useContext(ModalContext);

  return (
    <>
      <Modal
        isOpen={modalNewPost}
        onRequestClose={handleCloseModal}
        style={customModalStyles}
      >
        <StyledModalContent>
          <StyledTitleTwo fontStyle='md'>Novo post</StyledTitleTwo>
          <form>
            <InputLabel
              inputSize='md-max'
              inputStyle='default'
              placeholder='Título'
            />
            <InputLabel
              inputSize='md-max'
              inputStyle='default'
              placeholder='Imagem em destaque'
            />
            <TextareaLabel
              inputSize='md-max'
              inputStyle='default'
              placeholder='Conteúdo do post'
            />
          </form>
          <StyledButton type='submit' buttonsize='md-min' buttontype='primary'>
            <StyledParagraph fontStyle='sm'>Criar post</StyledParagraph>
          </StyledButton>
          <button type='button' onClick={handleCloseModal}>
            <figure>
              <img
                src={closeModalIcon}
                alt='botão de fechar modal de criaçao do novo post'
              />
            </figure>
          </button>
        </StyledModalContent>
      </Modal>
    </>
  );
};
