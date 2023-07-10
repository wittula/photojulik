import styled from 'styled-components';

export const PriceList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoint}px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const StyledListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;
  border-radius: 1rem;
  aspect-ratio: 5/3;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(
      ${({ theme }) => theme.colors.darkPrimary + '76'} 0%,
      ${({ theme }) => theme.colors.black + 'e9'} 100%
    ),
    url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  span {
    display: block;
    padding: 0.25rem;
    text-transform: uppercase;
    text-shadow: 0 0 15px #000;

    &:last-of-type {
      text-transform: none;
      font-weight: 500;
      font-size: 150%;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint}px) {
    max-width: 25vw;
  }
`;
