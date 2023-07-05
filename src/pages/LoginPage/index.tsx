import { Footer } from '../../components/fragments/Footer';
import { Header } from '../../components/fragments/Header';
import { StyledContainerHeader, StyledContainerMain } from '../../styles/grid';
import welcome from '../../assets/imgs/welcome.svg';
import { StyledParagraph, StyledTitleOne } from '../../styles/typography';
import {
  StyledContainerLoginImage,
  StyledDivInputLogin,
  StyledDivLoginPage,
  StyledLinkLoginPage,
  StyledLoginImage,
} from './style';
import { StyledButton } from '../../styles/buttons';
import { StyledInput } from '../../styles/inputs';

export const LoginPage = () => {
  return (
    <StyledContainerMain>
      <StyledContainerHeader>
        <Header buttonVisible={false}/>
      </StyledContainerHeader>
      <StyledDivLoginPage>
        <StyledContainerLoginImage>
          <StyledLoginImage src={welcome} alt='Imagem de Pizza' />
        </StyledContainerLoginImage>
        <StyledDivInputLogin>
          <StyledTitleOne fontStyle='md'>Acesse o KenzieFeed</StyledTitleOne>
          <StyledParagraph fontStyle='sm'>
            Preencha os campos corretamente para fazer login
          </StyledParagraph>
          <StyledInput
            inputStyle='default'
            inputSize='md-max'
            placeholder='E-mail'
            className='width80'
          ></StyledInput>
          <StyledInput
            inputStyle='default'
            inputSize='md-max'
            placeholder='Senha'
            className='width80'
          ></StyledInput>
          <StyledButton buttonType='primary' buttonSize='md-max' className='width80'>
            Entrar
          </StyledButton>
          <StyledParagraph fontStyle='sm'>Não é cadastrado?</StyledParagraph>
          <StyledLinkLoginPage to='/register'>Cadastre-se</StyledLinkLoginPage>
        </StyledDivInputLogin>
      </StyledDivLoginPage>
      <Footer />
    </StyledContainerMain>
  );
};
