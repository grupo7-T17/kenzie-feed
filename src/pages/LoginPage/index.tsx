import { Footer } from "../../components/fragments/Footer";
import { Header } from "../../components/fragments/Header";
import { StyledContainerHeader, StyledContainerMain } from "../../styles/grid";
import pizza from "../../assets/imgs/teste-pizza.png"
import { StyledParagraph, StyledTitleOne } from "../../styles/typography";
import { StyledDivInputLogin, StyledDivLoginPage, StyledLinkLoginPage } from "./style";
import { StyledButton } from "../../styles/buttons";
import { StyledInput } from "../../styles/inputs";
import { Link } from "react-router-dom";

export const LoginPage = () => {
    return(
      <StyledContainerMain>
        <StyledContainerHeader>
            <Header/>
        </StyledContainerHeader>
        <StyledDivLoginPage>
            <img src={pizza} alt="" />
            <StyledDivInputLogin>
            <StyledTitleOne fontStyle='md'>
            Acesse o KenzieFeed
            </StyledTitleOne>
            <StyledParagraph fontStyle='sm'>
            Preencha os campos corretamente para fazer login
            </StyledParagraph>
                <StyledInput inputStyle = 'default' inputSize = 'md-max' placeholder="E-mail"></StyledInput>
                <StyledInput inputStyle = 'default' inputSize = 'md-max' placeholder="Senha"></StyledInput>
                <StyledButton buttonType='primary' buttonSize='md-max'>Entrar</StyledButton>
                <StyledParagraph fontStyle='sm'>
                Não é cadastrado?
                </StyledParagraph>
                <StyledLinkLoginPage to="/register">Cadastre-se</StyledLinkLoginPage>
            </StyledDivInputLogin>
        </StyledDivLoginPage>
        <Footer/>
      </StyledContainerMain>
    )
}