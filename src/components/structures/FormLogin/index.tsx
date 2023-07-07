import { StyledFormLogin } from './style';
import { StyledParagraph } from '../../../styles/typography';
import { StyledButton } from '../../../styles/buttons';
import { loginSchema, tLoginFormValues } from './LoginSchema';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputLabel } from '../../fragments/InputLabel';
import { UserContext } from '../../../providers/UserContext';
import { useContext } from 'react';

export const FormLogin = () => {
    const { loginUser } = useContext(UserContext);
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<tLoginFormValues>({
      resolver: zodResolver(loginSchema),
    });

    const submit: SubmitHandler<tLoginFormValues> = (formData) => {
        loginUser(formData);
    };

  return (
    <StyledFormLogin onSubmit={handleSubmit(submit)}>
      <StyledParagraph fontStyle='sm'>
        Preencha os campos corretamente para fazer login
      </StyledParagraph>
      <InputLabel
        inputStyle='default'
        inputSize='md-max'
        placeholder='E-mail'
        {...register('email')}
        errors={errors.email?.message}
      />
      <InputLabel
        inputStyle='default'
        inputSize='md-max'
        placeholder='Senha'
        type='password'
        {...register('password')}
        errors={errors.password?.message}
      />
      <StyledButton type='submit' buttontype='primary' buttonsize='md-max'>
        Entrar
      </StyledButton>
    </StyledFormLogin>
  );
};
