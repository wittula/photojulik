import { styled } from 'styled-components';
import background from 'assets/images/background-m-noise.webp';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  display: grid;
  grid-template-rows: 1fr 80px;
`;

export const Content = styled.div`
  display: block;
  padding: 0;
  margin: 0;

  @media (min-width: 600px) {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 2vh 5vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Main = styled.main`
  padding-top: 80px;
  color: ${({ theme }) => theme.colors.white};

  background-image: linear-gradient(
      175deg,
      ${({ theme }) => theme.colors.headerBackground + 'f4'} 0%,
      ${({ theme }) => theme.colors.darkPrimary + '60'} 100%
    ),
    url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;
