import styled from 'styled-components';

export const RegisterPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 1.25rem;
`;

export const StyledRegisterFooter = styled.div`
  padding-top: 11.875rem;

  @media (max-width: 768px) {
    padding-top: 1.5rem;
  }
`;
