import { styled } from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 3rem;

  background-color: ${({ theme }) => theme.colors.headerBackground};
  color: #666;

  p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.xs};
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
