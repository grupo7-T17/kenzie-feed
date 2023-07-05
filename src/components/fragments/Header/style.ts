import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 2.375rem;
  width: 100%;
  max-width: 64rem;
`;

export const StyledLogo = styled.img`
  width: 4.1875rem;
`;

export const StyledDivIconButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;

  @media (max-width: 768px) {
    p {
      display: none;
    }

    button {
      padding: 0px 10px;
    }
  }
`;

export const QuitButton = styled.img`
  width: 1.5rem;
`;
