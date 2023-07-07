import { SubmitHandler, useForm } from 'react-hook-form';
import { StyledButton } from '../../../../styles/buttons';
import { InputLabel } from '../../../fragments/InputLabel';
import { TextareaLabel } from '../../../fragments/TextareaLabel';
import { StyledEditingFormContainer } from './style';
import { zodResolver } from '@hookform/resolvers/zod';
import { editingSchema, tEditingFormValues } from './EditingSchema';

export const EditingNoticeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tEditingFormValues>({
    resolver: zodResolver(editingSchema),
  });

  const submit: SubmitHandler<tEditingFormValues> = (formData) => {
    console.log(formData); // printa titulo, link de imagem e descrição
  };

  return (
    <StyledEditingFormContainer onSubmit={handleSubmit(submit)}>
      <InputLabel
        label='Título'
        inputSize='md-max'
        inputStyle='borderless'
        {...register('title')}
        errors={errors.title?.message}
      />
      <InputLabel
        label='Imagem em destaque'
        inputSize='md-max'
        inputStyle='borderless'
        {...register('image')}
        errors={errors.image?.message}
      />
      <TextareaLabel
        label='Conteúdo'
        inputSize='md-max'
        inputStyle='borderless'
        {...register('description')}
        errors={errors.description?.message}
      />
      <StyledButton type='submit' buttonSize='md-min' buttonType='primary'>
        Salvar post
      </StyledButton>
    </StyledEditingFormContainer>
  );
};
