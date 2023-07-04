import styled from 'styled-components';

export const WelcomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 76.875rem;
  gap: 1.125rem;
`;

export const StyledContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.1875rem;
  width: 100%;
  max-width: 76.875rem;
  max-height: 24rem;
  overflow: hidden;
  border-radius: 2.8125rem;
`;

export const StyledWelcomeImage = styled.img`
  min-width: 100%;
  height: auto;
  object-fit: cover;
`;
