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
  border-radius: 2.8125rem;
  box-sizing: border-box;
`

export const StyledImg = styled.img`
    width: 100%;
    border-radius: 2.8125rem;
    object-fit: cover;
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