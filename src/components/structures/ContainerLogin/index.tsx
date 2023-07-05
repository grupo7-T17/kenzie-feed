import { StyledContainerLogin } from "../../../styles/grid";
import { FormLogin } from "./Form";
import { StyledImgLogin } from "./style";
import { StyledFormDiv } from "./style"
import  FormImg from "../../../assets/imgs/FormImg.png"



export const LoginContainer = () => {
  return (
      <StyledContainerLogin>
          <StyledFormDiv>
              <StyledImgLogin src={FormImg}/>
          <FormLogin/>
          </StyledFormDiv>
         
         
          
     </StyledContainerLogin>
 );
};
