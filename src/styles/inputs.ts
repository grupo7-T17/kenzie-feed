import styled, { css } from 'styled-components';

export interface iInputSize {
  inputSize: 'md-min' | 'md-max' | 'lg-min' | 'lg-max';
}

export interface iInputStyle {
  inputStyle: 'default' | 'borderless';
}

const InputSettings = css<iInputSize & iInputStyle>`
  font-family: var(--font-family-secondary);
  font-weight: var(--font-weight-0);
  background-color: var(--color-white);
  border-radius: 0.25rem;
  padding: 0.75rem;

  ${({ inputStyle }) => {
    switch (inputStyle) {
      case 'default':
        return css`
          border: 0.0625rem solid var(--color-input-default);

          &:focus {
            border: 0.0625rem solid var(--color-black);
          }
        `;
      case 'borderless':
        return css`
          border: 0.0625rem solid var(--color-white);

          &:focus {
            border: 0.0625rem solid var(--color-input-default);
          }
        `;
    }
  }}

  ${({ inputSize }) => {
    switch (inputSize) {
      case 'md-min':
        return css`
          font-size: var(--font-size-3);
          line-height: var(--line-height-3);
          width: 100%;
          max-width: 23.125rem;

          &::placeholder {
            color: var(--color-input-default);
            font-size: var(--font-size-3);
          }
        `;

      case 'md-max':
        return css`
          font-size: var(--font-size-3);
          line-height: var(--line-height-3);
          width: 100%;
          max-width: 64rem;

          &::placeholder {
            color: var(--color-input-default);
            font-size: var(--font-size-3);
          }
        `;

      case 'lg-min':
        return css`
          font-size: var(--font-size-4);
          line-height: var(--line-height-3);
          width: 100%;
          max-width: 23.125rem;

          &::placeholder {
            color: var(--color-input-default);
            font-size: var(--font-size-4);
          }
        `;

      case 'lg-max':
        return css`
          font-size: var(--font-size-4);
          line-height: var(--line-height-3);
          width: 100%;
          max-width: 64rem;

          &::placeholder {
            color: var(--color-input-default);
            font-size: var(--font-size-4);
          }
        `;
    }
  }}
`;

export const StyledInput = styled.input`
  ${InputSettings}
`;

export const StyledTextarea = styled.textarea`
  ${InputSettings}
  height: 18.75rem;

  @media (max-width: 425px) {
    height: 12.5rem;
  }
`;
