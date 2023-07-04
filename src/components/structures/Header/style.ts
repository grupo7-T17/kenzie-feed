import styled from 'styled-components';

export const StyledEditingHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 57.5rem;

  figure {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.625rem;
  }

  figure > img {
    width: 1.5625rem;
  }

  figure > p {
    color: var(--color-primary);
  }
`;
