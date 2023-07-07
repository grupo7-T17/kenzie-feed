import { StyledButton } from '../../../styles/buttons';
import { StyledTitleOne } from '../../../styles/typography';
import { CardEditPost } from '../../fragments/CardEditPost';
import {
  UlPostsHomepage,
  ListPostsDashboardContainer,
  StyledIconPlus,
  HeaderPostsDashboard,
} from './style';
import Plus from '../../../assets/icons/circlewithplus.svg';
import { ModalContext } from '../../../providers/ModalContext';
import { useContext } from 'react';
import { NoticeContext } from '../../../providers/NoticesContext';

export const ListPostsDashboard = () => {
  const { handleOpenModal } = useContext(ModalContext);
  const { postsList } = useContext(NoticeContext);

  console.log(postsList);

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
      <UlPostsHomepage>
        {postsList.map((post) => (
          <CardEditPost
            key={post.id}
            id={post.id}
            img={post.image}
            title={post.title}
            owner={post.owner}
          />
        ))}
      </UlPostsHomepage>
    </ListPostsDashboardContainer>
  );
};
