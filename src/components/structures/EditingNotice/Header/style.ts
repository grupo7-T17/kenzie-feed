import styled from 'styled-components';

export const StyledEditingHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 64rem;

  h1 {
    font-size: clamp(var(--font-size-4), 8vw, var(--font-size-8));
  }

  a {
    padding: 0rem 0.625rem;
  }

  figure {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    gap: 0.625rem;
  }

  figure > img {
    width: 1.5625rem;
  }

  figure > p {
    color: var(--color-primary);
  }
`;
