import React from 'react';
import { Content, Main } from './Template.styles';
import Footer from 'components/Footer/Footer';
import Navigation from 'components/Navigation/Navigation';
import { Wrapper } from './Template.styles';

const Template = ({ children }) => (
  <Wrapper>
    <Navigation />
    <Main>
      <Content>{children}</Content>
    </Main>
    <Footer />
  </Wrapper>
);

export default Template;
