import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface iButtonType {
  buttontype: 'primary' | 'outline';
}

interface iButtonSize {
  buttonsize: 'lg-min' | 'lg-max' | 'md-min' | 'md-max' | 'sm-min' | 'sm-max';
}

const ButtonDefault = css<iButtonType & iButtonSize>`
  font-family: var(--font-family-secondary);
  font-weight: var(--font-weight-1);
  border-radius: 0.25rem;
  padding: 0 1rem;
  white-space: nowrap;

  p {
    font-weight: var(--font-weight-1);
  }

  ${({ buttontype }) => {
    switch (buttontype) {
      case 'primary':
        return css`
          color: var(--color-white);
          background-color: var(--color-primary);
          border: 0.0625rem solid var(--color-primary);
        `;

      case 'outline':
        return css`
          color: var(--color-primary);
          background-color: var(--color-white);
          border: 0.0625rem solid var(--color-primary);
        `;
    }
  }}

  ${({ buttonsize }) => {
    switch (buttonsize) {
      case 'lg-min':
        return css`
          height: 4.0625rem;
          padding: 0 3.5rem;
          width: max-content;
          font-size: var(--font-size-2);
          line-height: var(--line-height-1);
        `;

      case 'lg-max':
        return css`
          width: 100%;
          height: 4.0625rem;
          padding: 0 3.5rem;
          font-size: var(--font-size-2);
          line-height: var(--line-height-1);
        `;

      case 'md-min':
        return css`
          height: 3.4375rem;
          padding: 0 2.25rem;
          width: max-content;
          font-size: var(--font-size-1);
          line-height: var(--line-height-0);
        `;

      case 'md-max':
        return css`
          width: 100%;
          height: 3.4375rem;
          padding: 0 2.25rem;
          font-size: var(--font-size-1);
          line-height: var(--line-height-0);
        `;

      case 'sm-min':
        return css`
          height: 2.5rem;
          padding: 0 1.5625rem;
          width: max-content;
          font-size: var(--font-size-0);
          line-height: var(--line-height-0);
        `;

      case 'sm-max':
        return css`
          width: 100%;
          height: 2.8125rem;
          padding: 0 1rem;
          font-size: var(--font-size-0);
          line-height: var(--line-height-0);
        `;
    }
  }}
`;

export const StyledButton = styled.button`
  ${ButtonDefault}
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;

export const StyledButtonLink = styled(Link)`
  ${ButtonDefault}
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;
