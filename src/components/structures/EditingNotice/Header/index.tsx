import LeftArrowIcon from '../../../../../src/assets/icons/left-arrow.svg';
import { StyledButtonLink } from '../../../../styles/buttons';
import { StyledTitleOne, StyledParagraph } from '../../../../styles/typography';
import { StyledEditingHeaderContainer } from './style';

export const EditingNoticeHeader = () => {
  return (
    <StyledEditingHeaderContainer>
      <StyledTitleOne fontStyle='md'>Editando:</StyledTitleOne>

      <StyledButtonLink
        buttonsize='sm-min'
        buttontype='outline'
        to='/dashboard'
      >
        <figure>
          <img
            src={LeftArrowIcon}
            alt='seta para esquerda voltar pagina anterior'
          />
          <StyledParagraph fontStyle='lg'>Voltar</StyledParagraph>
        </figure>
      </StyledButtonLink>
    </StyledEditingHeaderContainer>
  );
};
