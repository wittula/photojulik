import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import MainTemplate from 'components/MainTemplate/MainTemplate';
import { theme } from 'assets/styles/theme';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate></MainTemplate>
    </ThemeProvider>
  );
};

export default Root;
