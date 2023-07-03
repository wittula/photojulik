import { styled } from 'styled-components';

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.headerBackground};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding: 1% 5%;

  h2 {
    position: relative;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
