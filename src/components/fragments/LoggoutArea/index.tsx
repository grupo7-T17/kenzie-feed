import { StyledButton } from '../../../styles/buttons';
import { StyledParagraph, StyledLink } from '../../../styles/typography';
import exitIcon from '../../../../src/assets/icons/exit-icon.svg';
import { StyledLoggoutContainer } from './style';

export const LoggoutArea = () => {
  return (
    <StyledLoggoutContainer>
      <StyledParagraph fontStyle='sm'>A</StyledParagraph>
      <StyledButton buttonSize='sm-min' buttonType='outline'>
        Dashboard
      </StyledButton>
      <StyledLink to='#'>
        <figure>
          <img src={exitIcon} alt='deslogar sair voltar para a pagina home' />
        </figure>
      </StyledLink>
    </StyledLoggoutContainer>
  );
};
