import { styled } from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  padding: 2% 5%;

  background-color: #111;
  color: #777;

  p {
    margin: 0;
    padding: 0;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
