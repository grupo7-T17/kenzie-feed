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
import { FormLogin } from '../../components/structures/FormLogin';

export const LoginPage = () => {
  return (
    <StyledContainerMain>
      <StyledContainerHeader>
        <Header buttonVisible={false} />
      </StyledContainerHeader>
      <StyledDivLoginPage>
        <StyledContainerLoginImage>
          <StyledLoginImage src={welcome} alt='Imagem de xícara e notebook' />
        </StyledContainerLoginImage>
        <StyledDivInputLogin>
          <StyledTitleOne fontStyle='md'>Acesse o KenzieFeed</StyledTitleOne>
          <FormLogin />
          <StyledParagraph fontStyle='sm'>Não é cadastrado?</StyledParagraph>
          <StyledLinkLoginPage to='/register'>Cadastre-se</StyledLinkLoginPage>
        </StyledDivInputLogin>
      </StyledDivLoginPage>
      <Footer />
    </StyledContainerMain>
  );
};
