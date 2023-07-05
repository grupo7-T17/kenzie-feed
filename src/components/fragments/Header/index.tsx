import {
  StyledHeader,
  StyledLogo,
  StyledDivIconButton,
  QuitButton,
} from './style';
import { StyledButton, StyledButtonLink } from '../../../styles/buttons';
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
      {userLogged ? (
        <StyledDivIconButton>
          <IconUser letter='A' />
          {buttonVisible ? (
            <StyledButton buttonType='outline' buttonSize='sm-min'>
              Dashboard
            </StyledButton>
          ) : null}
          <StyledLink to='/login'>
            <QuitButton src={Quit} />
          </StyledLink>
        </StyledDivIconButton>
      ) : (
        <>
          {buttonVisible ? (
            <StyledButtonLink
              to='/login'
              buttonType='primary'
              buttonSize='sm-min'
            >
              Acessar
            </StyledButtonLink>
          ) : null}
        </>
      )}
    </StyledHeader>
  );
};
