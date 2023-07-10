import {
  StyledLabel,
  StyledParagraph,
  StyledTitleOne,
} from '../../../styles/typography';
import {
  StyledContainerImage,
  StyledWelcomeImage,
  WelcomeContainer,
} from './style';
import WelcomeCoffe from '../../../assets/imgs/welcome.svg';

export const WelcomeStructure = () => {
  return (
    <WelcomeContainer>
      <StyledLabel>KENZIE FEED</StyledLabel>
      <StyledTitleOne fontStyle='md'>
        Seja muito bem vindo ao KenzieFeed
      </StyledTitleOne>
      <StyledParagraph fontStyle='sm'>
        Fique por dentro das últimas notícias
      </StyledParagraph>
      <StyledContainerImage>
        <StyledWelcomeImage src={WelcomeCoffe} />
      </StyledContainerImage>
    </WelcomeContainer>
  );
};
