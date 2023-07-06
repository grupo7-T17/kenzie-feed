import styled from 'styled-components';

export const ListPostsDashboardContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 47px;
  width: 100%;
  max-width: 64rem;
`;

export const HeaderPostsDashboard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .buttonAdd {
    gap: .875rem;
    padding: 0px .6875rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
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

export const StyledIconPlus = styled.img`
  width: 1.5rem;
`;
