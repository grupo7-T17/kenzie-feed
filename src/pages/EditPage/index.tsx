import { Footer } from '../../components/fragments/Footer';
import { Header } from '../../components/fragments/Header';
import { EditingNoticeForm } from '../../components/structures/EditingNotice/Form';
import { EditingNoticeHeader } from '../../components/structures/EditingNotice/Header';
import {
  StyledContainerEditMain,
  StyledContainerEditHeader,
} from '../../styles/grid';
import { StyledEditContainer } from './style';

export const EditPage = () => {
  return (
    <>
      <StyledContainerEditHeader>
        <Header />
      </StyledContainerEditHeader>
      <StyledEditContainer>
        <StyledContainerEditMain>
          <EditingNoticeHeader />
          <EditingNoticeForm />
        </StyledContainerEditMain>
      </StyledEditContainer>
      <Footer />
    </>
  );
};