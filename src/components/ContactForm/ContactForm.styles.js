import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.headerBackground + 'c4'};

  label {
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: 500;
    padding-bottom: 0.25rem;
  }

  input,
  textarea {
    font-family: inherit;
    padding: 0.5rem;
    appearance: none;
    border: none;
    outline: none;

    border-radius: 0.5rem;
  }

  textarea {
    resize: vertical;
    overflow: auto;
    height: 20vh;
    min-height: 20vh;
    max-height: 50vh;
  }

  input[type='submit'] {
    margin-top: 2rem;
    background-color: ${({ theme }) => theme.colors.green};
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.s};

    transition: background-color 0.3s ease-in-out;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.darkGreen};
    }

    &:disabled {
      cursor: not-allowed;
      background-color: ${({ theme }) => theme.colors.white};
    }

    &:active {
      filter: invert(0.8);
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint}px) {
    max-width: 60%;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: inherit;

  @media (min-width: ${({ theme }) => theme.breakpoint}px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const ErrorText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.error};
  margin: 0;
  padding-block: 0.15rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ConsentArea = styled.div`
  display: flex;
  gap: 0.5rem;

  input[type='checkbox'] {
    margin: 0;

    color: ${({ theme }) => theme.colors.primary};
    width: 1.35em;
    height: 1.35em;
    border: 0.15em solid ${({ theme }) => theme.colors.primary};
    border-radius: 0.15em;
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;

    &::before {
      content: '';
      width: 0.85em;
      height: 0.85em;
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
      transform: scale(0);
      transform-origin: bottom left;
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em ${({ theme }) => theme.colors.primary};
    }
    &:checked::before {
      transform: scale(1);
    }
  }

  label {
    font-size: ${({ theme }) => theme.fontSize.xs};

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
