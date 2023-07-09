import styled from 'styled-components';

export const StyledModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  max-width: 50rem;
  padding: 2.5rem 2.8125rem;
  background-color: var(--color-white);
  position: relative;

  > form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  textarea {
    height: 14.375rem;
  }

  form > button {
    margin-top: 0.625rem;

    > p {
      color: var(--color-white);
    }
  }

  button:nth-child(3) {
    background-color: transparent;
    position: absolute;
    top: 1.25rem;
    right: 1.875rem;
  }
`;
