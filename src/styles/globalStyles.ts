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

  --font-size-10: 50px;
  --font-size-9: 42px;
  --font-size-8: 34px;
  --font-size-7: 32px;
  --font-size-6: 28px;
  --font-size-5: 26px;
  --font-size-4: 22px;
  --font-size-3: 18px;
  --font-size-2: 16px;
  --font-size-1: 14px;
  --font-size-0: 12px;

  --line-height-12: 68px;
  --line-height-11: 56px;
  --line-height-10: 46px;
  --line-height-9: 44px;
  --line-height-8: 38px;
  --line-height-7: 36px;
  --line-height-6: 34px;
  --line-height-5: 32px;
  --line-height-4: 30px;
  --line-height-3: 26px;
  --line-height-2: 22px;
  --line-height-1: 20px;
  --line-height-0: 18px;
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
