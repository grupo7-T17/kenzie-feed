import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { StyledButton } from '../../../../styles/buttons';
import { StyledParagraph, StyledTitleOne } from '../../../../styles/typography';
import { InputLabel } from '../../../fragments/InputLabel';
import {
  StyledFormRegister,
  StyledRegisterFormButton,
  StyledRegisterInput,
} from './style';
import { UserContext } from '../../../../providers/UserContext';
import { tRegisterFormSchema, registerFormSchema } from './SchemaFormregister';

export const FormRegister = () => {
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tRegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  });

  const submit: SubmitHandler<tRegisterFormSchema> = (formData) => {
    registerUser(formData);
  };

  return (
    <StyledFormRegister onSubmit={handleSubmit(submit)}>
      <StyledTitleOne fontStyle='md'>Cadastre um usuário</StyledTitleOne>
      <StyledParagraph fontStyle='lg'>
        Preencha os campos corretamente para fazer login
      </StyledParagraph>
      <StyledRegisterInput>
        <InputLabel
          placeholder='Nome'
          inputSize='md-min'
          inputStyle='default'
          {...register('name')}
          errors={errors.name?.message}
        />
        <InputLabel
          placeholder='E-mail'
          inputSize='md-min'
          inputStyle='default'
          {...register('email')}
          errors={errors.email?.message}
        />
        <InputLabel
          placeholder='Senha'
          inputSize='md-min'
          inputStyle='default'
          type='password'
          {...register('password')}
          errors={errors.password?.message}
        />
        <InputLabel
          placeholder='Confirmar senha'
          inputSize='md-min'
          inputStyle='default'
          type='password'
          {...register('confirmPassword')}
          errors={errors.confirmPassword?.message}
        />
      </StyledRegisterInput>
      <StyledRegisterFormButton>
        <StyledButton type='submit' buttontype='primary' buttonsize='md-min'>
          Cadastrar-se
        </StyledButton>
      </StyledRegisterFormButton>
    </StyledFormRegister>
  );
};
