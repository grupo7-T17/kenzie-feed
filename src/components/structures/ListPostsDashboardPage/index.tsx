import { StyledButton } from '../../../styles/buttons';
import { StyledParagraph, StyledTitleOne } from '../../../styles/typography';
import { CardEditPost } from '../../fragments/CardEditPost';
import {
  UlPostsHomepage,
  ListPostsDashboardContainer,
  StyledIconPlus,
  HeaderPostsDashboard,
  EmptyDashboard,
} from './style';
import Plus from '../../../assets/icons/circlewithplus.svg';
import { ModalContext } from '../../../providers/ModalContext';
import { useContext } from 'react';
import { NoticeContext } from '../../../providers/NoticesContext';
import { StyledloadWrapper } from '../../../styles/grid';
import { ScaleLoader } from 'react-spinners';

export const ListPostsDashboard = () => {
  const { handleOpenModal } = useContext(ModalContext);

  const { dashboardList, loading } = useContext(NoticeContext);

  return (
    <ListPostsDashboardContainer>
      <HeaderPostsDashboard>
        <StyledTitleOne fontStyle='md'>Suas publicações</StyledTitleOne>
        <StyledButton
          type='button'
          onClick={handleOpenModal}
          buttonsize='sm-min'
          buttontype='primary'
          className='buttonAdd'
        >
          <StyledIconPlus src={Plus} />
          Novo Post
        </StyledButton>
      </HeaderPostsDashboard>
      {loading ? (
        <EmptyDashboard>
        <StyledloadWrapper>
        <ScaleLoader color="#808080" />
      </StyledloadWrapper>
        </EmptyDashboard>
      ) : dashboardList.length > 0 ? (
        <UlPostsHomepage>
          {dashboardList.map((post) => (
            <CardEditPost
              key={post.id}
              id={post.id}
              img={post.image}
              title={post.title}
              owner={post.owner}
            />
          ))}
        </UlPostsHomepage>
      ) : (
        <EmptyDashboard>
          <StyledParagraph fontStyle='lg'>
            Ops! Parece que não há nenhum post criado ainda
          </StyledParagraph>
        </EmptyDashboard>
      )}
    </ListPostsDashboardContainer>
  );
};
