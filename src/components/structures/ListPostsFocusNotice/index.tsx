import { StyledTitleOne } from '../../../styles/typography';
import { CardPost } from '../../fragments/CardPost';
import { HeaderPostsHomepage } from '../ListPostsAllNoticesPage/style';
import {
  UlPostsHomepage,
  ListPostsHomepage,
} from './style';

export const ListSeeMorePosts = () => {
  return (
    <ListPostsHomepage>
      <HeaderPostsHomepage>
        <StyledTitleOne fontStyle='md'>Leia também</StyledTitleOne>
      </HeaderPostsHomepage>
      <UlPostsHomepage>
        <CardPost
          img='../../src/assets/imgs/teste-viagem.png'
          author='Roberto Silva'
          title='5 lugares para viajar nas próximas férias de verão'
        />
        <CardPost
          img='../../src/assets/imgs/teste-saladafrutas.png'
          author='Maria Silva'
          title='Como uma alimentação saudável pode tornar sua vida melhor'
        />
      </UlPostsHomepage>
    </ListPostsHomepage>
  );
};
