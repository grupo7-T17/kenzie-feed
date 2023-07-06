import { useState, useContext } from 'react';
import { StyledButton } from '../../../../styles/buttons';
import { StyledParagraph, StyledTitleOne } from '../../../../styles/typography';
import { InputLabel } from '../../../fragments/InputLabel';
import {
  StyledFormRegister,
  StyledRegisterFormButton,
  StyledRegisterInput,
} from './style';
import {
  UserContext,
  iUserRegisterLogin,
} from '../../../../providers/UserContext';

export const FormRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { registerUser } = useContext(UserContext);

  const handleRegister = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (password === confirmPassword) {
      const user: iUserRegisterLogin = { name, email, password };
      registerUser(user);
    } else {
      console.log('As senhas não coincidem');
    }
  };

  return (
    <StyledFormRegister>
      <StyledTitleOne fontStyle='md'>Cadastre um usuário</StyledTitleOne>
      <StyledParagraph fontStyle='lg'>
        Preencha os campos corretamente para fazer login
      </StyledParagraph>
      <StyledRegisterInput>
        <InputLabel
          placeholder='Nome'
          inputSize='md-min'
          inputStyle='default'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputLabel
          placeholder='E-mail'
          inputSize='md-min'
          inputStyle='default'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputLabel
          placeholder='Senha'
          inputSize='md-min'
          inputStyle='default'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputLabel
          placeholder='Confirmar senha'
          inputSize='md-min'
          inputStyle='default'
          type='password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </StyledRegisterInput>
      <StyledRegisterFormButton>
        <StyledButton
          buttonType='primary'
          buttonSize='md-min'
          onClick={handleRegister}
        >
          Cadastrar-se
        </StyledButton>
      </StyledRegisterFormButton>
    </StyledFormRegister>
  );
};
