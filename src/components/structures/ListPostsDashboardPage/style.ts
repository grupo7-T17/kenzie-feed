import styled from 'styled-components';

export const ListPostsDashboardContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.9375rem;
  width: 100%;
  max-width: 64rem;
`;

export const HeaderPostsDashboard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .buttonAdd {
    gap: 0.875rem;
    padding: 0rem 0.6875rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
  }
`;

export const UlPostsHomepage = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: start;
  text-align: center;
  height: 31.5625rem;
  overflow-y: scroll;
  width: 100%;
  gap: 1.7rem;
  align-content: flex-start;
`;

export const StyledIconPlus = styled.img`
  width: 1.5rem;
`;

export const EmptyDashboard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  p {
    font-weight: var(--font-weight-1);
    color: var(--color-input-default);
    text-align: center;
  }
`;
