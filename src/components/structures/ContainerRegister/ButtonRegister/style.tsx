import styled from 'styled-components';

export const StyledButtonBackRegister = styled.button`
  display: flex;
  max-width: 6.6875rem;
  gap: 0.625rem;

  figure {
    display: flex;
    flex-direction: row;
    gap: 0.625rem;
    align-items: center;
    justify-content: center;
  }

  figure > img {
    width: 1.5rem;
  }

  figure > p {
    color: var(--color-primary);
  }
`;
