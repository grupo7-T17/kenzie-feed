import { Footer } from '../../components/fragments/Footer';
import { Header } from '../../components/fragments/Header';
import { ListPostsDashboard } from '../../components/structures/ListPostsEditPage';
import { NewPostModal } from '../../components/structures/NewPostModal';
import { StyledContainerHeader } from '../../styles/grid';
import { StyledDashboardContainer } from './style';

export const DashboardPage = () => {
  return (
    <>
      <StyledContainerHeader>
        <Header userLogged buttonVisible={false} />
      </StyledContainerHeader>
      <StyledDashboardContainer>
        <ListPostsDashboard />
      </StyledDashboardContainer>
      <Footer />
      <NewPostModal />
    </>
  );
};
