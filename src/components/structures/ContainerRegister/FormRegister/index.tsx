import { StyledButton } from '../../../../styles/buttons';
import { StyledParagraph, StyledTitleOne } from '../../../../styles/typography';
import { InputLabel } from '../../../fragments/InputLabel';
import {
  StyledFormRegister,
  StyledRegisterFormButton,
  StyledRegisterInput,
} from './style';

export const FormRegister = () => {
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
        />
        <InputLabel
          placeholder='E-mail'
          inputSize='md-min'
          inputStyle='default'
        />
        <InputLabel
          placeholder='Senha'
          inputSize='md-min'
          inputStyle='default'
        />
        <InputLabel
          placeholder='Confirmar senha'
          inputSize='md-min'
          inputStyle='default'
        />
      </StyledRegisterInput>
      <StyledRegisterFormButton>
        <StyledButton buttonType='primary' buttonSize='md-min'>
          Cadastrar-se
        </StyledButton>
      </StyledRegisterFormButton>
    </StyledFormRegister>
  );
};
