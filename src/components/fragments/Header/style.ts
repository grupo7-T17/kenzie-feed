import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.375rem 0rem;
  width: 100%;
  max-width: 64rem;
`;

export const StyledLogo = styled.img`
  width: 4.1875rem;
`;

export const StyledDivIconButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  align-items: center;

  @media (max-width: 768px) {
    p {
      display: none;
    }

    button {
      padding: 0rem 0.625rem;
    }
  }
`;

export const QuitButton = styled.img`
  width: 1.5rem;
  cursor: pointer;
`;
