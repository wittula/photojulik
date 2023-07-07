import React from 'react';
import { Main } from './Template.styles';
import Footer from 'components/Footer/Footer';
import Navigation from 'components/Navigation/Navigation';
import { Wrapper } from './Template.styles';

const Template = ({ children }) => (
  <Wrapper>
    <Navigation />
    <Main>{children}</Main>
    <Footer />
  </Wrapper>
);

export default Template;
