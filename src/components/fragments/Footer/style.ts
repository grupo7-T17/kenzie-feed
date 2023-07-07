import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: clamp(3.75rem, 56.31vw, 2.5rem) 58px;
  background-color: var(--color-white);

  @media (max-width: 768px) {
    padding: 30px 2.375rem;
  }
`;
