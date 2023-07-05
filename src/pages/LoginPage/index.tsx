import { Header } from "../../components/fragments/Header";
import { StyledContainerHeader, StyledContainerMain } from "../../styles/grid";

export const LoginPage = () => {
    return(
      <StyledContainerMain>
        <StyledContainerHeader>
            <Header/>
        </StyledContainerHeader>   
      </StyledContainerMain>
    )
}