import { Footer } from '../../components/fragments/Footer';
import { Header } from '../../components/fragments/Header';
import { ListPostsDashboard } from '../../components/structures/ListPostsDashboardPage';
import { NewPostModal } from '../../components/structures/NewPostModal';
import { StyledContainerHeader } from '../../styles/grid';
import { RegisterPageContainer } from '../RegisterPage/style';
import { StyledDashboardContainer, StyledFooterContainer } from './style';

export const DashboardPage = () => {
  return (
    <>
      <RegisterPageContainer>
        <StyledContainerHeader>
          <Header buttonVisible={false} />
        </StyledContainerHeader>
      </RegisterPageContainer>
      <StyledDashboardContainer>
        <ListPostsDashboard />
      </StyledDashboardContainer>
      <StyledFooterContainer>
        <Footer />
      </StyledFooterContainer>
      <NewPostModal />
    </>
  );
};
