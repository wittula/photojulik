import React from 'react';
import { Main } from './Template.styles';
import Footer from 'components/Footer/Footer';
import Navigation from 'components/Navigation/Navigation';
import { Wrapper } from './Template.styles';
import { Outlet } from 'react-router-dom';

const Template = () => (
  <Wrapper>
    <Navigation />
    <Main>
      <Outlet />
    </Main>
    <Footer />
  </Wrapper>
);

export default Template;
