import { styled } from 'styled-components';
import background from 'assets/images/background-m-noise.webp';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  display: grid;
  grid-template-rows: 1fr 3rem;

  background-image: linear-gradient(
      175deg,
      ${({ theme }) => theme.colors.headerBackground + 'f4'} 0%,
      ${({ theme }) => theme.colors.darkPrimary + '60'} 100%
    ),
    url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;

  @media (min-width: ${({ theme }) => theme.breakpoint}px) {
    min-height: 100vh;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 1rem;

  padding: 1.5rem;

  color: ${({ theme }) => theme.colors.white};

  h2 {
    margin: 0;
    padding: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint}px) {
    padding: 80px 5vw;
  }
`;
