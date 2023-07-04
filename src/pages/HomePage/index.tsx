import { Footer } from '../../components/fragments/Footer';
import { Header } from '../../components/fragments/Header';
import { ListPosts } from '../../components/structures/ListPostsHomepage';
import { WelcomeStructure } from '../../components/structures/WelcomeStructure';
import { StyledContainerHeader, StyledContainerMain } from '../../styles/grid';
import { HomePageContainer } from './style';

export const HomePage = () => {
  return (
    <StyledContainerMain>
      <HomePageContainer>
        <StyledContainerHeader>
          <Header />
        </StyledContainerHeader>
        <WelcomeStructure />
        <ListPosts />
        <Footer/>
      </HomePageContainer>
    </StyledContainerMain>
  );
};
