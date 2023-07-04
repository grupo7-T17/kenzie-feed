import { StyledButton } from '../../../styles/buttons';
import { StyledTitleOne } from '../../../styles/typography';
import { CardPost } from '../../fragments/CardPost';
import {
  UlPostsHomepage,
  ListPostsHomepage,
  HeaderPostsHomepage,
} from './style';

export const ListPosts = () => {
  return (
    <ListPostsHomepage>
      <HeaderPostsHomepage>
        <StyledTitleOne fontStyle='m-md'>Últimas Notícias</StyledTitleOne>
        <StyledButton buttonType='primary' buttonSize='sm-min'>
          Ver tudo
        </StyledButton>
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
        <CardPost
          img='../../src/assets/imgs/teste-pizza.png'
          author='Roberto Silva'
          title='Tradicional pizzaria terá cardápio especial este fim de semana'
        />
      </UlPostsHomepage>
    </ListPostsHomepage>
  );
};