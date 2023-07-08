import { useContext } from 'react';
import { StyledTitleOne } from '../../../styles/typography';
import { CardPost } from '../../fragments/CardPost';
import {
  UlPostsHomepage,
  ListPostsHomepage,
  HeaderPostsHomepage,
} from './style';
import { NoticeContext } from '../../../providers/NoticesContext';

export const ListAllPosts = () => {
  const { postsList } = useContext(NoticeContext);

  return (
    <ListPostsHomepage>
      <HeaderPostsHomepage>
        <StyledTitleOne fontStyle='md'>Todas as Notícias</StyledTitleOne>
      </HeaderPostsHomepage>
      <UlPostsHomepage>
        {postsList?.length >= 1 ? (
          postsList.map((post) => (
            <CardPost
              key={post.id}
              img={post.image}
              author={post.owner}
              title={post.title}
              postId={post.id}
            />
          ))
        ) : (
          <p>Nenhuma notícia encontrada.</p>
        )}
      </UlPostsHomepage>
    </ListPostsHomepage>
  );
};
