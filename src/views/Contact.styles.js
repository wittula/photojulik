import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
  font-family: inherit;

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

  div {
    width: 100%;
    display: flex;
    gap: 0.5rem;
  }

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
`;

export const InputGroup = styled.div`
  flex-direction: column;
`;

export const ConsentArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-block: 1rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;
