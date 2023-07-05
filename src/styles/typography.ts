import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export interface iSettingsTitle {
  fontStyle: 'lg' | 'md' | 'sm' | 'post';
}

const defaultSettingsTitle = css`
  font-family: var(--font-family);
  font-weight: var(--font-weight-0);
  color: var(--color-black);

  ${({ fontStyle }: iSettingsTitle) => {
    switch (fontStyle) {
      case 'lg':
        return css`
          font-size: clamp(var(--font-size-5), var(--font-size-10), 6vw);
          line-height: clamp(var(--line-height-7), var(--line-height-12), 7.2vw);
        `;

      case 'md':
        return css`
          font-size: clamp(var(--font-size-7), var(--font-size-9), 5.2vw);
          line-height: clamp(var(--line-height-7), var(--line-height-11), 6.24vw);
        `;

      case 'sm':
        return css`
          font-size: clamp(var(--font-size-4), var(--font-size-4), 2.6vw);
          line-height: clamp(var(--line-height-4), var(--line-height-4), 3.12vw);
        `;

      case 'post':
        return css`
          font-size: clamp(var(--font-size-3), var(--font-size-8), 4.2vw);
          line-height: clamp(var(--line-height-4), var(--line-height-10), 5.04vw);
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

export interface iSettingsParagraph {
  fontStyle: 'lg' | 'sm';
}

export const StyledParagraph = styled.p`
  ${defaultSettingsParagraph}

  ${({ fontStyle }: iSettingsParagraph) => {
    switch (fontStyle) {
      case 'lg':
        return css`
          font-size: clamp(var(--font-size-1), var(--font-size-2), 2.6vw);
          line-height: clamp(var(--line-height-0), var(--line-height-7), 3.12vw);
        `;

      case 'sm':
        return css`
          font-size: clamp(var(--font-size-0), var(--font-size-1), 1.3vw);
          line-height: clamp(var(--line-height-2), var(--line-height-0), 1.56vw);
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
