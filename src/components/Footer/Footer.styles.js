import { styled } from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  height: 80px;

  background-color: ${({ theme }) => theme.colors.headerBackground};
  color: #666;

  p {
    margin: 0;
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
