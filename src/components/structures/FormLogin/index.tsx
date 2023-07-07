import { StyledFormLogin } from './style';
import { StyledParagraph } from '../../../styles/typography';
import { StyledButton } from '../../../styles/buttons';
import { loginSchema, tLoginFormValues } from './LoginSchema';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputLabel } from '../../fragments/InputLabel';

export const FormLogin = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<tLoginFormValues>({
      resolver: zodResolver(loginSchema),
    });

    const submit: SubmitHandler<tLoginFormValues> = (formData) => {
      console.log(formData); // printa email e senha
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
      <StyledButton
        type='submit'
        buttonType='primary'
        buttonSize='md-max'
      >
        Entrar
      </StyledButton>
    </StyledFormLogin>
  );
};
