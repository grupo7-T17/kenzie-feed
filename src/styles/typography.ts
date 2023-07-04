import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface iSettingsTitle {
  fontStyle: 'lg' | 'md' | 'sm' | 'm-lg' | 'm-md' | 'post' | 'm-post';
}

const defaultSettingsTitle = css`
  font-family: var(--font-family);
  font-weight: var(--font-weight-0);
  color: var(--color-black);

  ${({ fontStyle }: iSettingsTitle) => {
    switch (fontStyle) {
      case 'lg':
        return css`
          font-size: var(--font-size-10);
          line-height: var(--line-height-12);
        `;

      case 'md':
        return css`
          font-size: var(--font-size-9);
          line-height: var(--line-height-11);
        `;

      case 'sm':
        return css`
          font-size: var(--font-size-4);
          line-height: var(--line-height-4);
        `;

      case 'post':
        return css`
          font-size: var(--font-size-8);
          line-height: var(--line-height-10);
        `;

      case 'm-lg':
        return css`
          font-size: var(--font-size-7);
          line-height: var(--line-height-9);
        `;

      case 'm-md':
        return css`
          font-size: var(--font-size-6);
          line-height: var(--line-height-8);
        `;

      case 'm-post':
        return css`
          font-size: var(--font-size-5);
          line-height: var(--line-height-7);
        `;
    }
  }}
`;

export const StyledTitleOne = styled.h1`
  ${defaultSettingsTitle}
`;

export const StyledTitleTwo = styled.h2`
  ${defaultSettingsTitle}
`;

export const StyledTitleThree = styled.h3`
  ${defaultSettingsTitle}
`;

export const StyledTitleFour = styled.h4`
  ${defaultSettingsTitle}
`;

const defaultSettingsParagraph = css`
  font-family: var(--font-family-secondary);
  font-weight: var(--font-weight-0);
  color: var(--color-black);
`;

interface iSettingsParagraph {
  fontStyle: 'lg' | 'sm' | 'm-md';
}

export const StyledParagraph = styled.p`
  ${defaultSettingsParagraph}

  ${({ fontStyle }: iSettingsParagraph) => {
    switch (fontStyle) {
      case 'lg':
        return css`
          font-size: var(--font-size-2);
          line-height: var(--line-height-7);
        `;

      case 'sm':
        return css`
          font-size: var(--font-size-0);
          line-height: var(--line-height-0);
        `;

      case 'm-md':
        return css`
          font-size: var(--font-size-2);
          line-height: var(--line-height-6);
        `;
    }
  }}
`;

export const StyledLabel = styled.label`
  font-family: var(--font-family-secondary);
  font-size: var(--font-size-0);
  font-weight: var(--font-weight-1);
  line-height: var(--line-height-0);
  color: var(--color-black);
`;

export const StyledLink = styled(Link)`
  font-family: var(--font-family-secondary);
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-0);
  line-height: var(--line-height-0);
  color: var(--color-primary);
`;
