import { useState, useContext } from 'react';
import { StyledInput } from '../../../styles/inputs';
import { StyledFormLogin } from './style';
import { UserContext, iUserCredentials } from '../../../providers/UserContext';
import { toast } from 'react-toastify';
import { StyledParagraph } from '../../../styles/typography';
import { StyledButton } from '../../../styles/buttons';

export const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loginUser } = useContext(UserContext);

  const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const credentials: iUserCredentials = { email, password };
    loginUser(credentials).catch((error) => {
      toast.error(`Usuário ou senha incorretos`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      console.error(error);
    });
  };
  return (
    <StyledFormLogin>
      <StyledParagraph fontStyle='sm'>
        Preencha os campos corretamente para fazer login
      </StyledParagraph>
      <StyledInput
        inputStyle='default'
        inputSize='md-max'
        placeholder='E-mail'
        className='width80'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></StyledInput>
      <StyledInput
        inputStyle='default'
        inputSize='md-max'
        placeholder='Senha'
        className='width80'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></StyledInput>
      <StyledButton
        buttonType='primary'
        buttonSize='md-max'
        className='width80'
        onClick={handleLogin}
      >
        Entrar
      </StyledButton>
    </StyledFormLogin>
  );
};
