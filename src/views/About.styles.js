import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-block: 2rem;
  z-index: 1;

  h1 {
    margin: 0;
    padding: 0;
    font-size: ${({ theme }) => theme.fontSize.l};
    text-align: center;
    line-height: 1;
    margin-bottom: 1rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint}px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    h1 {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoint}px) {
    min-width: 30%;
    max-width: 50%;

    p {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }
`;

export const ProfilePicture = styled.img`
  width: 75%;
  max-width: 300px;
  aspect-ratio: 1/1;
  border-radius: 50%;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  p {
    font-size: ${({ theme }) => theme.fontSize.xs};
    line-height: 1.5;

    font-weight: 300;

    background-color: ${({ theme }) => theme.colors.headerBackground + 'a8'};
    backdrop-filter: blur(5px);
    display: inline-block;
    margin: 0;
    padding: 0.75rem;
    border-radius: 15px;
    border-bottom-left-radius: 1px;

    strong {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoint}px) {
    p {
      font-size: ${({ theme }) => theme.fontSize.s};
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

  font-size: ${({ theme }) => theme.fontSize.s};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  }

  &:active {
    filter: invert(100%);
  }

  @media (min-width: ${({ theme }) => theme.breakpoint}px) {
    width: 50px;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
