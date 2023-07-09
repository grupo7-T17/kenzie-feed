import { useContext, useEffect, useState } from 'react';
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
  const [allPosts, setAllPosts] = useState(postsList);

  useEffect(() => {
    setAllPosts(postsList);
  }, [postsList]);

  return (
    <ListPostsHomepage>
      <HeaderPostsHomepage>
        <StyledTitleOne fontStyle='md'>Todas as Notícias</StyledTitleOne>
      </HeaderPostsHomepage>
      <UlPostsHomepage>
        {allPosts?.length >= 1 ? (
          allPosts.map((post) => (
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
