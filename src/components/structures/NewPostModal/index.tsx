import { useContext } from "react";
import { ModalContext } from "../../../providers/ModalContext";
import { StyledButton } from "../../../styles/buttons";
import { StyledTitleTwo, StyledParagraph } from "../../../styles/typography";
import { InputLabel } from "../../fragments/InputLabel";
import { TextareaLabel } from "../../fragments/TextareaLabel";
import { StyledModalContent } from "./style";
import Modal from 'react-modal';
import closeModalIcon from '../../../../src/assets/icons/close-modal-icon.svg';

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NoticeContext } from "../../../providers/NoticesContext";
import { creatingSchema, tCreatingFormValues } from "./CreatingSchema";

export const NewPostModal = () => {
  const { modalNewPost, customModalStyles, handleCloseModal } =
    useContext(ModalContext);

    const { createNewNotice } = useContext(NoticeContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<tCreatingFormValues>({
        resolver: zodResolver(creatingSchema),
      });
    
      const submit: SubmitHandler<tCreatingFormValues> = (formData) => {

        const user = localStorage.getItem('@USERID');
        const userId = Number (user)
        const owner : string = localStorage.getItem('@NAME') as string
        const newFormData = { 
            userId:userId, owner:owner,
            description :formData.description,
            image:formData.image,
            title:formData.title }
         createNewNotice (newFormData)
         handleCloseModal()
      };
    

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
