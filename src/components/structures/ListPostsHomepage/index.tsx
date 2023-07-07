import { useContext } from 'react';
import { StyledButtonLink } from '../../../styles/buttons';
import { StyledTitleOne } from '../../../styles/typography';
import { CardPost } from '../../fragments/CardPost';
import {
  UlPostsHomepage,
  ListPostsHomepage,
  HeaderPostsHomepage,
} from './style';
import { NoticeContext } from '../../../providers/NoticesContext';

export const ListPosts = () => {
  const { postsList } = useContext(NoticeContext)
  return (
    <ListPostsHomepage>
      <HeaderPostsHomepage>
        <StyledTitleOne fontStyle='md'>Últimas Notícias</StyledTitleOne>

        <StyledButtonLink
          buttonType='primary'
          buttonSize='sm-min'
          to='/allnotices'
        >
          Ver tudo
        </StyledButtonLink>
      </HeaderPostsHomepage>
      <UlPostsHomepage>
         {postsList?.length >= 1 ? postsList.map(post => (
            <CardPost
            key={post.id}
            img={post.image}
            author={post.owner}
            title={post.title}
          />
          )): null}
      </UlPostsHomepage>
    </ListPostsHomepage>
  );
};
