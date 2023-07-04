import React, { useState } from 'react';
import {
  StyledNav,
  StyledHeader,
  StyledLogo,
  StyledLink,
} from './Navigation.styles';
// import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.addEventListener('scroll', () => setIsScrolled(window.scrollY >= 80));

  return (
    <StyledHeader className={isScrolled ? 'scroll' : null}>
      <StyledLogo />
      <StyledNav>
        <ul>
          <li>
            <StyledLink to="/about">O mnie</StyledLink>
          </li>
          <li>
            <StyledLink to="/gallery">Galeria</StyledLink>
          </li>
          <li>
            <StyledLink to="/pricing">Cennik</StyledLink>
          </li>
          <li>
            <StyledLink to="/contact">Kontakt</StyledLink>
          </li>
        </ul>
      </StyledNav>
    </StyledHeader>
  );
};

export default Navigation;
