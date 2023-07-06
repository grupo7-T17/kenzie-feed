import {
  StyledHeader,
  StyledLogo,
  StyledDivIconButton,
  QuitButton,
} from './style';
import { StyledButtonLink } from '../../../styles/buttons';
import { IconUser } from '../IconUser';
import Logo from '../../../assets/logo.svg';
import Quit from '../../../assets/icons/quit.svg';
import { StyledLink } from '../../../styles/typography';
import { UserContext } from '../../../providers/UserContext';
import { useContext } from 'react';

interface iHeaderProps {
  buttonVisible?: boolean;
}

export const Header = ({ buttonVisible = true }: iHeaderProps) => {
  const { user, userLogout } = useContext(UserContext);
  const userLogged = user; // Definindo userLogged igual ao estado user

  return (
    <StyledHeader>
      <StyledLink to='/'>
        <StyledLogo src={Logo} alt='Logo da Kenzie Feed' />
      </StyledLink>
      {userLogged ? (
        <StyledDivIconButton>
          <IconUser letter='A' />
          {buttonVisible ? (
            <StyledButtonLink
              to='/dashboard'
              buttonType='outline'
              buttonSize='sm-min'
            >
              Dashboard
            </StyledButtonLink>
          ) : null}
          <StyledLink to='/login'>
            <QuitButton src={Quit} onClick={userLogout} />
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
