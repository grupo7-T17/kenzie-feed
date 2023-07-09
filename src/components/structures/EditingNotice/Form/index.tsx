import { SubmitHandler, useForm } from 'react-hook-form';
import { StyledButton } from '../../../../styles/buttons';
import { InputLabel } from '../../../fragments/InputLabel';
import { TextareaLabel } from '../../../fragments/TextareaLabel';
import { StyledEditingFormContainer } from './style';
import { zodResolver } from '@hookform/resolvers/zod';
import { editingSchema, tEditingFormValues } from './EditingSchema';
import { useContext } from 'react';
import { NoticeContext } from '../../../../providers/NoticesContext';
import { UserContext } from '../../../../providers/UserContext';

export const EditingNoticeForm = () => {
  const { navigate } = useContext(UserContext);
  const { updateNotice } = useContext(NoticeContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tEditingFormValues>({
    resolver: zodResolver(editingSchema),
  });

  const submit: SubmitHandler<tEditingFormValues> = (formData) => {
    const postId = localStorage.getItem('@CARDID');
    const user = localStorage.getItem('@USERID');
    const userId = Number(user);
    const owner: string = localStorage.getItem('@NAME') as string;
    const newFormData = {
      userId: userId,
      owner: owner,
      description: formData.description,
      image: formData.image,
      title: formData.title,
    };
    updateNotice(newFormData, Number(postId));
    navigate('/dashboard');
  };

  return (
    <StyledEditingFormContainer onSubmit={handleSubmit(submit)}>
      <InputLabel
        label='Título'
        inputSize='md-max'
        inputStyle='borderless'
        placeholder='Informe um título'
        {...register('title')}
        errors={errors.title?.message}
      />
      <InputLabel
        label='Imagem em destaque'
        inputSize='md-max'
        inputStyle='borderless'
        placeholder='Cole um link de imagem'
        {...register('image')}
        errors={errors.image?.message}
      />
      <TextareaLabel
        label='Conteúdo'
        inputSize='md-max'
        inputStyle='borderless'
        placeholder='Escreva um conteúdo'
        {...register('description')}
        errors={errors.description?.message}
      />
      <StyledButton type='submit' buttonsize='md-min' buttontype='primary'>
        Salvar post
      </StyledButton>
    </StyledEditingFormContainer>
  );
};
