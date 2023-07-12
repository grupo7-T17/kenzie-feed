import { useContext } from 'react';
import { Footer } from '../../components/fragments/Footer';
import { Header } from '../../components/fragments/Header';
import { ListAllPosts } from '../../components/structures/ListPostsAllNoticesPage';
import { StyledContainerHeader, StyledContainerMain } from '../../styles/grid';
import { AllNoticesPageContainer } from './style';
import { NoticeContext } from '../../providers/NoticesContext';

export const AllNoticesPage = () => {
  const { loading } = useContext(NoticeContext);

  return (
    <>
      <StyledContainerHeader>
        <Header />
      </StyledContainerHeader>
      <StyledContainerMain>
        <AllNoticesPageContainer>
          {loading ? <p>Loading...</p> : <ListAllPosts />}
          <Footer />
        </AllNoticesPageContainer>
      </StyledContainerMain>
    </>
  );
};
