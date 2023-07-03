import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface iButtonType {
  buttonType: 'primary' | 'outline';
}

interface iButtonSize {
  buttonSize: 'lg-min' | 'lg-max' | 'md-min' | 'md-max' | 'sm-min' | 'sm-max';
}

const ButtonDefault = css<iButtonType & iButtonSize>`
  font-family: var(--font-family-secondary);
  font-weight: var(--font-weight-1);
  border-radius: 0.25rem;
  padding: 0 1rem;

  ${({ buttonType }) => {
    switch (buttonType) {
      case 'primary':
        return css`
          color: var(--color-white);
          background-color: var(--color-primary);
          border: 0.125rem solid var(--color-primary);
        `;

      case 'outline':
        return css`
          color: var(--color-primary);
          background-color: var(--color-white);
          border: 0.125rem solid var(--color-primary);
        `;
    }
  }}

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case 'lg-min':
        return css`
          height: 4.0625rem;
          padding: 0 1.5rem;
          font-size: var(--font-size-2);
          line-height: var(--line-height-1);
        `;

      case 'lg-max':
        return css`
          width: 100%;
          height: 4.0625rem;
          padding: 0 1.5rem;
          font-size: var(--font-size-2);
          line-height: var(--line-height-1);
        `;

      case 'md-min':
        return css`
          height: 3.4375rem;
          padding: 0 1.25rem;
          font-size: var(--font-size-1);
          line-height: var(--line-height-0);
        `;

      case 'md-max':
        return css`
          width: 100%;
          height: 3.4375rem;
          padding: 0 1.25rem;
          font-size: var(--font-size-1);
          line-height: var(--line-height-0);
        `;

      case 'sm-min':
        return css`
          height: 2.8125rem;
          padding: 0 1rem;
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
`;

export const StyledLink = styled(Link)`
  ${ButtonDefault}
`;
