import styled from 'styled-components';

export const StyledDivCardPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1.875rem;
  width: 100%;
  max-width: 46.25rem;

  .focusNoticeParagraph {
    display: flex;
    text-align: start;
    text-align: justify;
  }
`;

export const StyledImgContainer = styled.div`
  display: flex;
  width: 100%;
  border-radius: 1.25rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 25rem;
  overflow: hidden;
`;

export const StyledImg = styled.img`
  width: 100%;
  border-radius: 1.25rem;
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

export const StyledLike = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.6875rem;
  align-self: flex-start;
  background-color: transparent;
`;

export const StyledFavoriteImage = styled.img`
  width: 1.375rem;
  cursor: pointer;
`;
