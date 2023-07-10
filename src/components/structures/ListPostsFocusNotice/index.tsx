import { useContext } from 'react';
import { NoticeContext } from '../../../providers/NoticesContext';
import { StyledTitleOne } from '../../../styles/typography';
import { CardPost } from '../../fragments/CardPost';
import { HeaderPostsHomepage } from '../ListPostsAllNoticesPage/style';
import { UlPostsHomepage, ListPostsHomepage } from './style';

export const ListSeeMorePosts = () => {
  const { postsList, postInFocus } = useContext(NoticeContext);

  const getPostsForSuggestions = () => {
    return postsList?.filter((post) => post.id !== postInFocus?.id).slice(0, 2);
  };

  const filteredPosts = getPostsForSuggestions();

  return (
    <ListPostsHomepage>
      <HeaderPostsHomepage>
        <StyledTitleOne fontStyle='md'>Leia também</StyledTitleOne>
      </HeaderPostsHomepage>
      <UlPostsHomepage>
        {filteredPosts?.map((post) => (
          <CardPost
            key={post.id}
            img={post.image}
            author={post.owner}
            title={post.title}
            postId={post.id}
          />
        ))}
      </UlPostsHomepage>
    </ListPostsHomepage>
  );
};
