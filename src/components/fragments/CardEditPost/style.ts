import styled from 'styled-components';

export const StyledLiCardEditPost = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: start;
  gap: 1.875rem;
  width: 100%;
`;

export const StyledEditImg = styled.img`
  width: auto;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

export const StyledContainerEditImg = styled.div`
  width: 100%;
  max-width: 9.5625rem;
  height: 8.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 1.5625rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledDivLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.5rem;
  width: 100%;
`;

export const StyledDivRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.875rem;
  align-items: center;
`;

export const StyledIcon = styled.img`
  width: 2.25rem;
  cursor: pointer;
`;
