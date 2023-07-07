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

export const ListPostsDashboard = () => {
  const { handleOpenModal } = useContext(ModalContext);

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
        <CardEditPost
          img='../../src/assets/imgs/teste-viagem.png'
          title='5 lugares para viajar nas próximas férias de verão'
        />
        <CardEditPost
          img='../../src/assets/imgs/teste-saladafrutas.png'
          title='Como uma alimentação saudável pode tornar sua vida melhor'
        />
        <CardEditPost
          img='../../src/assets/imgs/teste-saladafrutas.png'
          title='Como uma alimentação saudável pode tornar sua vida melhor'
        />
        <CardEditPost
          img='../../src/assets/imgs/teste-saladafrutas.png'
          title='Como uma alimentação saudável pode tornar sua vida melhor'
        />
        <CardEditPost
          img='../../src/assets/imgs/teste-saladafrutas.png'
          title='Como uma alimentação saudável pode tornar sua vida melhor'
        />
      </UlPostsHomepage>
    </ListPostsDashboardContainer>
  );
};
