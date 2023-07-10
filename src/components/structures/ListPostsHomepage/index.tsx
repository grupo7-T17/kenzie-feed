import { useContext, useEffect } from 'react';
import { StyledButtonLink } from '../../../styles/buttons';
import { StyledTitleOne } from '../../../styles/typography';
import { CardPost } from '../../fragments/CardPost';
import {
  UlPostsHomepage,
  ListPostsHomepage,
  HeaderPostsHomepage,
} from './style';
import { NoticeContext } from '../../../providers/NoticesContext';
import { api } from '../../../services/api';

export const ListPosts = () => {
  const { postsList, setPostsList } = useContext(NoticeContext);

  useEffect(() => {
    const updateAllPosts = async () => {
      try {
        const { data } = await api.get('/posts?_embed=likes');
        setPostsList(data);
      } catch (error) {
        console.error(error);
      }
    };
    updateAllPosts();
  }, []);

  return (
    <ListPostsHomepage>
      <HeaderPostsHomepage>
        <StyledTitleOne fontStyle='md'>Últimas Notícias</StyledTitleOne>

        <StyledButtonLink
          buttontype='primary'
          buttonsize='sm-min'
          to='/allnotices'
        >
          Ver tudo
        </StyledButtonLink>
      </HeaderPostsHomepage>
      <UlPostsHomepage>
        {postsList?.length >= 1
          ? postsList
              .slice(0, 4)
              .map((post) => (
                <CardPost
                  key={post.id}
                  img={post.image}
                  author={post.owner}
                  title={post.title}
                  postId={post.id}
                />
              ))
          : null}
      </UlPostsHomepage>
    </ListPostsHomepage>
  );
};
