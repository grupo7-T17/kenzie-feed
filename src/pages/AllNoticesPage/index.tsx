import { useContext, useEffect, useState } from 'react';
import { Footer } from '../../components/fragments/Footer';
import { Header } from '../../components/fragments/Header';
import { ListAllPosts } from '../../components/structures/ListPostsAllNoticesPage';
import { StyledContainerHeader, StyledContainerMain } from '../../styles/grid';
import { AllNoticesPageContainer } from './style';
import { NoticeContext } from '../../providers/NoticesContext';

export const AllNoticesPage = () => {
  const { getAllNoticies } = useContext(NoticeContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadAllNotices = async () => {
      await getAllNoticies(setLoading);
    };

    loadAllNotices();
    // if (!postsList) {
    //   loadAllNotices()
    // }
  }, []);

  return (
    <StyledContainerMain>
      <AllNoticesPageContainer>
        <StyledContainerHeader>
          <Header />
        </StyledContainerHeader>
        {loading ? <p>Loading...</p> : <ListAllPosts />}
        <Footer />
      </AllNoticesPageContainer>
    </StyledContainerMain>
  );
};
