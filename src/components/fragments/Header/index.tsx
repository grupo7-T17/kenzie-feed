import {
  StyledHeader,
  StyledLogo,
  StyledDivIconButton,
  QuitButton,
} from './style';
import { StyledButton } from '../../../styles/buttons';
import { IconUser } from '../IconUser';
import Logo from '../../../assets/logo.svg';
import Quit from '../../../assets/icons/quit.svg';
import { StyledLink } from '../../../styles/typography';

interface iHeaderProps {
  buttonVisible?: boolean;
  userLogged?: boolean;
}

export const Header = ({
  userLogged = false,
  buttonVisible = true,
}: iHeaderProps) => {
  return (
    <StyledHeader>
      <StyledLink to='/'>
        <StyledLogo src={Logo} alt='Logo da Kenzie Feed' />
      </StyledLink>
      {buttonVisible ? (
        userLogged ? (
          <StyledDivIconButton>
            <IconUser letter='A' />
            <StyledButton buttonType='outline' buttonSize='sm-min'>
              Dashboard
            </StyledButton>
            <QuitButton src={Quit} />
          </StyledDivIconButton>
        ) : (
          <StyledLink to='/login'>
            <StyledButton buttonType='primary' buttonSize='sm-min'>
              Acessar
            </StyledButton>
          </StyledLink>
        )
      ) : null}
    </StyledHeader>
  );
};
