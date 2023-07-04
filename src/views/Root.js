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
        <Template>
          <Routes>
            <Route exact path="/" element={<Navigate to="/about" />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/pricing" element={<Pricing />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </Template>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
