import { StyledHeader, StyledIcon } from './style';
import { StyledButton } from '../../../styles/buttons';
import Logo from '../../../assets/logo.svg';

export const Header = () => {
  return (
    <StyledHeader>
      <StyledIcon src={Logo} alt='Imagem' />
      <StyledButton buttonType='primary' buttonSize='md-max'>Acessar</StyledButton>
    </StyledHeader>
  );
};
