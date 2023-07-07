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
  const { userLogout } = useContext(UserContext);
  const userLogged = Boolean(localStorage.getItem('@USERLOGGED'));
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
              buttontype='outline'
              buttonsize='sm-min'
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
              buttontype='primary'
              buttonsize='sm-min'
            >
              Acessar
            </StyledButtonLink>
          ) : null}
        </>
      )}
    </StyledHeader>
  );
};
