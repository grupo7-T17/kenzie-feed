import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledDivLoginPage = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 85px auto;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const StyledDivInputLogin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  margin: auto 0;
  padding: 0 1.875rem;
  align-items: center;
  text-align: center;

  .width80 {
    width: 80%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const StyledLinkLoginPage = styled(Link)`
  font-size: 1.0625rem;
  font-weight: 400;
  line-height: 1.3125rem;
  color: var(--color-primary);
  text-decoration: underline;
`;

export const StyledContainerLoginImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 456px;
  min-height: 556px;
  overflow: hidden;
  border-radius: 2.8125rem;

  @media (max-width: 764px) {
    display: none;
  }
`;

export const StyledLoginImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
