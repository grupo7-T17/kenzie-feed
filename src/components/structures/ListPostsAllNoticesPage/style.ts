import styled from 'styled-components';

export const ListPostsHomepage = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  .paragraphEmpty {
    margin-top: 3.125rem;
    margin-bottom: 21.875rem;
  }
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

  @media (max-width: 768px) {
    button {
      display: none;
    }
  }
`;
