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

const user = false;

interface iHeaderProps {
  button?: boolean;
}

export const Header = ({ button }: iHeaderProps) => {
  return (
    <StyledHeader>
      <StyledLogo src={Logo} alt='Logo da Kenzie Feed' />

      {button ? (
        user ? (
          <StyledDivIconButton>
            <IconUser letter='A' />
            <StyledButton buttonType='outline' buttonSize='sm-min'>
              Dashboard
            </StyledButton>
            <QuitButton src={Quit} />
          </StyledDivIconButton>
        ) : (
          <StyledButton buttonType='primary' buttonSize='sm-min'>
            Acessar
          </StyledButton>
        )
      ) : null}
    </StyledHeader>
  );
};
