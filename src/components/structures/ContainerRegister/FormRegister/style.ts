import styled from 'styled-components';

export const StyledFormRegister = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 47.375rem;
  gap: 1.25rem;
  padding-top: 6.25rem;

  @media (max-width: 768px) {
    padding-top: 2.5rem;
  }
`;

export const StyledRegisterInput = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  gap: 1.25rem;
  align-items: flex-start;
`;

export const StyledRegisterFormButton = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: transparent;
  width: 100%;
  max-width: 35rem;

  @media (max-width: 617px) {
    justify-content: center;
  }
`;
