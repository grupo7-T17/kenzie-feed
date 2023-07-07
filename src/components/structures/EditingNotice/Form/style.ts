import styled from 'styled-components';

export const StyledEditingFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 4.375rem;
  width: 100%;
  max-width: 57.5rem;
  gap: 1.25rem;

  > button {
    margin-top: 1.25rem;
  }

  label {
    font-size: clamp(var(--font-size-2), 8vw, var(--font-size-0));
  }
`;
