import React, { useState, useEffect } from 'react';
import PhotoAlbum from 'react-photo-album';
import { GraphQLClient, gql } from 'graphql-request';
import { GalleryContainer } from './Gallery.styles';

const graphcms = new GraphQLClient(
  'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cljo4gr6a018u01ut2wju6u97/master'
);

const QUERY = gql`
  {
    galleries {
      images {
        src: url
        width
        height
      }
    }
  }
`;

const Gallery = () => {
  const [images, setImages] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      const { galleries } = await graphcms.request(QUERY);
      setImages(galleries[0].images);
    };

    fetchImages();
  }, []);

  console.log(images);
  return (
    <GalleryContainer>
      <h2>Galeria</h2>
      <PhotoAlbum photos={images} layout="rows" />
    </GalleryContainer>
  );
};

export default Gallery;
