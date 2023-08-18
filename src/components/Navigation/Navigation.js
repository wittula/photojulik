import React, { useState } from 'react';
import {
  StyledNav,
  StyledHeader,
  StyledLogo,
  StyledLink,
  StyledList,
  StyledBurger,
} from './Navigation.styles';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  window.addEventListener('scroll', () => setIsScrolled(window.scrollY >= 80));

  return (
    <>
      <StyledBurger open={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <StyledHeader className={isScrolled ? 'scroll' : null} open={isOpen}>
        <StyledNav>
          <StyledLogo />
          <StyledList open={isOpen}>
            <li>
              <StyledLink to="/" onClick={() => setIsOpen(!isOpen)}>
                O mnie
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/galeria" onClick={() => setIsOpen(!isOpen)}>
                Galeria
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/cennik" onClick={() => setIsOpen(!isOpen)}>
                Cennik
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/kontakt" onClick={() => setIsOpen(!isOpen)}>
                Kontakt
              </StyledLink>
            </li>
          </StyledList>
        </StyledNav>
      </StyledHeader>
    </>
  );
};

export default Navigation;
