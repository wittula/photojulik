import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.colors.headerBackground};
  }
  
  a, button {
    font-family: 'Poppins', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    background-clip: padding-box;
  }
`;
