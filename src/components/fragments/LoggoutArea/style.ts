import styled from 'styled-components';

export const StyledLoggoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  p {
    background-color: var(--color-primary);
    padding: 0.5rem 0.75rem;
    border-radius: 50%;
    color: var(--color-white);
  }

  figure {
    margin-left: 0.25rem;
  }

  @media (max-width: 425px) {
    gap: 0.25rem;

    // Linha de codigo a ser decidida em uma reuniao em grupo
    p {
      display: none;
      /* padding: 0;
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 50%;
      font-size: 0;
      color: var(--color-primary); */
    }

    button {
      padding: 0rem 0.625rem;
    }
  }
`;
