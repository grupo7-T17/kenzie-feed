import styled from "styled-components";

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

export const StyledImg = styled.img`
    width: 100%;
`;

export const StyledDivBottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: .875rem;
`;

export const StyledLike = styled.div`
    display: flex;
    flex-direction: row;
    gap: .6875rem;
    align-self: flex-start;
`;

export const StyledFavoriteImage = styled.img`
  width: 1.375rem;
  cursor: pointer;
`