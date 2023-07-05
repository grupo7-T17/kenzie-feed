import { Footer } from '../../components/fragments/Footer';
import { Header } from '../../components/fragments/Header';
import { PostInFocus } from '../../components/fragments/PostInFocus';
import { ListSeeMorePosts } from '../../components/structures/ListPostsFocusNotice';
import { StyledContainerHeader, StyledContainerMain } from '../../styles/grid';
import { FocusNoticePageContainer } from './style';

export const FocusNoticePage = () => {
  return (
    <StyledContainerMain>
      <FocusNoticePageContainer>
        <StyledContainerHeader>
          <Header />
        </StyledContainerHeader>
        <PostInFocus
          img='../../src/assets/imgs/teste-viagem.png'
          author='Roberto Silva'
          title='5 lugares para viajar nas próximas férias de verão'
        />
        <ListSeeMorePosts />
        <Footer />
      </FocusNoticePageContainer>
    </StyledContainerMain>
  );
};
