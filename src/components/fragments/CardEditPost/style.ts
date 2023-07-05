import styled from "styled-components";

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
    max-width: 153px;
    height: 138px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 25px;
`;


export const StyledDivLeft = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
    width: 100%;
`;

export const StyledDivRight = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: .875rem;
    align-items: center;
`;

export const StyledIcon = styled.img`
    width: 2.25rem;
    cursor: pointer;
`;