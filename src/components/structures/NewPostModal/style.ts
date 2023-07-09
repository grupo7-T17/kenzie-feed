import styled from 'styled-components';

export const StyledModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  padding: 1.875rem 2.1875rem;
  background-color: var(--color-white);
  position: relative;

  @media (min-width: 425px) {
    width: 25rem;
  }
  @media (min-width: 768px) {
    width: 43.75rem;
  }

  h2 {
    font-size: clamp(var(--font-size-6), var(--font-size-8), 5.2vw);
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  textarea {
    height: 8.125rem;
  }

  button:nth-child(3) {
    margin-top: 0.625rem;

    > p {
      color: var(--color-white);
    }
  }

  button:nth-child(4) {
    background-color: transparent;
    position: absolute;
    top: 1.25rem;
    right: 1.875rem;
  }
`;
