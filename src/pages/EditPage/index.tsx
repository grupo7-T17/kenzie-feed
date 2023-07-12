import { Footer } from '../../components/fragments/Footer';
import { Header } from '../../components/fragments/Header';
import { EditingNoticeForm } from '../../components/structures/EditingNotice/Form';
import { EditingNoticeHeader } from '../../components/structures/EditingNotice/Header';
import {
  StyledContainerEditMain,
  StyledContainerHeader,
} from '../../styles/grid';
import { StyledEditContainer, StyledFooterEdit } from './style';

export const EditPage = () => {
  return (
    <>
      <StyledContainerHeader>
        <Header />
      </StyledContainerHeader>
      <StyledEditContainer>
        <StyledContainerEditMain>
          <EditingNoticeHeader />
          <EditingNoticeForm />
        </StyledContainerEditMain>
      </StyledEditContainer>
      <StyledFooterEdit>
        <Footer />
      </StyledFooterEdit>
    </>
  );
};
