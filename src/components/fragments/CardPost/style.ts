import styled from "styled-components";

export const StyledLiCardPost = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    text-align: start;
    gap: 1.875rem;
    width: 100%;
    height: 100%;
    
    @media (min-width: 764px) {
        width: 47.5%;
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

export const StyledGapLink = styled.div`
    display: flex;
    justify-self: end;
`;