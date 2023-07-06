import styled from 'styled-components';

export const StyledFormLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  .width80 {
    width: 80%;

    @media (max-width: 764px) {
      width: 100%;
    }
  }
`;
