import styled from 'styled-components';

export const StyledModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;
  width: 100%;
  max-width: 25rem;
  height: 12.5rem;
  padding: 1.875rem 2.1875rem;
  background-color: var(--color-white);
  position: relative;

  h2 {
    margin-top: 1.25rem;
    font-size: clamp(var(--font-size-1), var(--font-size-3), 5.2vw);
    line-height: normal;
  }

  > div {
    display: flex;
    flex-direction: row;
    gap: 0.375rem;
  }

  div > button:nth-child(1) {
    font-size: var(--font-size-2);
    border: 0.0625rem solid red;
    background-color: red;
  }
  div > button:nth-child(2) {
    font-size: var(--font-size-2);
  }

  button:nth-child(3) {
    background-color: transparent;
    position: absolute;
    top: 1.25rem;
    right: 1.875rem;

    > img {
      width: 1.875rem;
    }
  }
`;
