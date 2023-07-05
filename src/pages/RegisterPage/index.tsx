import { Footer } from "../../components/fragments/Footer";
import { Header } from "../../components/fragments/Header";
import { ContainerRegister } from "../../components/structures/ContainerRegister";
import { StyledContainerHeader } from "../../styles/grid";
import { RegisterPageContainer } from "./style";
import { StyledRegisterFooter } from "./style"

export const RegisterPage = () => {
    return (
        <RegisterPageContainer>
        <StyledContainerHeader>
            <Header/>
        </StyledContainerHeader>
            <ContainerRegister />
            
            <StyledRegisterFooter>
                 <Footer/> 
            </StyledRegisterFooter>
            
      </RegisterPageContainer>
   

);
};
