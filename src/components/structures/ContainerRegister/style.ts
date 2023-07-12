import styled from 'styled-components';

export const StyledContainerRegister = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 64rem;
  padding: 0.875rem 1.125rem;

  @media (max-width: 768px) {
    padding: 0rem 0rem;
  }

  button {
    align-self: flex-start;
  }
`;
