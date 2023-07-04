import { Footer } from '../../components/fragments/Footer';
import { Header } from '../../components/fragments/Header';
import { ListAllPosts } from '../../components/structures/ListPostsAllNoticesPage';
import { StyledContainerHeader, StyledContainerMain } from '../../styles/grid';
import { AllNoticesPageContainer } from './style';

export const AllNoticesPage = () => {
  return (
    <StyledContainerMain>
      <AllNoticesPageContainer>
        <StyledContainerHeader>
          <Header />
        </StyledContainerHeader>
        <ListAllPosts />
        <Footer/>
      </AllNoticesPageContainer>
    </StyledContainerMain>
  );
};
