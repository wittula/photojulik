import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 2%;

  h1 {
    margin: 0;
    padding: 0;
    font-size: ${({ theme }) => theme.fontSize.l};
    text-align: center;
    line-height: 1;
    margin-bottom: 10%;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.s};
    line-height: 1.5;

    font-weight: 300;
    text-shadow: 0 0 20px #000;
    text-align: justify;

    strong {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
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
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
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

  width: 40px;
  aspect-ratio: 1/1;
  border-radius: 50%;

  font-size: ${({ theme }) => theme.fontSize.m};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  }

  &:active {
    filter: invert(100%);
  }
`;
