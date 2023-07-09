
import Modal from 'react-modal';
import closeModalIcon from '../../../../src/assets/icons/close-modal-icon.svg';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ModalContext } from '../../../providers/ModalContext';
import { StyledButton } from '../../../styles/buttons';
import { StyledTitleTwo, StyledParagraph } from '../../../styles/typography';
import { InputLabel } from '../../fragments/InputLabel';
import { TextareaLabel } from '../../fragments/TextareaLabel';
import { tNewPostFormValues, newPostSchema } from './NewPostModalSchema';
import { StyledModalContent } from './style';
import { NoticeContext } from '../../../providers/NoticesContext';

export const NewPostModal = () => {
  const { modalNewPost, customModalStyles, handleCloseModal } =
    useContext(ModalContext);
  const { createNewNotice} = useContext(NoticeContext);
 
  const { register,reset, handleSubmit, formState: { errors } } = useForm<tNewPostFormValues>({ resolver: zodResolver(newPostSchema) })
  
  const submit: SubmitHandler<tNewPostFormValues> = (dataForm) => {
    reset ()
   const getUser = localStorage.getItem('@USERID');
    const userId = Number (getUser)
   const owner : string = localStorage.getItem('@NAME') as string
    const newFormData = { userId:userId, owner:owner ,description :dataForm.description,image:dataForm.image, title:dataForm.title }
    createNewNotice (newFormData)
    handleCloseModal()
   
  }
 
  return (
    <>
      <Modal
        isOpen={modalNewPost}
        onRequestClose={handleCloseModal}
        style={customModalStyles}
      >
        <StyledModalContent>
          <StyledTitleTwo fontStyle='md'>Novo post</StyledTitleTwo>
          <form onSubmit={handleSubmit(submit)}>
            <InputLabel
              inputSize='md-max'
              inputStyle='default'
              placeholder='Título'
              {...register('title')}
              errors={errors.title?.message}
            />
            <InputLabel
              inputSize='md-max'
              inputStyle='default'
              placeholder='Imagem em destaque'
              {...register('image')}
              errors={errors.image?.message}
            />
            <TextareaLabel
              inputSize='md-max'
              inputStyle='default'
              placeholder='Conteúdo do post'
              {...register('description')}
              errors={errors.description?.message}
            />

          <StyledButton type='submit' buttonsize='md-min' buttontype='primary'>
            <StyledParagraph fontStyle='sm'>Criar post</StyledParagraph>
          </StyledButton>
          </form>

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
