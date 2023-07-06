import { useQuery } from 'react-query';
import { GraphQLClient, gql } from 'graphql-request';

// const API_URL = `https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/${process.env.REACT_APP_API_ID}/master`;

// const graphQLClient = new GraphQLClient(API_URL);

export function useGetPhotos() {
  return useQuery('get-photos', async () => {
    // const { photos } = await graphQLClient.request(gql`
    //   {
    //     photos(first: 1) {
    //       images {
    //         src: url
    //         width
    //         height
    //       }
    //     }
    //   }
    // `);
    // return photos.images;

    return [];
  });
}

export function useGetPrices() {
  return useQuery('get-prices', async () => {
    // const { pricings } = await graphQLClient.request(gql`
    //   {
    //   pricings(first: 1) {
    //     party
    //     plener
    //     studio
    //   }
    // }
    // `);
    // return pricings;

    return {
      studio: 'studio text',
      plener: 'plener text',
      party: 'party text',
    };
  });
}
