import { StyledHeader, StyledIcon } from './style';
import { StyledButton } from '../../../styles/buttons';
import Logo from '../../../assets/logo.svg';
import { LoggoutArea } from '../LoggoutArea';
import { StyledContainerHeader } from '../../../styles/grid';

interface iUserLogged {
  userLogged?: boolean;
}

export const Header = ({ userLogged }: iUserLogged) => {
  return (
    <StyledContainerHeader>
      <StyledHeader>
        <StyledIcon src={Logo} alt='Imagem' />
        {userLogged ? (
          <LoggoutArea />
        ) : (
          <StyledButton buttonType='primary' buttonSize='sm-min'>
            Acessar
          </StyledButton>
        )}
      </StyledHeader>
    </StyledContainerHeader>
  );
};
