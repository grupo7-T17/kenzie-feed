import styled from 'styled-components';

export const ListPostsHomepage = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.625rem;
  width: 100%;
`;

export const UlPostsHomepage = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: start;
  text-align: center;
  width: 100%;
  gap: 2.5rem;
`;

export const StyledWelcomeImage = styled.img`
  margin-top: 2.1875rem;
  width: 100%;
  max-height: 24rem;
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
