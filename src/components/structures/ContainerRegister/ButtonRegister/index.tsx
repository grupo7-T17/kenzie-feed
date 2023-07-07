import { StyledButtonLink } from '../../../../styles/buttons';
import { StyledButtonBackRegister } from './style';
import Seta from '../../../../assets/icons/left-arrow.svg';
import { StyledParagraph } from '../../../../styles/typography';

export const ButtonBackRegister = () => {
  return (
    <StyledButtonBackRegister>
      <StyledButtonLink buttonSize='sm-max' buttontype='outline' to='/'>
        <figure>
          <img
            src={Seta}
            alt='Seta para esquerda para voltar à pagina anterior'
          />
          <StyledParagraph fontStyle='sm'>Voltar</StyledParagraph>
        </figure>
      </StyledButtonLink>
    </StyledButtonBackRegister>
  );
};
