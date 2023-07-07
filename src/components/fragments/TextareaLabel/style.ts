import styled from 'styled-components';

export const StyledTextareaLabelContainer = styled.fieldset`
  display: flex;
  flex-direction: column;
  width: calc(100% - 1.75rem);
  gap: 0.75rem;

  p {
    font-weight: var(--font-weight-1);
    color: red;
  }
`;
