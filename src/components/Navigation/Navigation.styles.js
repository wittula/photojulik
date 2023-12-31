import { styled } from 'styled-components';
import Logo from 'components/Logo/Logo';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  position: fixed;
  overflow-x: hidden;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  color: ${({ theme }) => theme.colors.white};
  z-index: 2;

  @media (min-width: ${({ theme }) => theme.breakpoint}px) {
    top: 0;
    left: 0;
    transition: background-color 0.3s ease-in-out;
    transform: translateX(0);
    opacity: 0.75;

    &.scroll {
      background-color: ${({ theme }) => theme.colors.headerBackground + 'd8'};
      backdrop-filter: blur(10px);
      opacity: 1;
    }

    nav {
      background-color: transparent;
      flex-direction: row;
      height: 80px;

      ul {
        flex-direction: row;
        justify-content: flex-end;
        height: 100%;
        margin-inline-end: 10%;

        li {
          margin: 0;
        }
      }
    }
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  li {
    margin-inline: 10%;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.headerBackground + 'e8'};
  height: 100vh;
  width: 100vw;
  text-align: center;
  backdrop-filter: blur(5px);
`;

export const StyledLogo = styled(Logo)`
  height: 30px;
  margin: 10%;

  @media (min-width: ${({ theme }) => theme.breakpoint}px) {
    margin: 0;
    margin-inline-start: 10%;
  }
`;

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 15px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 20;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    transform-origin: 1px;
    transition: transform 0.3s linear, opacity 0.2s;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint}px) {
    display: none;
  }
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  height: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.white};

  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;

  &.active {
    color: white;
    border-bottom: 5px solid ${({ theme }) => theme.colors.primary};
  }
`;
