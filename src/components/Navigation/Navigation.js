import React, { useState } from 'react';
import {
  StyledNav,
  StyledHeader,
  StyledLogo,
  StyledLink,
  StyledList,
  StyledBurger,
} from './Navigation.styles';

const NavList = ({ open }) => {
  return (
    <StyledList open={open}>
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
    </StyledList>
  );
};

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <StyledBurger open={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <StyledNav open={isOpen}>
        <StyledLogo />
        <NavList open={isOpen} />
      </StyledNav>
    </>
  );
};

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.addEventListener('scroll', () => setIsScrolled(window.scrollY >= 80));

  return (
    <StyledHeader className={isScrolled ? 'scroll' : null}>
      <Burger />
    </StyledHeader>
  );
};

export default Navigation;
