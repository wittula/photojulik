import { useQuery } from 'react-query';
import { GraphQLClient, gql } from 'graphql-request';

const API_URL = `https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/${process.env.REACT_APP_API_ID}/master`;

const graphQLClient = new GraphQLClient(API_URL);

export function useGetPhotos() {
  return useQuery('get-photos', async () => {
    const { galleries } = await graphQLClient.request(gql`
      {
        galleries {
          images {
            src: url
            width
            height
          }
        }
      }
    `);
    return galleries[0].images;
  });
}

export function useGetPrices() {
  return useQuery('get-prices', async () => {
    const { pricings } = await graphQLClient.request(gql`
      {
        pricings {
          party
          plener
          studio
        }
      }
    `);
    return pricings[0];
  });
}
