import styled from 'styled-components';

export const StyledFormLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  align-items: center;

  fieldset {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
  }

  > button {
    width: 90%;
  }

  @media (max-width: 764px) {
    width: 100%;
  }
`;
