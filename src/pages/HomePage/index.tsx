import { useContext, useEffect, useState } from 'react';
import { Footer } from '../../components/fragments/Footer';
import { Header } from '../../components/fragments/Header';
import { ListPosts } from '../../components/structures/ListPostsHomepage';
import { WelcomeStructure } from '../../components/structures/WelcomeStructure';
import { StyledContainerHeader, StyledContainerMain } from '../../styles/grid';
import { HomePageContainer } from './style';
import { NoticeContext } from '../../providers/NoticesContext';

export const HomePage = () => {
    const { getAllNoticies } = useContext(NoticeContext)
    const [loading, setLoading] = useState(false)
  
    useEffect(() => {
      const loadAllNotices = async () => {
        await getAllNoticies(setLoading)
      }
  
      loadAllNotices()
      // if (!postsList) {
      //   loadAllNotices()
      // }
    }, [])

  return (
    <StyledContainerMain>
      <HomePageContainer>
        <StyledContainerHeader>
          <Header/>
        </StyledContainerHeader>
        <WelcomeStructure />
        { loading ? (
          <p>Loading...</p>
        ) : (
          <ListPosts/>
        )}
        <Footer/>
      </HomePageContainer>
    </StyledContainerMain>
  );
};
