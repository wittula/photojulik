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
    background: #160f1c;
  }
  
  a, button {
    font-family: 'Poppins', sans-serif;
  }

  .scrolled {
    background-color: rgba(0,0,0,.8);
  }

  .wave {
    display: flex !important;
    margin-top: -150px;
  }

  .flip {
    margin-top: 0;
    rotate: 180deg;
  }
`;
