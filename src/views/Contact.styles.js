import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoint}px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const ContactData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.headerBackground + 'c4'};

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    a {
      display: flex;
      align-items: center;
      gap: 1rem;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const ContactIcon = styled.div`
  width: 40px;
  aspect-ratio: 1/1;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.darkPrimary + 'c4'};
`;
