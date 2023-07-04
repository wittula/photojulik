import { styled } from 'styled-components';
import Logo from 'components/Logo/Logo';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  color: ${({ theme }) => theme.colors.white};
  transition: background-color 0.3s ease-in-out;

  padding: 0 5%;

  &.scroll {
    background-color: ${({ theme }) => theme.colors.headerBackground + 'd8'};
    backdrop-filter: blur(10px);
  }
`;

export const StyledNav = styled.nav`
  height: 100%;

  ul {
    display: flex;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    gap: 20px;
    list-style: none;

    li {
      display: inline-block;
      height: 100%;
    }
  }
`;

export const StyledLogo = styled(Logo)`
  height: 50%;
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  height: 100%;
  padding-inline: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};

  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;

  &.active {
    color: white;
    border-bottom: 5px solid ${({ theme }) => theme.colors.primary};
  }
`;
