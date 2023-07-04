import { styled } from 'styled-components';

export const GalleryContainer = styled.div`
  display: block;
  text-align: center;

  h2 {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  img {
    border-radius: 10px;
  }
`;
