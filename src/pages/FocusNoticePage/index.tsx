import { useState, useEffect, useContext } from 'react';
import { Footer } from '../../components/fragments/Footer';
import { Header } from '../../components/fragments/Header';
import { PostInFocus } from '../../components/fragments/PostInFocus';
import { ListSeeMorePosts } from '../../components/structures/ListPostsFocusNotice';
import { StyledContainerHeader, StyledContainerMain } from '../../styles/grid';
import { FocusNoticePageContainer } from './style';
import { useParams } from 'react-router-dom';
import {
  NoticeContext,
  iNoticeContext,
  iPostResponse,
} from '../../providers/NoticesContext';

export const FocusNoticePage = () => {
  const [post, setPost] = useState<iPostResponse | null>(null);
  const { getPostById, setPostInFocus, setLike } =
    useContext<iNoticeContext>(NoticeContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const postData = await getPostById(Number(id));
      setPost(postData);
      setPostInFocus(postData);

      const userId = localStorage.getItem('@USERID');
      if (postData && userId) {
        const hasLiked = postData.likes.some(
          (like) => like.userId === Number(userId)
        );
        if (hasLiked) {
          setLike({ userId: Number(userId), postId: postData.id });
        } else {
          setLike(null);
        }
      }
    };

    fetchPost();
  }, [id, setPostInFocus]);

  return (
    <>
    <StyledContainerHeader>
          <Header />
        </StyledContainerHeader>
    <StyledContainerMain>
        
      <FocusNoticePageContainer>
        {post ? (
          <PostInFocus
            img={post.image}
            author={post.owner}
            title={post.title}
            description={post.description}
            postId={post.id}
            likes={post.likes.length}
          />
        ) : (
          <div>Carregando...</div>
        )}
        <ListSeeMorePosts />
        <Footer />
      </FocusNoticePageContainer>
    </StyledContainerMain>
    </>
  );
};
