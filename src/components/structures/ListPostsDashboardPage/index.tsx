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
import { useContext, useEffect } from 'react';
import { NoticeContext } from '../../../providers/NoticesContext';
import { ScaleLoader } from 'react-spinners';

export const ListPostsDashboard = () => {
  const { handleOpenModal } = useContext(ModalContext);

  const { dashboardList, isDashboardLoading, onlyUser, postsList } =
    useContext(NoticeContext);

  useEffect(() => {
    onlyUser(postsList);
  }, []);

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

      {isDashboardLoading ? (
        <EmptyDashboard>
          <ScaleLoader color='#808080' />
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
            Ops! Parece que não há nenhum post criado ainda.
          </StyledParagraph>
        </EmptyDashboard>
      )}
    </ListPostsDashboardContainer>
  );
};
