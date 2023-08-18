import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import Template from 'components/Template/Template';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import About from './About';
import Gallery from './Gallery';
import Pricing from './Pricing';
import Contact from './Contact';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Template />}>
            <Route index element={<About />}></Route>
            <Route path="/galeria" element={<Gallery />}></Route>
            <Route path="/cennik" element={<Pricing />}></Route>
            <Route path="/kontakt" element={<Contact />}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
