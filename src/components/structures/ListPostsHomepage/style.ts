import styled from 'styled-components';

export const ListPostsHomepage = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.625rem;
  width: 100%;
`;

export const UlPostsHomepage = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 57.5rem;
  gap: 2.5rem;
`;

export const StyledWelcomeImage = styled.img`
  margin-top: 2.1875rem;
  width: 100%;
  max-height: 384px;
`;

export const HeaderPostsHomepage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 764px) {
    button {
      display: none;
    }
  }
`;
