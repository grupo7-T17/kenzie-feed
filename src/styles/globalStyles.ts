import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
  --color-primary: #55A3FF;
  --color-white-1: #F3F3F3;
  --color-white: #FFFFFF;
  --color-black: #000000;
  --color-input-default: #808080;

  --font-family: 'Lora', 'Inter', sans-serif;
  --font-family-secondary: 'Inter', sans-serif;

  --font-weight-1: 700;
  --font-weight-0: 400;

  --font-size-10: 3.125rem;
  --font-size-9: 2.625rem;
  --font-size-8: 2.125rem;
  --font-size-7: 2rem;
  --font-size-6: 1.75rem;
  --font-size-5: 1.625rem;
  --font-size-4: 1.375rem;
  --font-size-3: 1.125rem;
  --font-size-2: 1rem;
  --font-size-1: 0.875rem;
  --font-size-0: 0.75rem;

  --line-height-12: 4.25rem;
  --line-height-11: 3.5rem;
  --line-height-10: 2.875rem;
  --line-height-9: 2.75rem;
  --line-height-8: 2.375rem;
  --line-height-7: 2.25rem;
  --line-height-6: 2.125rem;
  --line-height-5: 2rem;
  --line-height-4: 1.875rem;
  --line-height-3: 1.625rem;
  --line-height-2: 1.375rem;
  --line-height-1: 1.25rem;
  --line-height-0: 1.125rem;
  }

  ul::-webkit-scrollbar,
  textarea::-webkit-scrollbar {
    height: 0.625rem;
    width: 0.625rem;
  }
  
  ul::-webkit-scrollbar-thumb,
  textarea::-webkit-scrollbar-thumb {
    background-color: var(--color-primary);
  }
`;
