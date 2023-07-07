import styled from 'styled-components';

export const StyledLiCardPost = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  text-align: start;
  gap: 1.875rem;
  width: 100%;
  height: 100%;

  @media (min-width: 836px) {
    width: 47.5%;
  }
`;

export const StyledDivImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.1875rem;
  width: 100%;
  max-width: 76.875rem;
  height: 16rem;
  overflow: hidden;
  border-radius: 1.5625rem;
`;

export const StyledImg = styled.img`
  width: 100%;
  border-radius: 1.5625rem;
  object-fit: cover;
  height: 100%;
  min-height: 12.5rem;
`;

export const StyledDivBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.875rem;
`;

export const StyledGapLink = styled.div`
  display: flex;
  justify-self: end;
`;
