
import { StyledButton } from "../../../../styles/buttons";
import { StyledLink, StyledParagraph, StyledTitleOne } from "../../../../styles/typography";
import { InputLabel } from "../../../fragments/InputLabel";
import { StyledFormLogin, StyledParagraphForm } from "./style";

export const FormLogin = () => {

  return (
    <StyledFormLogin>
      
      <StyledTitleOne fontStyle="md">Acessar o KenzieFeed</StyledTitleOne>
      <StyledParagraph fontStyle="lg">Preencha os campos corretamente para fazer login</StyledParagraph>
      
      <InputLabel 
       placeholder='E-mail' 
       inputSize='md-max' 
       inputStyle='default'/>
      <InputLabel
       placeholder='Senha'
       inputSize='md-max'
       inputStyle='default'
      />

      <StyledButton buttonType="primary" buttonSize="md-max">Entrar</StyledButton>
      <StyledParagraphForm>
      <StyledParagraph fontStyle="lg">Não é cadastrado?</StyledParagraph>
      <StyledParagraph fontStyle="lg"> <StyledLink to='/'>Cadastre-se</StyledLink></StyledParagraph>
      </StyledParagraphForm>
     
    
    
   </StyledFormLogin>
      
      
  );
};
