import { styled } from 'styled-components';
import background from 'assets/images/background.webp';
import { SocialMediaButton } from './Header';

export const Wrapper = styled.header`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};

  background: ${({ theme }) => theme.colors.headerBackground};
  background: radial-gradient(
    circle at 100% 70%,
    transparent 45%,
    ${({ theme }) => theme.colors.headerBackground} 45.05%,
    ${({ theme }) => theme.colors.darkPrimary} 200%
  );

  h1 {
    margin: 0;
    padding: 0;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: 1.5;

    font-weight: 300;

    strong {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 30%;
    width: 70%;
    height: 100%;
    z-index: -999;

    background-image: linear-gradient(
        ${({ theme }) => theme.colors.primary + '60'},
        ${({ theme }) => theme.colors.darkPrimary + 'f0'}
      ),
      url(${background});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const Content = styled.div`
  padding: 5%;
  max-width: 50%;
`;

export const GradientText = styled.span`
  background: -webkit-linear-gradient(
    125deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.darkPrimary} 120%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SocialMediaLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 15px;
  margin: 0;
  padding: 0;
`;

export const StyledA = styled.a`
  color: ${({ theme }) => theme.colors.darkPrimary};
  background-color: ${({ theme }) => theme.colors.primary};

  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  aspect-ratio: 1/1;
  border-radius: 50%;

  font-size: ${({ theme }) => theme.fontSize.m};
  margin-bottom: 50px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  }

  &:active {
    filter: invert(100%);
  }
`;
