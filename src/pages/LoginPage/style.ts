import { Link } from "react-router-dom"
import styled from "styled-components"

export const StyledDivLoginPage = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
    margin-bottom: 100px;
`

export const StyledDivInputLogin = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 30px;
    align-items: center;
`

export const StyledLinkLoginPage = styled(Link)`

    font-size: 1.0625rem;
    font-weight: 400;
    line-height: 1.3125rem;
    color: var(--color-primary);
    text-decoration: underline

`